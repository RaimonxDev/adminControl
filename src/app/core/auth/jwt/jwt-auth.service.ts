import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import axios, { AxiosInstance } from 'axios';
import { AsmSplashScreenService } from '@assembly';

import { AuthService } from 'app/core/auth/auth.service';
import { PopulateService } from 'app/core/populate/populate.service';

@Injectable({
    providedIn: 'root'
})
export class JWTAuthService implements AuthService
{
    // Private
    private _accessToken: string;
    private _authenticated: boolean;
    private _axios: AxiosInstance;
    private _onLoggedIn: BehaviorSubject<any>;
    private _onLoggedOut: BehaviorSubject<any>;
    private _user: any;

    /**
     * Constructor
     *
     * @param {AsmSplashScreenService} _asmSplashScreenService
     * @param {PopulateService} _populateService
     * @param {Router} _router
     */
    constructor(
        private _asmSplashScreenService: AsmSplashScreenService,
        private _populateService: PopulateService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._axios = axios;
        this._onLoggedIn = new BehaviorSubject(null);
        this._onLoggedOut = new BehaviorSubject(null);

        // Setup the interceptors
        this._setupInterceptors();

        // Initialize
        this._checkAuthenticationStatus();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for access token
     */
    get accessToken(): any
    {
        return this._accessToken;
    }

    /**
     * Getter for user
     */
    get user(): any
    {
        return this._user;
    }

    /**
     * Getter for onLoggedIn
     */
    get onLoggedIn(): Observable<any>
    {
        return this._onLoggedIn.asObservable();
    }

    /**
     * Getter for onLoggedOut
     */
    get onLoggedOut(): Observable<any>
    {
        return this._onLoggedOut.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check the authentication status of the current
     * user and login if the token exists and valid.
     *
     * Also update the local storage with the new
     * access token and user data.
     *
     * @private
     */
    private _checkAuthenticationStatus(): void
    {
        // Set the authenticated flag to false by default
        this._authenticated = false;

        // Check the local storage for the access token
        const accessToken = localStorage.getItem('access_token');

        // If there is a access token and it didn't expire...
        if ( accessToken && !this.isTokenExpired(accessToken) )
        {
            // Disable the splash screen's auto hide
            this._asmSplashScreenService.disableAutoHide();

            // Login using access token
            from(this._axios.post('api/auth/login-jwt', {accessToken}))
                .pipe(
                    map((response) => {

                        // Get the data
                        const user           = response.data.user,
                              newAccessToken = response.data.accessToken;

                        // Store the data in the local storage
                        localStorage.setItem('access_token', newAccessToken);
                        localStorage.setItem('user', JSON.stringify(user));

                        // Set the authenticated flag to true
                        this._authenticated = true;

                        // Store the data in the service
                        this._user = user;
                        this._accessToken = accessToken;

                        // Execute the observable
                        this._onLoggedIn.next(user);

                        // Populate the initial data
                        this._populateService.load().subscribe(() => {

                            // Hide the splash screen
                            this._asmSplashScreenService.hide();
                        });
                    }),
                    catchError(error => {

                        // Hide the splash screen
                        this._asmSplashScreenService.hide();

                        // Return the error observable
                        return throwError(error);
                    })
                ).subscribe();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Login
     *
     * @param username
     * @param password
     */
    login(username: string, password: string): Observable<any>
    {
        // Return if the user is already logged in
        if ( this.isAuthenticated() )
        {
            return;
        }

        return from(this._axios.post('api/auth/login', {
            username,
            password
        })).pipe(
            switchMap((response) => {

                // Get the data
                const user        = response.data.user,
                      accessToken = response.data.accessToken;

                // Store the data in the local storage
                localStorage.setItem('access_token', accessToken);
                localStorage.setItem('user', JSON.stringify(user));

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the data in the service
                this._user = user;
                this._accessToken = accessToken;

                // Execute the observable
                this._onLoggedIn.next(user);

                // Populate the initial data
                return this._populateService.load();
            })
        );
    }

    /**
     * Logout
     */
    logout(): void
    {
        // Remove the data from the local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Clear the service data
        this._accessToken = null;
        this._user = null;

        // Execute the observable
        this._onLoggedOut.next(true);

        // Redirect to the login page
        this._router.navigate(['pages', 'auth', 'login']);
    }

    /**
     * Check whether the user is logged in or not
     */
    isAuthenticated(): boolean
    {
        return this._authenticated;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ JWT Interceptors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setup the interceptors
     *
     * @private
     */
    private _setupInterceptors(): void
    {
        // Response
        this._axios.interceptors.response.use(
            (config) => {

                // Continue with the response
                return config;
            },
            (error) => {

                // Print out the error for easier debugging
                console.error(error);

                // Catch all "401 Unauthorized" responses
                if ( error.response.status === 401 )
                {
                    // Log out the user
                    this.logout();
                }

                // Reject the response
                return Promise.reject(error);
            });

        // Request
        this._axios.interceptors.request.use(
            (config) => {

                // If the user logged in and has an access token...
                if ( this.user && this.accessToken )
                {
                    // If the access token didn't expire, add the Authorization header.
                    //
                    // We won't add the Authorization header if the access token expired.
                    // This will force server to return "401 Unauthorized" response for
                    // the protected API routes which our response interceptor will catch
                    // and delete the access token from the local storage while logging
                    // the user out from the app.
                    if ( !this.isTokenExpired(this.accessToken) )
                    {
                        config.headers.Authorization = 'Bearer ' + this.accessToken;
                    }
                }

                // Continue with the request
                return config;
            },
            (error) => {

                // Reject the request
                return Promise.reject(error);
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ JWT HELPERS
    //
    // Helper methods are derivations of the Auth0 Angular-JWT helper service methods
    // https://github.com/auth0/angular2-jwt
    // -----------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Base64 decoder
     * Credits: https://github.com/atk
     *
     * @param str
     */
    private b64decode(str: string): string
    {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let output = '';

        str = String(str).replace(/=+$/, '');

        if ( str.length % 4 === 1 )
        {
            throw new Error(
                '\'atob\' failed: The string to be decoded is not correctly encoded.'
            );
        }

        /* tslint:disable */
        for (
            // initialize result and counters
            let bc = 0, bs: any, buffer: any, idx = 0;
            // get next character
            (buffer = str.charAt(idx++));
            // character found in table? initialize bit storage and add its ascii value;
            ~buffer &&
            (
                (bs = bc % 4 ? bs * 64 + buffer : buffer),
                    // and if not first of each 4 characters,
                    // convert the first 8 bits to one ascii character
                bc++ % 4
            )
                ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
                : 0
        )
        {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        /* tslint:enable */

        return output;
    }

    /**
     * Base64 unicode decoder
     *
     * @param str
     */
    private b64DecodeUnicode(str: any): string
    {
        return decodeURIComponent(
            Array.prototype.map
                 .call(this.b64decode(str), (c: any) => {
                     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                 })
                 .join('')
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * URL Base 64 decoder
     * @param str
     */
    urlBase64Decode(str: string): string
    {
        let output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch ( output.length % 4 )
        {
            case 0:
            {
                break;
            }
            case 2:
            {
                output += '==';
                break;
            }
            case 3:
            {
                output += '=';
                break;
            }
            default:
            {
                throw Error('Illegal base64url string!');
            }
        }
        return this.b64DecodeUnicode(output);
    }

    /**
     * Decode token
     *
     * @param token
     */
    decodeToken(token: string): any
    {
        // Return if there is no token
        if ( !token )
        {
            return null;
        }

        // Split the token
        const parts = token.split('.');

        if ( parts.length !== 3 )
        {
            throw new Error('The inspected token doesn\'t appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.');
        }

        // Decode the token using the Base64 decoder
        const decoded = this.urlBase64Decode(parts[1]);

        if ( !decoded )
        {
            throw new Error('Cannot decode the token.');
        }

        return JSON.parse(decoded);
    }

    /**
     * Get token expiration date
     *
     * @param token
     */
    getTokenExpirationDate(token: string): Date | null
    {
        // Get the decoded token
        const decodedToken = this.decodeToken(token);

        // Return if the decodedToken doesn't have an 'exp' field
        if ( !decodedToken.hasOwnProperty('exp') )
        {
            return null;
        }

        // Convert the expiration date
        const date = new Date(0);
        date.setUTCSeconds(decodedToken.exp);

        return date;
    }

    /**
     * Is token expired?
     *
     * @param token
     * @param offsetSeconds
     */
    isTokenExpired(token: string, offsetSeconds?: number): boolean
    {
        // Return if there is no token
        if ( !token || token === '' )
        {
            return true;
        }

        // Get the expiration date
        const date = this.getTokenExpirationDate(token);

        offsetSeconds = offsetSeconds || 0;

        if ( date === null )
        {
            return true;
        }

        // Check if the token is expired
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    }
}

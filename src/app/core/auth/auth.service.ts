import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AsmSplashScreenService } from '@assembly';

import { JWTUtilityService } from 'app/core/auth/jwt/jwt-utility.service';
import { PopulateService } from 'app/core/populate/populate.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService
{
    // Private
    private _accessToken: string;
    private _authenticated: boolean;
    private _onLoggedIn: BehaviorSubject<any>;
    private _onLoggedOut: BehaviorSubject<any>;
    private _user: any;

    /**
     * Constructor
     *
     * @param {AsmSplashScreenService} _asmSplashScreenService
     * @param {HttpClient} _httpClient
     * @param {JWTUtilityService} _JWTUtilityService
     * @param {PopulateService} _populateService
     */
    constructor(
        private _asmSplashScreenService: AsmSplashScreenService,
        private _httpClient: HttpClient,
        private _JWTUtilityService: JWTUtilityService,
        private _populateService: PopulateService
    )
    {
        // Set the defaults
        this._authenticated = false;

        // Set the private defaults
        this._onLoggedIn = new BehaviorSubject(null);
        this._onLoggedOut = new BehaviorSubject(null);
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

        return this._httpClient.post('api/auth/login', {
            username,
            password
        }).pipe(
            switchMap((response: any) => {

                // Get the data
                const user        = response.user,
                      accessToken = response.accessToken;

                // Store the data in the local storage
                localStorage.setItem('accessToken', accessToken);
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
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Clear the service data
        this._accessToken = null;
        this._user = null;

        // Execute the observable
        this._onLoggedOut.next(true);
    }

    /**
     * Check session and renew the JWT if possible
     */
    checkSession(): void
    {
        // Get the access token from the local storage
        const accessToken = localStorage.getItem('accessToken');

        // Return, if there is no access token available or if it expired
        if ( !accessToken || this._JWTUtilityService.isTokenExpired(accessToken) )
        {
            return;
        }

        // Disable the splash screen's auto hide
        this._asmSplashScreenService.disableAutoHide();

        // Renew token
        this._httpClient.post('api/auth/refresh-access-token', {accessToken})
            .pipe(
                map((response: any) => {

                    // Get the data
                    const newAccessToken = response.accessToken,
                          user           = response.user;

                    // Store the data in the local storage
                    localStorage.setItem('accessToken', newAccessToken);
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
                })
            ).subscribe();
    }

    /**
     * Check whether the user is authenticated or not
     */
    isAuthenticated(): boolean
    {
        return this._authenticated;
    }
}

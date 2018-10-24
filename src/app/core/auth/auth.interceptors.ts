import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

import { AuthService } from 'app/core/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptors
{
    // Private
    private _axios: AxiosInstance;

    /**
     * Constructor
     *
     * @param {AuthService} _authService
     */
    constructor(
        private _authService: AuthService
    )
    {
        // Set the private defaults
        this._axios = axios;

        // Initialize
        this._init();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Init
     *
     * @private
     */
    private _init(): void
    {
        // Setup axios interceptors
        this._setupAxiosInterceptors();

        // Setup Angular's HttpClient interceptors
        // ...
    }

    /**
     * Setup axios interceptors
     *
     * @private
     */
    private _setupAxiosInterceptors(): void
    {
        // Response
        this._axios.interceptors.response.use(
            (config) => {

                // Continue with the response
                return config;
            },
            (error) => {

                // Catch all "401 Unauthorized" responses
                if ( error.response.status === 401 )
                {
                    // Log out the user
                    this._authService.logout();
                }

                // Reject the response
                return Promise.reject(error);
            });

        // Request
        this._axios.interceptors.request.use(
            (config) => {

                // If the user logged in and has a token...
                if ( this._authService.user && this._authService.user.token )
                {
                    // Get the token
                    const token = this._authService.user.token;

                    // If the token didn't expire, add the Authorization header.
                    //
                    // We won't add the Authorization header if the token expired.
                    // This will force server to return "401 Unauthorized" response
                    // for the protected API routes which our response interceptor
                    // will catch and remove the token from the local storage while
                    // logging the user out from the app.
                    if ( !this._authService.isTokenExpired(token) )
                    {
                        config.headers.Authorization = 'Bearer ' + token;
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
}

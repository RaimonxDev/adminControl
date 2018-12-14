import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from 'app/core/auth/auth.service';
import { JWTUtilityService } from 'app/core/auth/jwt/jwt-utility.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor
{
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _JWTUtilityService: JWTUtilityService
    )
    {
    }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // Clone the request object
        let newReq = req.clone();

        // Request
        // If the user logged in and has an access token...
        if ( this._authService.user && this._authService.accessToken )
        {
            // If the access token didn't expire, add the Authorization header.
            //
            // We won't add the Authorization header if the access token expired.
            // This will force the server to return a "401 Unauthorized" response
            // for the protected API routes which our response interceptor will
            // catch and delete the access token from the local storage while logging
            // the user out from the app.
            if ( !this._JWTUtilityService.isTokenExpired(this._authService.accessToken) )
            {
                newReq = req.clone({
                    headers: req.headers.set('Authorization', 'Bearer ' + this._authService.accessToken)
                });
            }
        }

        // Response
        return next.handle(newReq).pipe(
            catchError((error) => {

                // Catch "401 Unauthorized" responses
                if ( error instanceof HttpErrorResponse && error.status === 401 )
                {
                    // Logout
                    this._authService.logout();

                    // Reload the app
                    location.reload(true);
                }

                return throwError(error);
            })
        );
    }

}

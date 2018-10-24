import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'app/core/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate
{
    /**
     * Constructor
     *
     * @param {AuthService} _authService
     * @param {Router} _router
     */
    constructor(
        private _authService: AuthService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check if there is a user logged in
     *
     * @param url
     * @private
     */
    private _checkLogin(url): boolean
    {
        // Allow, if there is a user logged in
        if ( this._authService.isLoggedIn() )
        {
            return true;
        }

        // Store the attempted url
        this._authService.redirectUrl = url;

        // Navigate to the login page
        this._router.navigate(['pages', 'auth', 'login']);

        // Prevent the access
        return false;
    }

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        return this._checkLogin(state.url);
    }
}

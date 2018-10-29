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
     * Allow authenticated users
     *
     * @param redirectURL
     * @private
     */
    private _checkAuthentication(redirectURL): boolean
    {
        // Allow, if the user is authenticated
        if ( this._authService.isAuthenticated() )
        {
            return true;
        }

        // Navigate to the login page with the redirectURL parameter
        this._router.navigate(['pages', 'auth', 'login'], {queryParams: {redirectURL: redirectURL}});

        // Prevent the access
        return false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        return this._checkAuthentication(state.url);
    }
}

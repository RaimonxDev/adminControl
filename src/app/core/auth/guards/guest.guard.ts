import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'app/core/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class GuestGuard implements CanActivate
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
     * Check if the user is a guest
     *
     * @param url
     * @private
     */
    private _checkGuest(url): boolean
    {
        // Allow, if the user is a guest
        if ( !this._authService.isLoggedIn() )
        {
            return true;
        }

        // Navigate back to root
        this._router.navigate(['']);

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
        return this._checkGuest(state.url);
    }
}

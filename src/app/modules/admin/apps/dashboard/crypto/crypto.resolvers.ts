import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardCryptoService } from 'app/modules/admin/apps/dashboard/crypto/crypto.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardCryptoResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {DashboardCryptoService} _dashboardCryptoService
     */
    constructor(
        private _dashboardCryptoService: DashboardCryptoService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._dashboardCryptoService.getData();
    }
}

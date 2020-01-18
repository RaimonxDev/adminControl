import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardCryptocurrencyService } from 'app/modules/admin/apps/dashboard/cryptocurrency/cryptocurrency.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardCryptocurrencyResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {DashboardCryptocurrencyService} _dashboardCryptocurrencyService
     */
    constructor(
        private _dashboardCryptocurrencyService: DashboardCryptocurrencyService
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return this._dashboardCryptocurrencyService.getData();
    }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardSalesService } from 'app/modules/admin/apps/dashboard/sales/sales.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardSalesResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {DashboardSalesService} _dashboardSalesService
     */
    constructor(
        private _dashboardSalesService: DashboardSalesService
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
        return this._dashboardSalesService.getData();
    }
}

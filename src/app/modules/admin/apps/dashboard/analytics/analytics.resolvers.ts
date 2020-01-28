import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardAnalyticsService } from 'app/modules/admin/apps/dashboard/analytics/analytics.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardAnalyticsResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {DashboardAnalyticsService} _dashboardAnalyticsService
     */
    constructor(
        private _dashboardAnalyticsService: DashboardAnalyticsService
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
        return this._dashboardAnalyticsService.getData();
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AdminResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Load compact navigation data
     *
     * @private
     */
    private _loadCompactNavigation(): Observable<any>
    {
        return this._httpClient.get('api/navigation/compact');
    }

    /**
     * Load default navigation data
     *
     * @private
     */
    private _loadDefaultNavigation(): Observable<any>
    {
        return this._httpClient.get('api/navigation/default');
    }

    /**
     * Load notifications
     *
     * @private
     */
    private _loadNotifications(): Observable<any>
    {
        return this._httpClient.get('api/notifications');
    }

    /**
     * Load shortcuts
     *
     * @private
     */
    private _loadShortcuts(): Observable<any>
    {
        return this._httpClient.get('api/shortcuts');
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
        return forkJoin([

            // Navigation data
            this._loadCompactNavigation(),
            this._loadDefaultNavigation(),

            // Notifications
            this._loadNotifications(),

            // Shortcuts
            this._loadShortcuts()
        ]).pipe(
            map((data) => {

                return {
                    compactNavigation: data[0].navigation,
                    defaultNavigation: data[1].navigation,
                    notifications    : data[2].notifications,
                    shortcuts        : data[3].shortcuts
                };
            })
        );
    }
}

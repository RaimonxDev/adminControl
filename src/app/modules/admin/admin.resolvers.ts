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
     * Load navigation data
     *
     * @private
     */
    private _loadNavigation(): Observable<any>
    {
        return this._httpClient.get('api/navigation');
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

    /**
     * Load user
     *
     * @private
     */
    private _loadUser(): Observable<any>
    {
        return this._httpClient.get('api/user');
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
            this._loadNavigation(),

            // Notifications
            this._loadNotifications(),

            // Shortcuts
            this._loadShortcuts(),

            // User
            this._loadUser()
        ]).pipe(
            map((data) => {

                return {
                    navigation   : {
                        compact: data[0].compact,
                        default: data[0].default
                    },
                    notifications: data[1].notifications,
                    shortcuts    : data[2].shortcuts,
                    user         : data[3].user
                };
            })
        );
    }
}

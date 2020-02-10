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
     * Load messages
     *
     * @private
     */
    private _loadMessages(): Observable<any>
    {
        return this._httpClient.get('api/messages');
    }

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

            // Messages
            this._loadMessages(),

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
                    messages     : data[0].messages,
                    navigation   : {
                        compact   : data[1].compact,
                        default   : data[1].default,
                        horizontal: data[1].horizontal
                    },
                    notifications: data[2].notifications,
                    shortcuts    : data[3].shortcuts,
                    user         : data[4].user
                };
            })
        );
    }
}

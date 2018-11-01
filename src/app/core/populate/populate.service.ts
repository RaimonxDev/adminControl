import { Injectable } from '@angular/core';
import { forkJoin, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import axios, { AxiosInstance } from 'axios';

import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';
import { NotificationsService } from 'app/core/components/notifications/notifications.service';

@Injectable({
    providedIn: 'root'
})
export class PopulateService
{
    private _axios: AxiosInstance;

    /**
     * Constructor
     *
     * @param {AsmNavigationService} _asmNavigationService
     * @param {NotificationsService} _notificationsService
     */
    constructor(
        private _asmNavigationService: AsmNavigationService,
        private _notificationsService: NotificationsService
    )
    {
        // Set the private defaults
        this._axios = axios;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Load compact navigation data
     */
    private _loadCompactNavigation(): Observable<any>
    {
        return from(this._axios.get('api/navigation/compact'));
    }

    /**
     * Load default navigation data
     */
    private _loadDefaultNavigation(): Observable<any>
    {
        return from(this._axios.get('api/navigation/default'));
    }

    /**
     * Load notifications count
     */
    private _loadNotificationsCount(): Observable<any>
    {
        return from(this._axios.get('api/notifications/count'));
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Load the initial data from the server and hydrate
     * components & services with the loaded data
     */
    load(): Observable<any>
    {
        return forkJoin(
            this._loadCompactNavigation(),
            this._loadDefaultNavigation(),
            this._loadNotificationsCount()
        ).pipe(
            map((data) => {
                const compactNavigation  = data[0].data.navigation,
                      defaultNavigation  = data[1].data.navigation,
                      notificationsCount = data[2].data.notificationsCount;

                // Register the navigation data
                this._asmNavigationService.store('compact', compactNavigation);
                this._asmNavigationService.store('default', defaultNavigation);

                // Store the notifications count
                this._notificationsService.count = notificationsCount;

                // Return the data
                return {
                    compactNavigation : compactNavigation,
                    defaultNavigation : defaultNavigation,
                    notificationsCount: notificationsCount
                };
            })
        );
    }
}

import { Injectable } from '@angular/core';
import { forkJoin, from, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import axios, { AxiosInstance } from 'axios';

import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';
import { AsmNotificationsService } from '@assembly/components/notifications/notifications.service';

@Injectable({
    providedIn: 'root'
})
export class InitialDataLoaderService
{
    private _axios: AxiosInstance;

    /**
     * Constructor
     */
    constructor(
        private _asmNavigationService: AsmNavigationService,
        private _asmNotificationsService: AsmNotificationsService
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
    private _loadCompactNavigationData(): Observable<any>
    {
        return from(this._axios.get('api/navigation/compact'));
    }

    /**
     * Load default navigation data
     */
    private _loadDefaultNavigationData(): Observable<any>
    {
        return from(this._axios.get('api/navigation/default'));
    }

    /**
     * Load notification data
     */
    private _loadNotificationData(): Observable<any>
    {
        return from(this._axios.get('api/notifications'));
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
            this._loadCompactNavigationData(),
            this._loadDefaultNavigationData(),
            this._loadNotificationData()
        ).pipe(
            delay(2000),
            map((data) => {
                const compactNavigation = data[0].data.navigation,
                      defaultNavigation = data[1].data.navigation,
                      notifications     = data[2].data.notifications;

                // Register the navigation data
                this._asmNavigationService.store('compact', compactNavigation);
                this._asmNavigationService.store('default', defaultNavigation);

                // Return the data
                return {
                    compactNavigation: compactNavigation,
                    defaultNavigation: defaultNavigation,
                    notifications    : notifications
                };
            })
        );
    }
}

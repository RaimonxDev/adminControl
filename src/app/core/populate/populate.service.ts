import { Injectable } from '@angular/core';
import { forkJoin, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import axios, { AxiosInstance } from 'axios';

import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';

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
     */
    constructor(
        private _asmNavigationService: AsmNavigationService
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
            this._loadDefaultNavigation()
        ).pipe(
            map((data) => {
                const compactNavigation = data[0].data.navigation,
                      defaultNavigation = data[1].data.navigation;

                // Register the navigation data
                this._asmNavigationService.storeNavigation('compact', compactNavigation);
                this._asmNavigationService.storeNavigation('default', defaultNavigation);

                // Return the data
                return {
                    compactNavigation,
                    defaultNavigation
                };
            })
        );
    }
}

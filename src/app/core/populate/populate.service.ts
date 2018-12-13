import { Injectable } from '@angular/core';
import { forkJoin, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import axios, { AxiosInstance } from 'axios';
import { AsmNavigationService, AsmShortcutsService } from '@assembly';

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
     * @param {AsmShortcutsService} _asmShortcutsService
     */
    constructor(
        private _asmNavigationService: AsmNavigationService,
        private _asmShortcutsService: AsmShortcutsService
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
     *
     * @private
     */
    private _loadCompactNavigation(): Observable<any>
    {
        return from(this._axios.get('api/navigation/compact'));
    }

    /**
     * Load default navigation data
     *
     * @private
     */
    private _loadDefaultNavigation(): Observable<any>
    {
        return from(this._axios.get('api/navigation/default'));
    }

    /**
     * Load shortcuts
     *
     * @private
     */
    private _loadShortcuts(): Observable<any>
    {
        return from(this._axios.get('api/shortcuts'));
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
            // Navigation data
            this._loadCompactNavigation(),
            this._loadDefaultNavigation(),

            // Shortcuts
            this._loadShortcuts()
        ).pipe(
            map((data) => {

                // Register the navigation data
                this._asmNavigationService.storeNavigation('compact', data[0].data.navigation);
                this._asmNavigationService.storeNavigation('default', data[1].data.navigation);

                // Store the shortcuts
                this._asmShortcutsService.storeShortcuts(data[2].data.shortcuts);

                // Finish
                return true;
            })
        );
    }
}

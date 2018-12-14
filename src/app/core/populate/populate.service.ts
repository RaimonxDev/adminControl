import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsmNavigationService, AsmShortcutsService } from '@assembly';

@Injectable({
    providedIn: 'root'
})
export class PopulateService
{
    /**
     * Constructor
     *
     * @param {AsmNavigationService} _asmNavigationService
     * @param {AsmShortcutsService} _asmShortcutsService
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _asmNavigationService: AsmNavigationService,
        private _asmShortcutsService: AsmShortcutsService,
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
                this._asmNavigationService.storeNavigation('compact', data[0].navigation);
                this._asmNavigationService.storeNavigation('default', data[1].navigation);

                // Store the shortcuts
                this._asmShortcutsService.storeShortcuts(data[2].shortcuts);
            })
        );
    }
}

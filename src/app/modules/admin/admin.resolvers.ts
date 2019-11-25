import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsmNavigationService, AsmShortcutsService } from '@assembly';

@Injectable({
    providedIn: 'root'
})
export class AdminResolver implements Resolve<any>
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
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return forkJoin([
            // Navigation data
            this._loadCompactNavigation(),
            this._loadDefaultNavigation(),

            // Shortcuts
            this._loadShortcuts()
        ]).pipe(
            map((data) => {

                // Register the navigation data
                this._asmNavigationService.storeNavigation('compact', data[0].navigation);
                this._asmNavigationService.storeNavigation('default', data[1].navigation);

                // Store the shortcuts
                this._asmShortcutsService.load(data[2].shortcuts);
            })
        );
    }
}

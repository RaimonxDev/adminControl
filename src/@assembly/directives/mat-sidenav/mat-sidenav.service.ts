import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class AsmMatSidenavService
{
    // Private
    private _registry: Map<string, MatSidenav>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this._registry = new Map<string, MatSidenav>();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register sidenav
     *
     * @param key
     * @param sidenav
     */
    registerSidenav(key, sidenav): void
    {
        this._registry.set(key, sidenav);
    }

    /**
     * Get sidenav
     *
     * @param key
     */
    getSidenav(key): MatSidenav
    {
        return this._registry.get(key);
    }

    /**
     * Delete sidenav
     *
     * @param key
     */
    deleteSidenav(key): void
    {
        this._registry.delete(key);
    }
}


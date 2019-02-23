import { Injectable } from '@angular/core';
import { AsmDrawerComponent } from '@assembly/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class AsmDrawerService
{
    // Private
    private _registry: Map<string, AsmDrawerComponent>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this._registry = new Map<string, AsmDrawerComponent>();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer
     *
     * @param key
     * @param drawer
     */
    register(key, drawer): void
    {
        this._registry.set(key, drawer);
    }

    /**
     * Deregister drawer
     *
     * @param key
     */
    deregister(key): void
    {
        this._registry.delete(key);
    }

    /**
     * Get drawer
     *
     * @param key
     */
    get(key): AsmDrawerComponent
    {
        return this._registry.get(key);
    }
}

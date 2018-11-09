import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AsmRegistryService
{
    // Private
    private _registry: Map<string, any>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this._registry = new Map<string, any>();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register a component
     *
     * @param key
     * @param component
     */
    register(key, component): void
    {
        this._registry.set(key, component);
    }

    /**
     * Deregister a component
     *
     * @param key
     */
    deregister(key): void
    {
        this._registry.delete(key);
    }

    /**
     * Get component from the registry
     *
     * @param key
     */
    get(key): any
    {
        this._registry.get(key);
    }
}


import { Injectable } from '@angular/core';
import { AsmDrawerComponent } from '@assembly/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class AsmDrawerService
{
    // Private
    private _componentRegistry: Map<string, AsmDrawerComponent>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this._componentRegistry = new Map<string, AsmDrawerComponent>();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: AsmDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): AsmDrawerComponent
    {
        return this._componentRegistry.get(name);
    }
}

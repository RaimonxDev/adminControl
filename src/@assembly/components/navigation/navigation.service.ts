import { Injectable } from '@angular/core';
import { AsmNavigationItem } from '@assembly/components/navigation/navigation.types';
import { AsmNavigationComponent } from '@assembly/components/navigation/navigation.component';

@Injectable({
    providedIn: 'root'
})
export class AsmNavigationService
{
    // Private
    private _componentRegistry: Map<string, AsmNavigationComponent>;
    private _navigationStore: Map<string, AsmNavigationItem[]>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._componentRegistry = new Map<string, AsmNavigationComponent>();
        this._navigationStore = new Map<string, any>();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register navigation component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: AsmNavigationComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister navigation component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get navigation component from the registry
     *
     * @param name
     */
    getComponent(name: string): AsmNavigationComponent
    {
        return this._componentRegistry.get(name);
    }

    /**
     * Store the given navigation with the given key
     *
     * @param key
     * @param navigation
     */
    storeNavigation(key: string, navigation: AsmNavigationItem[]): void
    {
        // Add to the store
        this._navigationStore.set(key, navigation);
    }

    /**
     * Get navigation from storage by key
     *
     * @param key
     * @returns {any}
     */
    getNavigation(key: string): AsmNavigationItem[]
    {
        return this._navigationStore.get(key);
    }

    /**
     * Delete the navigation from the storage
     *
     * @param key
     */
    deleteNavigation(key: string): void
    {
        // Check if the navigation exists
        if ( !this._navigationStore.has(key) )
        {
            console.warn(`Navigation with the key '${key}' does not exist in the store.`);
        }

        // Delete from the storage
        this._navigationStore.delete(key);
    }

    /**
     * Utility function that returns a flattened
     * version of the given navigation array
     *
     * @param navigation
     * @param flatNavigation
     * @returns {AsmNavigationItem[]}
     */
    getFlatNavigation(navigation: AsmNavigationItem[], flatNavigation: AsmNavigationItem[] = []): AsmNavigationItem[]
    {
        for ( const item of navigation )
        {
            if ( item.type === 'basic' )
            {
                flatNavigation.push(item);
                continue;
            }

            if ( item.type === 'aside' || item.type === 'collapsable' || item.type === 'group' )
            {
                if ( item.children )
                {
                    this.getFlatNavigation(item.children, flatNavigation);
                }
            }
        }

        return flatNavigation;
    }

    /**
     * Utility function that returns the item
     * with the given id from given navigation
     *
     * @param id
     * @param navigation
     */
    getItem(id: string, navigation: AsmNavigationItem[]): AsmNavigationItem | null
    {
        for ( const item of navigation )
        {
            if ( item.id === id )
            {
                return item;
            }

            if ( item.children )
            {
                const childItem = this.getItem(id, item.children);

                if ( childItem )
                {
                    return childItem;
                }
            }
        }

        return null;
    }

    /**
     * Utility function that returns the item's parent
     * with the given id from given navigation
     *
     * @param id
     * @param navigation
     * @param parent
     */
    getItemParent(
        id: string,
        navigation: AsmNavigationItem[],
        parent: AsmNavigationItem[] | AsmNavigationItem
    ): AsmNavigationItem[] | AsmNavigationItem | null
    {
        for ( const item of navigation )
        {
            if ( item.id === id )
            {
                return parent;
            }

            if ( item.children )
            {
                const childItem = this.getItemParent(id, item.children, item);

                if ( childItem )
                {
                    return childItem;
                }
            }
        }

        return null;
    }
}

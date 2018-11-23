import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';

import { AsmNavigationItem } from '@assembly/types/navigation';
import { AsmNavigationComponent } from '@assembly/components/navigation/navigation.component';

@Injectable({
    providedIn: 'root'
})
export class AsmNavigationService
{
    autoCollapse: boolean;
    showTooltips: boolean;
    onAppearanceChanged: BehaviorSubject<any>;
    onModeChanged: BehaviorSubject<any>;
    onOpenedChanged: BehaviorSubject<any>;
    onPositionChanged: BehaviorSubject<any>;
    onCollapsableItemCollapsed: BehaviorSubject<any>;
    onCollapsableItemExpanded: BehaviorSubject<any>;

    // Private
    private _componentRegistry: Map<string, AsmNavigationComponent>;
    private _navigationStore: Map<string, any>;

    private _currentNavigationKey: string;
    private _onCurrentChanged: BehaviorSubject<any>;
    private _onStored: BehaviorSubject<any>;
    private _onDeleted: BehaviorSubject<any>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._componentRegistry = new Map<string, AsmNavigationComponent>();
        this._navigationStore = new Map<string, any>();

        this._currentNavigationKey = null;
        this._onCurrentChanged = new BehaviorSubject(null);
        this._onStored = new BehaviorSubject(null);
        this._onDeleted = new BehaviorSubject(null);

        // Set the defaults
        this.onAppearanceChanged = new BehaviorSubject(null);
        this.onModeChanged = new BehaviorSubject(null);
        this.onOpenedChanged = new BehaviorSubject(null);
        this.onPositionChanged = new BehaviorSubject(null);
        this.onCollapsableItemCollapsed = new BehaviorSubject(null);
        this.onCollapsableItemExpanded = new BehaviorSubject(null);

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for onStored
     *
     * @returns {Observable<any>}
     */
    get onStored(): Observable<any>
    {
        return this._onStored.asObservable();
    }

    /**
     * Getter for onDeleted
     *
     * @returns {Observable<any>}
     */
    get onDeleted(): Observable<any>
    {
        return this._onDeleted.asObservable();
    }

    /**
     * Getter for onCurrentChanged
     *
     * @returns {Observable<any>}
     */
    get onCurrentChanged(): Observable<any>
    {
        return this._onCurrentChanged.asObservable();
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
    registerComponent(name, component): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister navigation component
     *
     * @param name
     */
    deregisterComponent(name): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get navigation component from the registry
     *
     * @param name
     */
    getComponent(name): AsmNavigationComponent
    {
        return this._componentRegistry.get(name);
    }

    /**
     * Store the given navigation with the given key
     *
     * @param key
     * @param navigation
     */
    storeNavigation(key, navigation): void
    {
        // Add to the store
        this._navigationStore.set(key, navigation);

        // Execute the observable
        this._onStored.next([key, navigation]);

        // Execute the 'onCurrentChanged' in case the current navigation
        // was set before storing the actual navigation data
        if ( this._currentNavigationKey === key )
        {
            // Execute the observable
            this._onCurrentChanged.next(key);
        }
    }

    /**
     * Delete the navigation from the storage
     *
     * @param key
     */
    deleteNavigation(key): void
    {
        // Check if the navigation exists
        if ( !this._navigationStore.has(key) )
        {
            console.warn(`Navigation with the key '${key}' does not exist in the store.`);
        }

        // Delete from the storage
        this._navigationStore.delete(key);

        // Execute the observable
        this._onDeleted.next(key);
    }

    /**
     * Get navigation from storage by key
     *
     * @param key
     * @returns {any}
     */
    getNavigation(key): any
    {
        return this._navigationStore.get(key);
    }

    /**
     * Get flattened navigation array
     *
     * @param navigation
     * @param flatNavigation
     * @returns {any[]}
     */
    getFlatNavigation(navigation = null, flatNavigation: AsmNavigationItem[] = []): any[]
    {
        // If the navigation is not given...
        if ( !navigation )
        {
            // use the current navigation
            navigation = this.getCurrentNavigation();
        }

        for ( const item of navigation )
        {
            if ( item.type === 'link' )
            {
                flatNavigation.push(item);

                continue;
            }

            if ( item.type === 'aside' || item.type === 'collapsable' )
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
     * Set the navigation with the key as the current
     *
     * @param key
     */
    setCurrentNavigation(key): void
    {
        // Set the current navigation key
        this._currentNavigationKey = key;

        // Execute the observable
        this._onCurrentChanged.next(key);
    }

    /**
     * Get the current navigation
     *
     * @returns {any}
     */
    getCurrentNavigation(): any
    {
        return this.getNavigation(this._currentNavigationKey);
    }

    /**
     * Get navigation item by id
     * from the current navigation
     *
     * @param id
     * @param navigation
     */
    getItem(id, navigation = null): any | boolean
    {
        if ( !navigation )
        {
            navigation = this.getCurrentNavigation();
        }

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

        return false;
    }

    /**
     * Get the parent of the navigation item
     * with the id from the current navigation
     *
     * @param id
     * @param navigation
     * @param parent
     */
    getItemParent(id, navigation: any = null, parent = null): any
    {
        // Use the current navigation,
        // if the navigation is not given
        if ( !navigation )
        {
            navigation = this.getCurrentNavigation();
            parent = navigation;
        }

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

        return false;
    }

    /**
     * Add an item to the current navigation
     * at the specified location
     *
     * @param item
     * @param idOrLocation
     */
    addItem(item, idOrLocation): void
    {
        // Get the current navigation
        const navigation = this.getCurrentNavigation();

        // Add to the end of the navigation
        if ( idOrLocation === 'end' )
        {
            // Add the item at the end
            navigation.push(item);

            return;
        }

        // Add to the start of the navigation
        if ( idOrLocation === 'start' )
        {
            // Add the item at the beginning
            navigation.unshift(item);

            return;
        }

        // Add it to a specific location
        const parent: any = this.getItem(idOrLocation);

        if ( parent )
        {
            // Check if parent has a children entry,
            // and add it if it doesn't
            if ( !parent.children )
            {
                parent.children = [];
            }

            // Add the item
            parent.children.push(item);
        }
    }

    /**
     * Update the item with the given id
     * from the current navigation
     *
     * @param id
     * @param properties
     */
    updateItem(id, properties): void
    {
        // Get the navigation item
        const item = this.getItem(id);

        // If there is no navigation with the give id, return
        if ( !item )
        {
            return;
        }

        // Merge the navigation properties
        _.merge(item, properties);
    }

    /**
     * Delete the item with the given id
     * from the current navigation
     *
     * @param id
     */
    deleteItem(id): void
    {
        // Get the navigation item
        const item = this.getItem(id);

        // Return, if there is no item
        if ( !item )
        {
            return;
        }

        // Get the parent of the item
        let parent = this.getItemParent(id);

        // This check is required because of the first level
        // of the navigation since it is not inside the
        // 'children' array
        parent = parent.children || parent;

        // Delete the item
        parent.splice(parent.indexOf(item), 1);
    }
}

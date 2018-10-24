import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

import { AsmNavigationItem } from '@assembly/types';
import { AsmNavigationComponent } from '@assembly/components/navigation/navigation.component';

@Injectable({
    providedIn: 'root'
})
export class AsmNavigationService
{
    autoCollapse: boolean;
    showTooltips: boolean;
    onAppearanceChanged: Subject<any>;
    onModeChanged: Subject<any>;
    onOpenedChanged: Subject<any>;
    onPositionChanged: Subject<any>;
    onCollapsableItemCollapsed: Subject<any>;
    onCollapsableItemExpanded: Subject<any>;

    // Private
    private _componentRegistry: Map<string, AsmNavigationComponent>;
    private _navigationRegistry: Map<string, any>;

    private _currentNavigationKey: string;
    private _onChanged: Subject<any>;
    private _onRegistered: Subject<any>;
    private _onUnregistered: Subject<any>;
    private _onItemAdded: Subject<any>;
    private _onItemUpdated: Subject<any>;
    private _onItemDeleted: Subject<any>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._componentRegistry = new Map<string, AsmNavigationComponent>();
        this._navigationRegistry = new Map<string, any>();

        this._currentNavigationKey = null;
        this._onChanged = new Subject();
        this._onRegistered = new Subject();
        this._onUnregistered = new Subject();
        this._onItemAdded = new Subject();
        this._onItemUpdated = new Subject();
        this._onItemDeleted = new Subject();

        // Set the defaults
        this.onAppearanceChanged = new Subject();
        this.onModeChanged = new Subject();
        this.onOpenedChanged = new Subject();
        this.onPositionChanged = new Subject();
        this.onCollapsableItemCollapsed = new Subject();
        this.onCollapsableItemExpanded = new Subject();

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for onRegistered
     *
     * @returns {Observable<any>}
     */
    get onRegistered(): Observable<any>
    {
        return this._onRegistered.asObservable();
    }

    /**
     * Getter for onUnregistered
     *
     * @returns {Observable<any>}
     */
    get onUnregistered(): Observable<any>
    {
        return this._onUnregistered.asObservable();
    }

    /**
     * Getter for onChanged
     *
     * @returns {Observable<any>}
     */
    get onChanged(): Observable<any>
    {
        return this._onChanged.asObservable();
    }

    /**
     * Getter for onItemAdded
     */
    get onItemAdded(): Observable<any>
    {
        return this._onItemAdded.asObservable();
    }

    /**
     * Getter for onItemUpdated
     */
    get onItemUpdated(): Observable<any>
    {
        return this._onItemUpdated.asObservable();
    }

    /**
     * Getter for onItemDeleted
     */
    get onItemDeleted(): Observable<any>
    {
        return this._onItemDeleted.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register navigation component
     *
     * @param key
     * @param drawer
     */
    registerComponent(key, drawer): void
    {
        this._componentRegistry.set(key, drawer);
    }

    /**
     * Unregister navigation component
     *
     * @param key
     */
    unregisterComponent(key): void
    {
        this._componentRegistry.delete(key);
    }

    /**
     * Get navigation component from the registry
     *
     * @param key
     */
    getComponent(key): AsmNavigationComponent
    {
        return this._componentRegistry.get(key);
    }

    /**
     * Register the given navigation with the given key
     *
     * @param key
     * @param navigation
     */
    register(key, navigation): void
    {
        // Check if the key is already being used
        if ( this._navigationRegistry[key] )
        {
            console.error(`Navigation with the key '${key}' already exists. Either unregister it first or use a unique key.`);

            return;
        }

        // Add to the registry
        this._navigationRegistry.set(key, navigation);

        // Execute the observable
        this._onRegistered.next([key, navigation]);
    }

    /**
     * Unregister the navigation from the registry
     *
     * @param key
     */
    unregister(key): void
    {
        // Check if the navigation exists
        if ( !this._navigationRegistry.has(key) )
        {
            console.warn(`Navigation with the key '${key}' does not exist in the registry.`);
        }

        // Delete from the registry
        this._navigationRegistry.delete(key);

        // Execute the observable
        this._onUnregistered.next(key);
    }

    /**
     * Get navigation from registry by key
     *
     * @param key
     * @returns {any}
     */
    getNavigation(key): any
    {
        // Check if the navigation exists
        if ( !this._navigationRegistry.has(key) )
        {
            console.warn(`Navigation with the key '${key}' does not exist in the registry.`);

            return;
        }

        // Return the navigation
        return this._navigationRegistry.get(key);
    }

    /**
     * Get flattened navigation array
     *
     * @param navigation
     * @param flatNavigation
     * @returns {any[]}
     */
    getFlatNavigation(navigation, flatNavigation: AsmNavigationItem[] = []): any
    {
        for ( const item of navigation )
        {
            if ( item.type === 'item' )
            {
                flatNavigation.push(item);

                continue;
            }

            if ( item.type === 'collapsable' || item.type === 'group' )
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
     * Get the current navigation
     *
     * @returns {any}
     */
    getCurrentNavigation(): any
    {
        if ( !this._currentNavigationKey )
        {
            console.warn(`Current navigation does not exits! Did you set the current navigation via 'setCurrentNavigation'?`);

            return;
        }

        return this.getNavigation(this._currentNavigationKey);
    }

    /**
     * Set the navigation with the key as the current
     *
     * @param key
     */
    setCurrentNavigation(key): void
    {
        // Check if the navigation exists
        if ( !this._navigationRegistry.has(key) )
        {
            console.warn(`The navigation with the key '${key}' does not exist in the registry.`);

            return;
        }

        // Set the current navigation key
        this._currentNavigationKey = key;

        // Execute the observable
        this._onChanged.next(key);
    }

    /**
     * Get navigation item by id from the current navigation
     *
     * @param id
     * @param {any} navigation
     * @returns {any | boolean}
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
     * Get the parent of the navigation item with the id
     *
     * @param id
     * @param {any} navigation
     * @param parent
     */
    getItemParent(id, navigation = null, parent = null): any
    {
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
     * Add a navigation item to the specified location
     *
     * @param item
     * @param id
     */
    addItem(item, id): void
    {
        // Get the current navigation
        const navigation: any[] = this.getCurrentNavigation();

        // Add to the end of the navigation
        if ( id === 'end' )
        {
            navigation.push(item);

            return;
        }

        // Add to the start of the navigation
        if ( id === 'start' )
        {
            navigation.unshift(item);

            return;
        }

        // Add it to a specific location
        const parent: any = this.getItem(id);

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

        // Execute the observable
        this._onItemAdded.next(true);
    }

    /**
     * Update navigation item with the given id
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

        // Execute the observable
        this._onItemUpdated.next(true);
    }

    /**
     * Delete navigation item with the given id
     *
     * @param id
     */
    deleteItem(id): void
    {
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

        // Execute the observable
        this._onItemDeleted.next(true);
    }
}

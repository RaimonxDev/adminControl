import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    private _onItemAdded: BehaviorSubject<any>;
    private _onItemUpdated: BehaviorSubject<any>;
    private _onItemDeleted: BehaviorSubject<any>;

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
        this._onItemAdded = new BehaviorSubject(null);
        this._onItemUpdated = new BehaviorSubject(null);
        this._onItemDeleted = new BehaviorSubject(null);

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
     * Deregister navigation component
     *
     * @param key
     */
    deregisterComponent(key): void
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
     * Store the given navigation with the given key
     *
     * @param key
     * @param navigation
     */
    store(key, navigation): void
    {
        // Add to the store
        this._navigationStore.set(key, navigation);

        // Execute the observable
        this._onStored.next([key, navigation]);

        // Trigger the onCurrentChanged in case the current navigation
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
    delete(key): void
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
    getFlat(navigation, flatNavigation: AsmNavigationItem[] = []): any
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
                    this.getFlat(item.children, flatNavigation);
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
    getCurrent(): any
    {
        return this.getNavigation(this._currentNavigationKey);
    }

    /**
     * Set the navigation with the key as the current
     *
     * @param key
     */
    setCurrent(key): void
    {
        // Set the current navigation key
        this._currentNavigationKey = key;

        // Execute the observable
        this._onCurrentChanged.next(key);
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
            navigation = this.getCurrent();
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
            navigation = this.getCurrent();
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
        const navigation: any[] = this.getCurrent();

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

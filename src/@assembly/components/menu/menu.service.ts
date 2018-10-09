import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

// import { AsmMenuItem } from '@assembly/types';

@Injectable({
    providedIn: 'root'
})
export class AsmMenuService
{
    onItemCollapsed: Subject<any>;
    onItemExpanded: Subject<any>;

    // Private
    private _onMenuChanged: BehaviorSubject<any>;
    private _onMenuRegistered: BehaviorSubject<any>;
    private _onMenuUnregistered: BehaviorSubject<any>;
    private _onMenuItemUpdated: BehaviorSubject<any>;

    private _currentMenuKey: string;
    private _registry: { [key: string]: any };

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.onItemCollapsed = new Subject();
        this.onItemExpanded = new Subject();

        // Set the private defaults
        this._currentMenuKey = null;
        this._onMenuChanged = new BehaviorSubject(null);
        this._onMenuRegistered = new BehaviorSubject(null);
        this._onMenuUnregistered = new BehaviorSubject(null);
        this._onMenuItemUpdated = new BehaviorSubject(null);
        this._registry = {};
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for onMenuChanged
     *
     * @returns {Observable<any>}
     */
    get onMenuChanged(): Observable<any>
    {
        return this._onMenuChanged.asObservable();
    }

    /**
     * Getter for onMenuUpdated
     */
    get onMenuItemUpdated(): Observable<any>
    {
        return this._onMenuItemUpdated.asObservable();
    }

    /**
     * Getter for onMenuRegistered
     *
     * @returns {Observable<any>}
     */
    get onMenuRegistered(): Observable<any>
    {
        return this._onMenuRegistered.asObservable();
    }

    /**
     * Getter for onMenuUnregistered
     *
     * @returns {Observable<any>}
     */
    get onMenuUnregistered(): Observable<any>
    {
        return this._onMenuUnregistered.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register the given menu with the given key
     *
     * @param key
     * @param menu
     */
    register(key, menu): void
    {
        // Check if the key already being used
        if ( this._registry[key] )
        {
            console.error(`The menu with the key '${key}' already exists. Either unregister it first or use a unique key.`);

            return;
        }

        // Add to the registry
        this._registry[key] = menu;

        // Notify the subject
        this._onMenuRegistered.next([key, menu]);
    }

    /**
     * Unregister the menu from the registry
     *
     * @param key
     */
    unregister(key): void
    {
        // Check if the menu exists
        if ( !this._registry[key] )
        {
            console.warn(`The menu with the key '${key}' doesn't exist in the registry.`);
        }

        // Delete from the registry
        delete this._registry[key];

        // Notify the subject
        this._onMenuUnregistered.next(key);
    }

    /**
     * Get menu from registry by key
     *
     * @param key
     * @returns {any}
     */
    getMenu(key): any
    {
        // Check if the menu exists
        if ( !this._registry[key] )
        {
            console.warn(`The menu with the key '${key}' doesn't exist in the registry.`);

            return;
        }

        // Return the menu
        return this._registry[key];
    }

    /**
     * Get flattened menu array
     *
     * @param menu
     * @param flatMenu
     * @returns {any[]}
     */
    getFlatMenu(menu, flatMenu: any[] = []): any
    {
        for ( const item of menu )
        {
            if ( item.type === 'item' )
            {
                flatMenu.push(item);

                continue;
            }

            if ( item.type === 'collapsable' || item.type === 'group' )
            {
                if ( item.children )
                {
                    this.getFlatMenu(item.children, flatMenu);
                }
            }
        }

        return flatMenu;
    }

    /**
     * Get the current menu
     *
     * @returns {any}
     */
    getCurrentMenu(): any
    {
        if ( !this._currentMenuKey )
        {
            console.warn(`The current menu is not set!`);

            return;
        }

        return this.getMenu(this._currentMenuKey);
    }

    /**
     * Set the menu with the key as the current
     *
     * @param key
     */
    setCurrentMenu(key): void
    {
        // Check if the menu exists
        if ( !this._registry[key] )
        {
            console.warn(`The menu with the key '${key}' doesn't exist in the registry.`);

            return;
        }

        // Set the current menu key
        this._currentMenuKey = key;

        // Notify the subject
        this._onMenuChanged.next(key);
    }

    /**
     * Get menu item by id from the current menu
     *
     * @param id
     * @param {any} menu
     * @returns {any | boolean}
     */
    getMenuItem(id, menu = null): any | boolean
    {
        if ( !menu )
        {
            menu = this.getCurrentMenu();
        }

        for ( const item of menu )
        {
            if ( item.id === id )
            {
                return item;
            }

            if ( item.children )
            {
                const childItem = this.getMenuItem(id, item.children);

                if ( childItem )
                {
                    return childItem;
                }
            }
        }

        return false;
    }

    /**
     * Get the parent of the menu item with the id
     *
     * @param id
     * @param {any} menu
     * @param parent
     */
    getMenuItemParent(id, menu = null, parent = null): any
    {
        if ( !menu )
        {
            menu = this.getCurrentMenu();
            parent = menu;
        }

        for ( const item of menu )
        {
            if ( item.id === id )
            {
                return parent;
            }

            if ( item.children )
            {
                const childItem = this.getMenuItemParent(id, item.children, item);

                if ( childItem )
                {
                    return childItem;
                }
            }
        }

        return false;
    }

    /**
     * Add a menu item to the specified location
     *
     * @param item
     * @param id
     */
    addMenuItem(item, id): void
    {
        // Get the current menu
        const menu: any[] = this.getCurrentMenu();

        // Add to the end of the menu
        if ( id === 'end' )
        {
            menu.push(item);

            return;
        }

        // Add to the start of the menu
        if ( id === 'start' )
        {
            menu.unshift(item);

            return;
        }

        // Add it to a specific location
        const parent: any = this.getMenuItem(id);

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
     * Update menu item with the given id
     *
     * @param id
     * @param properties
     */
    updateMenuItem(id, properties): void
    {
        // Get the menu item
        const menuItem = this.getMenuItem(id);

        // If there is no menu with the give id, return
        if ( !menuItem )
        {
            return;
        }

        // Merge the menu properties
        _.merge(menuItem, properties);

        // Trigger the observable
        this._onMenuItemUpdated.next(true);
    }

    /**
     * Delete menu item with the given id
     *
     * @param id
     */
    deleteMenuItem(id): void
    {
        const item = this.getMenuItem(id);

        // Return, if there is not such an item
        if ( !item )
        {
            return;
        }

        // Get the parent of the item
        let parent = this.getMenuItemParent(id);

        // This check is required because of the first level
        // of the menu since the first level is not actually
        // inside the 'children' array
        parent = parent.children || parent;

        // Delete the item
        parent.splice(parent.indexOf(item), 1);
    }
}

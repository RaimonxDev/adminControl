import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import { AsmNavigationAppearance, AsmNavigationItem, AsmNavigationMode, AsmNavigationPosition } from '@assembly/components/navigation/navigation.type';
import { AsmNavigationComponent } from '@assembly/components/navigation/navigation.component';

@Injectable({
    providedIn: 'root'
})
export class AsmNavigationService
{
    autoCollapse: boolean;
    showTooltips: boolean;
    onAppearanceChanged: BehaviorSubject<AsmNavigationAppearance | null>;
    onModeChanged: BehaviorSubject<AsmNavigationMode | null>;
    onOpenedChanged: BehaviorSubject<boolean | '' | null>;
    onPositionChanged: BehaviorSubject<AsmNavigationPosition | null>;
    onCollapsableItemCollapsed: BehaviorSubject<AsmNavigationItem | null>;
    onCollapsableItemExpanded: BehaviorSubject<AsmNavigationItem | null>;

    // Private
    private _componentRegistry: Map<string, AsmNavigationComponent>;
    private _navigationStore: Map<string, AsmNavigationItem[]>;

    private _currentNavigationKey: string;
    private _onCurrentChanged: BehaviorSubject<any>;
    private _onStored: BehaviorSubject<any>;
    private _onDeleted: BehaviorSubject<any>;

    private _onItemAdded: BehaviorSubject<AsmNavigationItem | null>;
    private _onItemUpdated: BehaviorSubject<AsmNavigationItem | null>;
    private _onItemDeleted: BehaviorSubject<AsmNavigationItem | null>;

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
     */
    get onStored(): Observable<any>
    {
        return this._onStored.asObservable();
    }

    /**
     * Getter for onDeleted
     */
    get onDeleted(): Observable<any>
    {
        return this._onDeleted.asObservable();
    }

    /**
     * Getter for onCurrentChanged
     */
    get onCurrentChanged(): Observable<any>
    {
        return this._onCurrentChanged.asObservable();
    }

    /**
     * Getter for onItemAdded
     */
    get onItemAdded(): Observable<AsmNavigationItem>
    {
        return this._onItemAdded.asObservable();
    }

    /**
     * Getter for onItemUpdated
     */
    get onItemUpdated(): Observable<AsmNavigationItem>
    {
        return this._onItemUpdated.asObservable();
    }

    /**
     * Getter for onItemDeleted
     */
    get onItemDeleted(): Observable<AsmNavigationItem>
    {
        return this._onItemDeleted.asObservable();
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
    deleteNavigation(key: string): void
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
    getNavigation(key: string): AsmNavigationItem[]
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
    getFlatNavigation(navigation: AsmNavigationItem[] | null = null, flatNavigation: AsmNavigationItem[] = []): AsmNavigationItem[]
    {
        // If the navigation is not given...
        if ( !navigation )
        {
            // use the current navigation
            navigation = this.getCurrentNavigation();
        }

        for ( const item of navigation )
        {
            if ( item.type === 'basic' )
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
    setCurrentNavigation(key: string): void
    {
        // Set the current navigation key
        this._currentNavigationKey = key;

        // Execute the observable
        this._onCurrentChanged.next(key);
    }

    /**
     * Get the current navigation
     */
    getCurrentNavigation(): AsmNavigationItem[]
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
    getItem(id: string, navigation: AsmNavigationItem[] | null = null): AsmNavigationItem | false
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
     * from the current navigation
     *
     * @param id
     * @param navigation
     * @param parent
     */
    getItemParent(
        id: string,
        navigation: AsmNavigationItem[] | null                 = null,
        parent: AsmNavigationItem[] | AsmNavigationItem | null = null
    ): AsmNavigationItem[] | AsmNavigationItem | false
    {
        // If the navigation is not given,
        // use the current navigation
        if ( !navigation )
        {
            parent = navigation = this.getCurrentNavigation();
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
    addItem(item: AsmNavigationItem, idOrLocation: string): void
    {
        // Get the current navigation
        const navigation = this.getCurrentNavigation();

        // Add to the end of the navigation
        if ( idOrLocation === 'end' )
        {
            // Add the item at the end
            navigation.push(item);

            // Execute the observable
            this._onItemAdded.next(item);

            return;
        }

        // Add to the start of the navigation
        if ( idOrLocation === 'start' )
        {
            // Add the item at the beginning
            navigation.unshift(item);

            // Execute the observable
            this._onItemAdded.next(item);

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

            // Execute the observable
            this._onItemAdded.next(item);
        }
    }

    /**
     * Update the item with the given id
     * from the current navigation
     *
     * @param id
     * @param properties
     */
    updateItem(id: string, properties: any): void
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
        this._onItemUpdated.next(item);
    }

    /**
     * Delete the item with the given id
     * from the current navigation
     *
     * @param id
     */
    deleteItem(id: string): void
    {
        // Get the navigation item
        const item = this.getItem(id);

        // Return, if there is no item
        if ( !item )
        {
            return;
        }

        // Clone the navigation item to pass with the observable
        const deletedItem = _.cloneDeep(item);

        // Get the parent of the item
        let parent = this.getItemParent(id);

        // Return, if there is no parent
        if ( !parent )
        {
            return;
        }

        // This check is required because of the first level
        // of the navigation since it is not inside the
        // 'children' array
        if ( !Array.isArray(parent) )
        {
            parent = parent.children;
        }

        // Delete the item
        parent.splice(parent.indexOf(item), 1);

        console.log(item);
        console.log(deletedItem);

        // Execute the observable
        this._onItemDeleted.next(deletedItem);
    }
}

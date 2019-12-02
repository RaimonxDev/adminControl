import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._componentRegistry = new Map<string, AsmNavigationComponent>();

        // Set the defaults
        this.onAppearanceChanged = new BehaviorSubject(null);
        this.onModeChanged = new BehaviorSubject(null);
        this.onOpenedChanged = new BehaviorSubject(null);
        this.onPositionChanged = new BehaviorSubject(null);
        this.onCollapsableItemCollapsed = new BehaviorSubject(null);
        this.onCollapsableItemExpanded = new BehaviorSubject(null);
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
     * Utility function that returns the item
     * with the given id from given navigation
     *
     * @param id
     * @param navigation
     */
    getItem(id: string, navigation: AsmNavigationItem[]): AsmNavigationItem | false
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

        return false;
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
    ): AsmNavigationItem[] | AsmNavigationItem | false
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

        return false;
    }
}

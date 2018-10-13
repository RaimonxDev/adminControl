import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { AsmAnimations } from '@assembly/animations/index';
import { AsmMenuService } from '@assembly/components/menu/menu.service';

@Component({
    selector       : 'asm-menu-vertical-collapsable-item',
    templateUrl    : './collapsable.component.html',
    styles         : [],
    animations     : AsmAnimations,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmMenuVerticalCollapsableItemComponent implements OnInit, OnDestroy
{
    // Item
    @Input()
    item: any;

    // Collapsed
    @HostBinding('class.asm-menu-item-collapsed')
    isCollapsed: boolean;

    // Expanded
    @HostBinding('class.asm-menu-item-expanded')
    isExpanded: boolean;

    // Auto collapse
    @Input()
    autoCollapse: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmMenuService} _asmMenuService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     * @param {Router} _router
     */
    constructor(
        private _asmMenuService: AsmMenuService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _elementRef: ElementRef,
        private _renderer: Renderer2,
        private _router: Router
    )
    {
        // Set the defaults
        this.isCollapsed = true;
        this.isExpanded = false;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // If the item has a children that has a matching url with the current url, expand...
        if ( this._hasCurrentUrlInChildren(this.item, this._router.url) )
        {
            this.expand();
        }
        // Otherwise...
        else
        {
            // If the autoCollapse is on, collapse...
            if ( this.autoCollapse )
            {
                this.collapse();
            }
        }

        // Listen for the onCollapsableItemCollapsed from the service
        this._asmMenuService.onItemCollapsed
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((collapsedItem) => {

                // Collapse if this is a children of the collapsed item
                if ( this._isChildrenOf(collapsedItem, this.item) )
                {
                    this.collapse();
                }
            });

        // Listen for the onCollapsableItemExpanded from the service if the autoCollapse is on
        if ( this.autoCollapse )
        {
            this._asmMenuService.onItemExpanded
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe((expandedItem) => {

                    // Check if this is a parent of the expanded item
                    if ( this._isChildrenOf(this.item, expandedItem) )
                    {
                        return;
                    }

                    // Check if this has a children with a matching url with the current active url
                    if ( this._hasCurrentUrlInChildren(this.item, this._router.url) )
                    {
                        return;
                    }

                    if ( this.item === expandedItem )
                    {
                        return;
                    }

                    // If none of the above conditions are matched, collapse this item
                    this.collapse();
                });
        }

        // Attach a listener to the NavigationEnd event
        this._router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((event: NavigationEnd) => {

                // If the item has a children that has a matching url with the current url, expand...
                if ( this._hasCurrentUrlInChildren(this.item, event.urlAfterRedirects) )
                {
                    this.expand();
                }
                // Otherwise...
                else
                {
                    // If the autoCollapse is on, collapse...
                    if ( this.autoCollapse )
                    {
                        this.collapse();
                    }
                }
            });

        // Subscribe to menu item updates
        this._asmMenuService.onMenuItemUpdated
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check if the current active item
     * is the children of the given item
     *
     * @param item
     * @param url
     * @private
     */
    private _hasCurrentUrlInChildren(item, url): boolean
    {
        const children = item.children;

        if ( !children )
        {
            return false;
        }

        for ( const child of children )
        {
            if ( child.children )
            {
                return this._hasCurrentUrlInChildren(child, url);
            }

            if ( child.url === url || url.includes(child.url) )
            {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if this is a children
     * of the given item
     *
     * @param parent
     * @param item
     * @return {boolean}
     * @private
     */
    private _isChildrenOf(parent, item): boolean
    {
        const children = parent.children;

        if ( !children )
        {
            return false;
        }

        if ( children.indexOf(item) !== -1 )
        {
            return true;
        }

        for ( const child of children )
        {
            if ( child.children )
            {
                return this._isChildrenOf(child, item);
            }
        }

        return false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Collapse
     */
    collapse(): void
    {
        // Return if the item is already collapsed
        if ( this.isCollapsed )
        {
            return;
        }

        // Collapse it
        this.isCollapsed = true;
        this.isExpanded = false;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this._asmMenuService.onItemCollapsed.next(this.item);
    }

    /**
     * Expand
     */
    expand(): void
    {
        // Return if the item is already expanded
        if ( !this.isCollapsed )
        {
            return;
        }

        // Expand it
        this.isCollapsed = false;
        this.isExpanded = true;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this._asmMenuService.onItemExpanded.next(this.item);
    }

    /**
     * Toggle collapsable
     */
    toggleCollapsable(): void
    {
        // Toggle collapse/expand
        if ( this.isCollapsed )
        {
            this.expand();
        }
        else
        {
            this.collapse();
        }
    }
}

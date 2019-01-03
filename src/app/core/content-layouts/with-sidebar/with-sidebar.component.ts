import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDrawer } from '@angular/material';
import { AsmMediaWatcherService } from '@assembly';

@Component({
    selector     : 'content-layout[type="with-sidebar"]',
    templateUrl  : './with-sidebar.component.html',
    styleUrls    : ['./with-sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'contentLayoutWithSidebar'
})
export class ContentLayoutWithSidebarComponent implements OnInit, OnDestroy
{
    @ViewChild('drawer')
    sidebar: MatDrawer;

    // Is sidebar persistent / mode is 'side'
    isSidebarPersistent: boolean;

    // Private
    private _innerScroll: boolean;
    private _sidebarPersistentAt: string;
    private _sidebarPosition: 'left' | 'right';
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    constructor(
        private _asmMediaWatcherService: AsmMediaWatcherService,
        private _elementRef: ElementRef,
        private _renderer: Renderer2
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.innerScroll = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter for inside scroll
     *
     * @param value
     */
    @Input()
    set innerScroll(value: boolean)
    {
        // Return, if the value is the same
        if ( value === this._innerScroll )
        {
            return;
        }

        // Store the value
        this._innerScroll = value;

        // If the value is true...
        if ( value )
        {
            // Add classes
            this._renderer.addClass(this._elementRef.nativeElement, 'inner-scroll');
        }
        else
        {
            // Remove the class
            this._renderer.removeClass(this._elementRef.nativeElement, 'inner-scroll');
        }
    }

    /**
     * Setter and getter for sidebar persistent at value
     *
     * @param value
     */
    @Input()
    set sidebarPersistentAt(value: string)
    {
        // Return, if the value is the same
        if ( value === this._sidebarPersistentAt )
        {
            return;
        }

        // Store the value
        this._sidebarPersistentAt = value;
    }

    get sidebarPersistentAt(): string
    {
        return this._sidebarPersistentAt;
    }

    /**
     * Setter and getter for sidebar position
     *
     * @param value
     */
    @Input()
    set sidebarPosition(value: 'left' | 'right')
    {
        // Return, if the value is the same
        if ( value === this._sidebarPosition )
        {
            return;
        }

        // Store the value
        this._sidebarPosition = value;
    }

    get sidebarPosition(): 'left' | 'right'
    {
        return this._sidebarPosition;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media changes
        this._asmMediaWatcherService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

                // Check if the breakpoint equals to the sidebarPersistentAt input
                if ( !this.sidebarPersistentAt )
                {
                    this.isSidebarPersistent = false;
                }
                else
                {
                    this.isSidebarPersistent = this._asmMediaWatcherService.isActive(this.sidebarPersistentAt);
                }
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

}

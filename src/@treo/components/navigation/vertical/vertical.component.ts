import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, Renderer2, SimpleChanges, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { merge, ReplaySubject, Subject, Subscription } from 'rxjs';
import { delay, filter, takeUntil } from 'rxjs/operators';
import { TreoAnimations } from '@treo/animations';
import { TreoNavigationItem, TreoVerticalNavigationAppearance, TreoVerticalNavigationMode, TreoVerticalNavigationPosition } from '@treo/components/navigation/navigation.types';
import { TreoNavigationService } from '@treo/components/navigation/navigation.service';
import { TreoScrollbarDirective } from '@treo/directives/scrollbar/scrollbar.directive';
import { TreoUtilsService } from '@treo/services/utils/utils.service';

@Component({
    selector       : 'treo-vertical-navigation',
    templateUrl    : './vertical.component.html',
    styleUrls      : ['./vertical.component.scss'],
    animations     : TreoAnimations,
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'treoVerticalNavigation'
})
export class TreoVerticalNavigationComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
    @Input() appearance: TreoVerticalNavigationAppearance = 'classic';
    @Input() autoCollapse = true;
    @Input() inner = false;
    @Input() mode: TreoVerticalNavigationMode = 'side';
    @Input() name: string = this._treoUtilsService.randomId();
    @Input() navigation: TreoNavigationItem[] = [];
    @Input() opened = true;
    @Input() position: TreoVerticalNavigationPosition = 'left';
    @Input() transparentOverlay = false;
    @Output() readonly appearanceChanged: EventEmitter<TreoVerticalNavigationAppearance> = new EventEmitter<TreoVerticalNavigationAppearance>();
    @Output() readonly modeChanged: EventEmitter<TreoVerticalNavigationMode> = new EventEmitter<TreoVerticalNavigationMode>();
    @Output() readonly openedChanged: EventEmitter<boolean | ''> = new EventEmitter<boolean | ''>();
    @Output() readonly positionChanged: EventEmitter<TreoVerticalNavigationPosition> = new EventEmitter<TreoVerticalNavigationPosition>();
    @ViewChild('navigationContent') private _navigationContentEl!: ElementRef;

    // Public
    activeAsideItemId: string | undefined = undefined;
    onCollapsableItemCollapsed: ReplaySubject<TreoNavigationItem> = new ReplaySubject<TreoNavigationItem>(1);
    onCollapsableItemExpanded: ReplaySubject<TreoNavigationItem> = new ReplaySubject<TreoNavigationItem>(1);
    onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

    // Private
    private _animationsEnabled = false;
    private _asideOverlay: HTMLElement | undefined = undefined;
    private _handleAsideOverlayClick: any;
    private _handleOverlayClick: any;
    private _hovered = false;
    private _overlay: HTMLElement | undefined = undefined;
    private _player!: AnimationPlayer;
    private _scrollStrategy: ScrollStrategy = this._scrollStrategyOptions.block();
    private _treoScrollbarDirectives!: QueryList<TreoScrollbarDirective>;
    private _treoScrollbarDirectivesSubscription!: Subscription;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     *
     * @param {AnimationBuilder} _animationBuilder
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer2
     * @param {Router} _router
     * @param {ScrollStrategyOptions} _scrollStrategyOptions
     * @param {TreoNavigationService} _treoNavigationService
     * @param {TreoUtilsService} _treoUtilsService
     */
    constructor(
        private _animationBuilder: AnimationBuilder,
        private _changeDetectorRef: ChangeDetectorRef,
        private _elementRef: ElementRef,
        private _renderer2: Renderer2,
        private _router: Router,
        private _scrollStrategyOptions: ScrollStrategyOptions,
        private _treoNavigationService: TreoNavigationService,
        private _treoUtilsService: TreoUtilsService
    )
    {
        // Set the private defaults
        this._handleAsideOverlayClick = () => {
            this.closeAside();
        };
        this._handleOverlayClick = () => {
            this.close();
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for classes
     */
    @HostBinding('class') get classList(): any
    {
        return {
            'treo-vertical-navigation-animations-enabled'             : this._animationsEnabled,
            [`treo-vertical-navigation-appearance-${this.appearance}`]: true,
            'treo-vertical-navigation-hover'                          : this._hovered,
            'treo-vertical-navigation-inner'                          : this.inner,
            [`treo-vertical-navigation-mode-${this.mode}`]            : true,
            'treo-vertical-navigation-opened'                         : this.opened,
            [`treo-vertical-navigation-position-${this.position}`]    : true
        };
    }

    /**
     * Host binding for inline styles
     */
    @HostBinding('style') get styleList(): any
    {
        return {
            'visibility': this.opened ? 'visible' : 'hidden'
        };
    }

    /**
     * Setter for treoScrollbarDirectives
     */
    @ViewChildren(TreoScrollbarDirective)
    set treoScrollbarDirectives(treoScrollbarDirectives: QueryList<TreoScrollbarDirective>)
    {
        // Store the directives
        this._treoScrollbarDirectives = treoScrollbarDirectives;

        // Return if there are no directives
        if ( treoScrollbarDirectives.length === 0 )
        {
            return;
        }

        // Unsubscribe the previous subscriptions
        if ( this._treoScrollbarDirectivesSubscription )
        {
            this._treoScrollbarDirectivesSubscription.unsubscribe();
        }

        // Update the scrollbars on collapsable items' collapse/expand
        this._treoScrollbarDirectivesSubscription =
            merge(
                this.onCollapsableItemCollapsed,
                this.onCollapsableItemExpanded
            )
                .pipe(
                    takeUntil(this._unsubscribeAll),
                    delay(250)
                )
                .subscribe(() => {

                    // Loop through the scrollbars and update them
                    treoScrollbarDirectives.forEach((treoScrollbarDirective) => {
                        treoScrollbarDirective.update();
                    });
                });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Appearance
        if ( 'appearance' in changes )
        {
            // Execute the observable
            this.appearanceChanged.next(changes.appearance.currentValue);
        }

        // Inner
        if ( 'inner' in changes )
        {
            // Interpret empty string as 'true'
            this.inner = changes.inner.currentValue === '' ? true : changes.inner.currentValue;
        }

        // Mode
        if ( 'mode' in changes )
        {
            // Get the previous and current values
            const currentMode = changes.mode.currentValue;
            const previousMode = changes.mode.previousValue;

            // Disable the animations
            this._disableAnimations();

            // If the mode changes: 'over -> side'
            if ( previousMode === 'over' && currentMode === 'side' )
            {
                // Hide the overlay
                this._hideOverlay();
            }

            // If the mode changes: 'side -> over'
            if ( previousMode === 'side' && currentMode === 'over' )
            {
                // Close the aside
                this.closeAside();

                // If the navigation is opened
                if ( this.opened )
                {
                    // Show the overlay
                    this._showOverlay();
                }
            }

            // Execute the observable
            this.modeChanged.next(currentMode);

            // Enable the animations after a delay
            // The delay must be bigger than the current transition-duration
            // to make sure nothing will be animated while the mode changing
            setTimeout(() => {
                this._enableAnimations();
            }, 500);
        }

        // Navigation
        if ( 'navigation' in changes )
        {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        }

        // Opened
        if ( 'opened' in changes )
        {
            // Interpret empty string as 'true'
            this.opened = changes.opened.currentValue === '' ? true : changes.opened.currentValue;

            // Open/close the navigation
            this._toggleOpened(this.opened);
        }

        // Position
        if ( 'position' in changes )
        {
            // Execute the observable
            this.positionChanged.next(changes.position.currentValue);
        }

        // Transparent overlay
        if ( 'transparentOverlay' in changes )
        {
            // Interpret empty string as 'true'
            this.transparentOverlay = changes.transparentOverlay.currentValue === '' ? true : changes.transparentOverlay.currentValue;
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Register the navigation component
        this._treoNavigationService.registerComponent(this.name, this);

        // Subscribe to the 'NavigationEnd' event
        this._router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {

                // If the mode is 'over' and the navigation is opened...
                if ( this.mode === 'over' && this.opened )
                {
                    // Close the navigation
                    this.close();
                }

                // If the mode is 'side' and the aside is active...
                if ( this.mode === 'side' && this.activeAsideItemId )
                {
                    // Close the aside
                    this.closeAside();
                }
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        setTimeout(() => {

            // If 'navigation content' element doesn't have
            // perfect scrollbar activated on it...
            if ( !this._navigationContentEl.nativeElement.classList.contains('ps') )
            {
                // Find the active item
                const activeItem = this._navigationContentEl.nativeElement.querySelector('.treo-vertical-navigation-item-active');

                // If the active item exists, scroll it into view
                if ( activeItem )
                {
                    activeItem.scrollIntoView();
                }
            }
            // Otherwise
            else
            {
                // Go through all the scrollbar directives
                this._treoScrollbarDirectives.forEach((treoScrollbarDirective) => {

                    // Skip if not enabled
                    if ( !treoScrollbarDirective.isEnabled() )
                    {
                        return;
                    }

                    // Scroll to the active element
                    treoScrollbarDirective.scrollToElement('.treo-vertical-navigation-item-active', -120, true);
                });
            }
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Deregister the navigation component from the registry
        this._treoNavigationService.deregisterComponent(this.name);

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Enable the animations
     *
     * @private
     */
    private _enableAnimations(): void
    {
        // Return if the animations are already enabled
        if ( this._animationsEnabled )
        {
            return;
        }

        // Enable the animations
        this._animationsEnabled = true;
    }

    /**
     * Disable the animations
     *
     * @private
     */
    private _disableAnimations(): void
    {
        // Return if the animations are already disabled
        if ( !this._animationsEnabled )
        {
            return;
        }

        // Disable the animations
        this._animationsEnabled = false;
    }

    /**
     * Show the overlay
     *
     * @private
     */
    private _showOverlay(): void
    {
        // Return if there is already an overlay
        if ( this._asideOverlay )
        {
            return;
        }

        // Create the overlay element
        this._overlay = this._renderer2.createElement('div');

        // Add a class to the overlay element
        this._overlay?.classList.add('treo-vertical-navigation-overlay');

        // Add a class depending on the transparentOverlay option
        if ( this.transparentOverlay )
        {
            this._overlay?.classList.add('treo-vertical-navigation-overlay-transparent');
        }

        // Append the overlay to the parent of the navigation
        this._renderer2.appendChild(this._elementRef.nativeElement.parentElement, this._overlay);

        // Enable block scroll strategy
        this._scrollStrategy.enable();

        // Create the enter animation and attach it to the player
        this._player = this._animationBuilder.build([
            animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({opacity: 1}))
        ]).create(this._overlay);

        // Play the animation
        this._player.play();

        // Add an event listener to the overlay
        this._overlay?.addEventListener('click', this._handleOverlayClick);
    }

    /**
     * Hide the overlay
     *
     * @private
     */
    private _hideOverlay(): void
    {
        if ( !this._overlay )
        {
            return;
        }

        // Create the leave animation and attach it to the player
        this._player = this._animationBuilder.build([
            animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({opacity: 0}))
        ]).create(this._overlay);

        // Play the animation
        this._player.play();

        // Once the animation is done...
        this._player.onDone(() => {

            // If the overlay still exists...
            if ( this._overlay )
            {
                // Remove the event listener
                this._overlay.removeEventListener('click', this._handleOverlayClick);

                // Remove the overlay
                this._overlay?.parentNode?.removeChild(this._overlay);
                this._overlay = undefined;
            }

            // Disable block scroll strategy
            this._scrollStrategy.disable();
        });
    }

    /**
     * Show the aside overlay
     *
     * @private
     */
    private _showAsideOverlay(): void
    {
        // Return if there is already an overlay
        if ( this._asideOverlay )
        {
            return;
        }

        // Create the aside overlay element
        this._asideOverlay = this._renderer2.createElement('div');

        // Add a class to the aside overlay element
        this._asideOverlay?.classList.add('treo-vertical-navigation-aside-overlay');

        // Append the aside overlay to the parent of the navigation
        this._renderer2.appendChild(this._elementRef.nativeElement.parentElement, this._asideOverlay);

        // Create the enter animation and attach it to the player
        this._player =
            this._animationBuilder
                .build([
                    animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({opacity: 1}))
                ]).create(this._asideOverlay);

        // Play the animation
        this._player.play();

        // Add an event listener to the aside overlay
        this._asideOverlay?.addEventListener('click', this._handleAsideOverlayClick);
    }

    /**
     * Hide the aside overlay
     *
     * @private
     */
    private _hideAsideOverlay(): void
    {
        if ( !this._asideOverlay )
        {
            return;
        }

        // Create the leave animation and attach it to the player
        this._player =
            this._animationBuilder
                .build([
                    animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({opacity: 0}))
                ]).create(this._asideOverlay);

        // Play the animation
        this._player.play();

        // Once the animation is done...
        this._player.onDone(() => {

            // If the aside overlay still exists...
            if ( this._asideOverlay )
            {
                // Remove the event listener
                this._asideOverlay.removeEventListener('click', this._handleAsideOverlayClick);

                // Remove the aside overlay
                this._asideOverlay?.parentNode?.removeChild(this._asideOverlay);
                this._asideOverlay = undefined;
            }
        });
    }

    /**
     * On mouseenter
     *
     * @private
     */
    @HostListener('mouseenter')
    private _onMouseenter(): void
    {
        // Enable the animations
        this._enableAnimations();

        // Set the hovered
        this._hovered = true;
    }

    /**
     * On mouseleave
     *
     * @private
     */
    @HostListener('mouseleave')
    private _onMouseleave(): void
    {
        // Enable the animations
        this._enableAnimations();

        // Set the hovered
        this._hovered = false;
    }

    /**
     * Open/close the navigation
     *
     * @param open
     * @private
     */
    private _toggleOpened(open: boolean): void
    {
        // Set the opened
        this.opened = open;

        // Enable the animations
        this._enableAnimations();

        // If the navigation opened, and the mode
        // is 'over', show the overlay
        if ( this.mode === 'over' )
        {
            if ( this.opened )
            {
                this._showOverlay();
            }
            else
            {
                this._hideOverlay();
            }
        }

        // Execute the observable
        this.openedChanged.next(open);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Refresh the component to apply the changes
     */
    refresh(): void
    {
        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this.onRefreshed.next(true);
    }

    /**
     * Open the navigation
     */
    open(): void
    {
        // Return if the navigation is already open
        if ( this.opened )
        {
            return;
        }

        // Set the opened
        this._toggleOpened(true);
    }

    /**
     * Close the navigation
     */
    close(): void
    {
        // Return if the navigation is already closed
        if ( !this.opened )
        {
            return;
        }

        // Close the aside
        this.closeAside();

        // Set the opened
        this._toggleOpened(false);
    }

    /**
     * Toggle the navigation
     */
    toggle(): void
    {
        // Toggle
        if ( this.opened )
        {
            this.close();
        }
        else
        {
            this.open();
        }
    }

    /**
     * Open the aside
     *
     * @param item
     */
    openAside(item: TreoNavigationItem): void
    {
        // Return if the item is disabled
        if ( item.disabled )
        {
            return;
        }

        // Open
        this.activeAsideItemId = item.id;

        // Show the aside overlay
        this._showAsideOverlay();

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Close the aside
     */
    closeAside(): void
    {
        // Close
        this.activeAsideItemId = undefined;

        // Hide the aside overlay
        this._hideAsideOverlay();

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Toggle the aside
     *
     * @param item
     */
    toggleAside(item: TreoNavigationItem): void
    {
        // Toggle
        if ( this.activeAsideItemId === item.id )
        {
            this.closeAside();
        }
        else
        {
            this.openAside(item);
        }
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}

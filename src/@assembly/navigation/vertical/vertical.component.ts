import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, merge, Subject, Subscription } from 'rxjs';
import { delay, filter, takeUntil } from 'rxjs/operators';
import { AsmAnimations } from '@assembly/animations';
import { AsmNavigationAppearance, AsmNavigationItem, AsmNavigationMode, AsmNavigationPosition } from '@assembly/navigation/navigation.types';
import { AsmNavigationService } from '@assembly/navigation/navigation.service';
import { AsmScrollbarDirective } from '@assembly/scrollbar/scrollbar.directive';

@Component({
    selector       : 'asm-vertical-navigation',
    templateUrl    : './vertical.component.html',
    styleUrls      : ['./vertical.component.scss'],
    animations     : AsmAnimations,
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'asmVerticalNavigation'
})
export class AsmVerticalNavigationComponent implements OnInit, AfterViewInit, OnDestroy
{
    activeAsideItemId: null | string;
    onCollapsableItemCollapsed: BehaviorSubject<AsmNavigationItem | null>;
    onCollapsableItemExpanded: BehaviorSubject<AsmNavigationItem | null>;
    onRefreshed: BehaviorSubject<boolean | null>;

    // Auto collapse
    @Input()
    autoCollapse: boolean;

    // Name
    @Input()
    name: string;

    // On appearance changed
    @Output()
    readonly appearanceChanged: EventEmitter<AsmNavigationAppearance>;

    // On mode changed
    @Output()
    readonly modeChanged: EventEmitter<AsmNavigationMode>;

    // On opened changed
    @Output()
    readonly openedChanged: EventEmitter<boolean | ''>;

    // On position changed
    @Output()
    readonly positionChanged: EventEmitter<AsmNavigationPosition>;

    // Private
    private _appearance: AsmNavigationAppearance;
    private _asideOverlay: HTMLElement | null;
    private _asmScrollbarDirectives: QueryList<AsmScrollbarDirective>;
    private _asmScrollbarDirectivesSubscription: Subscription;
    private _inner: boolean;
    private _mode: AsmNavigationMode;
    private _navigation: AsmNavigationItem[];
    private _opened: boolean | '';
    private _overlay: HTMLElement | null;
    private _player: AnimationPlayer;
    private _position: AsmNavigationPosition;
    private _transparentOverlay: boolean | '';
    private _unsubscribeAll: Subject<any>;

    @HostBinding('class.asm-vertical-navigation-animations-enabled')
    private _animationsEnabled: boolean;

    @ViewChild('navigationContent')
    private _navigationContentEl: ElementRef;

    /**
     * Constructor
     *
     * @param {AnimationBuilder} _animationBuilder
     * @param {AsmNavigationService} _asmNavigationService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer2
     * @param {Router} _router
     */
    constructor(
        private _animationBuilder: AnimationBuilder,
        private _asmNavigationService: AsmNavigationService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _elementRef: ElementRef,
        private _renderer2: Renderer2,
        private _router: Router
    )
    {
        // Set the private defaults
        this._animationsEnabled = false;
        this._asideOverlay = null;
        this._overlay = null;
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.appearanceChanged = new EventEmitter<AsmNavigationAppearance>();
        this.modeChanged = new EventEmitter<AsmNavigationMode>();
        this.openedChanged = new EventEmitter<boolean | ''>();
        this.positionChanged = new EventEmitter<AsmNavigationPosition>();

        this.onCollapsableItemCollapsed = new BehaviorSubject(null);
        this.onCollapsableItemExpanded = new BehaviorSubject(null);
        this.onRefreshed = new BehaviorSubject(null);

        this.activeAsideItemId = null;
        this.appearance = 'classic';
        this.autoCollapse = true;
        this.inner = false;
        this.mode = 'side';
        this.opened = false;
        this.position = 'left';
        this.transparentOverlay = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for appearance
     *
     * @param value
     */
    @Input()
    set appearance(value: AsmNavigationAppearance)
    {
        // If the value is the same, return...
        if ( this._appearance === value )
        {
            return;
        }

        let appearanceClassName;

        // Remove the previous appearance class
        appearanceClassName = 'asm-vertical-navigation-appearance-' + this.appearance;
        this._renderer2.removeClass(this._elementRef.nativeElement, appearanceClassName);

        // Store the appearance
        this._appearance = value;

        // Add the new appearance class
        appearanceClassName = 'asm-vertical-navigation-appearance-' + this.appearance;
        this._renderer2.addClass(this._elementRef.nativeElement, appearanceClassName);

        // Execute the observable
        this.appearanceChanged.next(this.appearance);
    }

    get appearance(): AsmNavigationAppearance
    {
        return this._appearance;
    }

    /**
     * Setter for asmScrollbarDirectives
     */
    @ViewChildren(AsmScrollbarDirective)
    set asmScrollbarDirectives(asmScrollbarDirectives: QueryList<AsmScrollbarDirective>)
    {
        // Store the directives
        this._asmScrollbarDirectives = asmScrollbarDirectives;

        // Return, if there are no directives
        if ( asmScrollbarDirectives.length === 0 )
        {
            return;
        }

        // Unsubscribe the previous subscriptions
        if ( this._asmScrollbarDirectivesSubscription )
        {
            this._asmScrollbarDirectivesSubscription.unsubscribe();
        }

        // Update the scrollbars on collapsable items' collapse/expand
        this._asmScrollbarDirectivesSubscription =
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
                    asmScrollbarDirectives.forEach((asmScrollbarDirective) => {
                        asmScrollbarDirective.update();
                    });
                });
    }

    /**
     * Setter & getter for data
     */
    @Input()
    set navigation(value: AsmNavigationItem[])
    {
        // Store the data
        this._navigation = value;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    get navigation(): AsmNavigationItem[]
    {
        return this._navigation;
    }

    /**
     * Setter & getter for inner
     *
     * @param value
     */
    @Input()
    set inner(value: boolean)
    {
        // If the value is the same, return...
        if ( this._inner === value )
        {
            return;
        }

        // Set the naked value
        this._inner = value;

        // Update the class
        if ( this.inner )
        {
            this._renderer2.addClass(this._elementRef.nativeElement, 'asm-vertical-navigation-inner');
        }
        else
        {
            this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-vertical-navigation-inner');
        }
    }

    get inner(): boolean
    {
        return this._inner;
    }

    /**
     * Setter & getter for mode
     *
     * @param value
     */
    @Input()
    set mode(value: AsmNavigationMode)
    {
        // If the value is the same, return...
        if ( this._mode === value )
        {
            return;
        }

        // If the mode changes to the 'side' from the 'over'...
        if ( this.mode === 'over' && value === 'side' )
        {
            // Hide the overlay
            this._hideOverlay();

            // Execute the observable
            this.modeChanged.next(value);
        }

        // If the mode changes to the 'side' from the 'over'...
        if ( this.mode === 'side' && value === 'over' )
        {
            // Close the aside
            this.closeAside();

            // Execute the observable
            this.modeChanged.next(value);
        }

        let modeClassName;

        // Remove the previous mode class
        modeClassName = 'asm-vertical-navigation-mode-' + this.mode;
        this._renderer2.removeClass(this._elementRef.nativeElement, modeClassName);

        // Store the mode
        this._mode = value;

        // Add the new mode class
        modeClassName = 'asm-vertical-navigation-mode-' + this.mode;
        this._renderer2.addClass(this._elementRef.nativeElement, modeClassName);

        // Execute the observable
        this.modeChanged.next(this.mode);
    }

    get mode(): AsmNavigationMode
    {
        return this._mode;
    }

    /**
     * Setter & getter for opened
     *
     * @param value
     */
    @Input()
    set opened(value: boolean | '')
    {
        // If the value is the same, return...
        if ( this._opened === value )
        {
            return;
        }

        // If the provided value is an empty string,
        // take that as a 'true'
        if ( value === '' )
        {
            value = true;
        }

        // Set the opened value
        this._opened = value;

        // If the navigation opened, and the mode
        // is 'over', show the overlay
        if ( this.mode === 'over' )
        {
            if ( this._opened )
            {
                this._showOverlay();
            }
            else
            {
                this._hideOverlay();
            }
        }

        if ( this.opened )
        {
            // Update styles and classes
            this._renderer2.setStyle(this._elementRef.nativeElement, 'visibility', 'visible');
            this._renderer2.addClass(this._elementRef.nativeElement, 'asm-vertical-navigation-opened');
        }
        else
        {
            // Update styles and classes
            this._renderer2.setStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
            this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-vertical-navigation-opened');
        }

        // Execute the observable
        this.openedChanged.next(this.opened);
    }

    get opened(): boolean | ''
    {
        return this._opened;
    }

    /**
     * Setter & getter for position
     *
     * @param value
     */
    @Input()
    set position(value: AsmNavigationPosition)
    {
        // If the value is the same, return...
        if ( this._position === value )
        {
            return;
        }

        let positionClassName;

        // Remove the previous position class
        positionClassName = 'asm-vertical-navigation-position-' + this.position;
        this._renderer2.removeClass(this._elementRef.nativeElement, positionClassName);

        // Store the position
        this._position = value;

        // Add the new position class
        positionClassName = 'asm-vertical-navigation-position-' + this.position;
        this._renderer2.addClass(this._elementRef.nativeElement, positionClassName);

        // Execute the observable
        this.positionChanged.next(this.position);
    }

    get position(): AsmNavigationPosition
    {
        return this._position;
    }

    /**
     * Setter & getter for transparent overlay
     *
     * @param value
     */
    @Input()
    set transparentOverlay(value: boolean | '')
    {
        // If the value is the same, return...
        if ( this._opened === value )
        {
            return;
        }

        // If the provided value is an empty string,
        // take that as a 'true' and set the opened value
        if ( value === '' )
        {
            // Set the opened value
            this._transparentOverlay = true;
        }
        else
        {
            // Set the transparent overlay value
            this._transparentOverlay = value;
        }
    }

    get transparentOverlay(): boolean | ''
    {
        return this._transparentOverlay;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Register the navigation component
        this._asmNavigationService.registerComponent(this.name, this);

        // Subscribe to the 'NavigationEnd' event
        this._router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {

                if ( this.mode === 'over' && this.opened )
                {
                    // Close the navigation
                    this.close();
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
                const activeItem = this._navigationContentEl.nativeElement.querySelector('.asm-vertical-navigation-item-active');

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
                this._asmScrollbarDirectives.forEach((asmScrollbarDirective) => {

                    // Skip if not enabled
                    if ( !asmScrollbarDirective.enabled )
                    {
                        return;
                    }

                    // Scroll to the active element
                    asmScrollbarDirective.scrollToElement('.asm-vertical-navigation-item-active', -120, true);
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
        this._asmNavigationService.deregisterComponent(this.name);

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
        // If the animations are already enabled, return...
        if ( this._animationsEnabled )
        {
            return;
        }

        // Enable the animations
        this._animationsEnabled = true;
    }

    /**
     * Show the overlay
     *
     * @private
     */
    private _showOverlay(): void
    {
        // If there is already an overlay, return...
        if ( this._asideOverlay )
        {
            return;
        }

        // Create the overlay element
        this._overlay = this._renderer2.createElement('div');

        // Add a class to the overlay element
        this._overlay.classList.add('asm-vertical-navigation-overlay');

        // Add a class depending on the transparentOverlay option
        if ( this.transparentOverlay )
        {
            this._overlay.classList.add('asm-vertical-navigation-overlay-transparent');
        }

        // Append the overlay to the parent of the navigation
        this._renderer2.appendChild(this._elementRef.nativeElement.parentElement, this._overlay);

        // Create the enter animation and attach it to the player
        this._player =
            this._animationBuilder
                .build([
                    animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({opacity: 1}))
                ]).create(this._overlay);

        // Play the animation
        this._player.play();

        // Add an event listener to the overlay
        this._overlay.addEventListener('click', () => {
            this.close();
        });
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
        this._player =
            this._animationBuilder
                .build([
                    animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({opacity: 0}))
                ]).create(this._overlay);

        // Play the animation
        this._player.play();

        // Once the animation is done...
        this._player.onDone(() => {

            // If the overlay still exists...
            if ( this._overlay )
            {
                // Remove the overlay
                this._overlay.parentNode.removeChild(this._overlay);
                this._overlay = null;
            }
        });
    }

    /**
     * Show the aside overlay
     *
     * @private
     */
    private _showAsideOverlay(): void
    {
        // If there is already an overlay, return...
        if ( this._asideOverlay )
        {
            return;
        }

        // Create the aside overlay element
        this._asideOverlay = this._renderer2.createElement('div');

        // Add a class to the aside overlay element
        this._asideOverlay.classList.add('asm-vertical-navigation-aside-overlay');

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
        this._asideOverlay.addEventListener('click', () => {
            this.closeAside();
        });
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
                // Remove the aside overlay
                this._asideOverlay.parentNode.removeChild(this._asideOverlay);
                this._asideOverlay = null;
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

        // Add a class
        this._renderer2.addClass(this._elementRef.nativeElement, 'asm-vertical-navigation-hover');
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

        // Remove the class
        this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-vertical-navigation-hover');
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
        // Enable the animations
        this._enableAnimations();

        // Open
        this.opened = true;
    }

    /**
     * Close the navigation
     */
    close(): void
    {
        // Enable the animations
        this._enableAnimations();

        // Close the aside
        this.closeAside();

        // Close
        this.opened = false;
    }

    /**
     * Toggle the opened status
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
    openAside(item: AsmNavigationItem): void
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
        this.activeAsideItemId = null;

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
    toggleAside(item: AsmNavigationItem): void
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
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChildren, ViewEncapsulation } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { merge, Subject, Subscription } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { AsmAnimations } from '@assembly/animations/public-api';
import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';
import { AsmScrollbarDirective } from '@assembly/directives/scrollbar/scrollbar.directive';
import { AsmNavigationAppearance, AsmNavigationMode, AsmNavigationPosition } from '@assembly';

@Component({
    selector       : 'asm-navigation',
    templateUrl    : './navigation.component.html',
    styleUrls      : ['./navigation.component.scss'],
    animations     : AsmAnimations,
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'asmNavigation'
})
export class AsmNavigationComponent implements OnInit, AfterViewInit, OnDestroy
{
    activeAsideItemId: null | string;
    data: any[];

    // Auto collapse
    @Input()
    autoCollapse: boolean;

    // Name
    @Input()
    name: string;

    // Show tooltips
    @Input()
    showTooltips: boolean;

    // Private
    private _appearance: 'classic' | 'compact' | 'dense' | 'thin';
    private _asideOverlay: HTMLElement | null;
    private _asmScrollbarDirectives: QueryList<AsmScrollbarDirective>;
    private _asmScrollbarDirectivesSubscription: Subscription;
    private _mode: 'over' | 'side';
    private _opened: boolean | '';
    private _overlay: HTMLElement | null;
    private _player: AnimationPlayer;
    private _position: 'left' | 'right';
    private _transparentOverlay: boolean | '';
    private _unsubscribeAll: Subject<any>;

    @HostBinding('class.asm-navigation-animations-enabled')
    private _animationsEnabled: boolean;

    /**
     * Constructor
     *
     * @param {AnimationBuilder} _animationBuilder
     * @param {AsmNavigationService} _asmNavigationService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer2
     */
    constructor(
        private _animationBuilder: AnimationBuilder,
        private _asmNavigationService: AsmNavigationService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _elementRef: ElementRef,
        private _renderer2: Renderer2
    )
    {
        // Set the private defaults
        this._animationsEnabled = false;
        this._asideOverlay = null;
        this._overlay = null;
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.activeAsideItemId = null;
        this.appearance = 'classic';
        this.autoCollapse = true;
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
        appearanceClassName = 'asm-navigation-appearance-' + this.appearance;
        this._renderer2.removeClass(this._elementRef.nativeElement, appearanceClassName);

        // Store the appearance
        this._appearance = value;

        // Add the new appearance class
        appearanceClassName = 'asm-navigation-appearance-' + this.appearance;
        this._renderer2.addClass(this._elementRef.nativeElement, appearanceClassName);

        // Execute the observable
        this._asmNavigationService.onAppearanceChanged.next(this.appearance);
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
                this._asmNavigationService.onCollapsableItemCollapsed,
                this._asmNavigationService.onCollapsableItemExpanded
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
            this._asmNavigationService.onModeChanged.next(value);
        }

        // If the mode changes to the 'side' from the 'over'...
        if ( this.mode === 'side' && value === 'over' )
        {
            // Close the aside
            this.closeAside();

            // Execute the observable
            this._asmNavigationService.onModeChanged.next(value);
        }

        let modeClassName;

        // Remove the previous mode class
        modeClassName = 'asm-navigation-mode-' + this.mode;
        this._renderer2.removeClass(this._elementRef.nativeElement, modeClassName);

        // Store the mode
        this._mode = value;

        // Add the new mode class
        modeClassName = 'asm-navigation-mode-' + this.mode;
        this._renderer2.addClass(this._elementRef.nativeElement, modeClassName);

        // Execute the observable
        this._asmNavigationService.onModeChanged.next(this.mode);
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

        // Update
        if ( this.opened )
        {
            // Update styles and classes
            this._renderer2.setStyle(this._elementRef.nativeElement, 'visibility', 'visible');
            this._renderer2.addClass(this._elementRef.nativeElement, 'asm-navigation-opened');
        }
        else
        {
            // Update styles and classes
            this._renderer2.setStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
            this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-navigation-opened');
        }

        // Execute the observable
        this._asmNavigationService.onOpenedChanged.next(this.opened);
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
        positionClassName = 'asm-navigation-position-' + this.position;
        this._renderer2.removeClass(this._elementRef.nativeElement, positionClassName);

        // Store the position
        this._position = value;

        // Add the new position class
        positionClassName = 'asm-navigation-position-' + this.position;
        this._renderer2.addClass(this._elementRef.nativeElement, positionClassName);

        // Execute the observable
        this._asmNavigationService.onPositionChanged.next(this.position);
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

        // Store options on the service
        this._asmNavigationService.autoCollapse = this.autoCollapse;
        this._asmNavigationService.showTooltips = this.showTooltips;

        // Load the navigation either from the input or from the service
        this.data = this._asmNavigationService.getCurrentNavigation();

        // Subscribe to the current navigation changes
        this._asmNavigationService.onCurrentChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

                // Load the navigation
                this.data = this._asmNavigationService.getCurrentNavigation();

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Go through all the scrollbar directives
        this._asmScrollbarDirectives.forEach((asmScrollbarDirective) => {

            // Scroll to the active element
            setTimeout(() => {
                asmScrollbarDirective.scrollToElement('.asm-navigation-item-active', -120, true);
            });
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
        this._overlay.classList.add('asm-navigation-overlay');

        // Add a class depending on the transparentOverlay option
        if ( this.transparentOverlay )
        {
            this._overlay.classList.add('asm-navigation-overlay-transparent');
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
        this._asideOverlay.classList.add('asm-navigation-aside-overlay');

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
        this._renderer2.addClass(this._elementRef.nativeElement, 'asm-navigation-hover');
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
        this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-navigation-hover');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

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
     */
    openAside(navigationId): void
    {
        // Open
        this.activeAsideItemId = navigationId;

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
     * @param navigationId
     */
    toggleAside(navigationId): void
    {
        // Toggle
        if ( this.activeAsideItemId === navigationId )
        {
            this.closeAside();
        }
        else
        {
            this.openAside(navigationId);
        }
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackById(index, item): number
    {
        return item.id || index;
    }
}

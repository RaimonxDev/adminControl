import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { AsmDrawerService } from '@assembly/drawer/drawer.service';

@Component({
    selector     : 'asm-drawer',
    templateUrl  : './drawer.component.html',
    styleUrls    : ['./drawer.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'asmDrawer'
})
export class AsmDrawerComponent implements OnInit, OnDestroy
{
    // Name
    @Input()
    name: string;

    // Private
    private _mode: 'over' | 'side';
    private _opened: boolean | '';
    private _overlay: HTMLElement | null;
    private _player: AnimationPlayer;
    private _position: 'left' | 'right';
    private _transparentOverlay: boolean | '';

    // On mode changed
    @Output()
    readonly modeChanged: EventEmitter<'over' | 'side'>;

    // On opened changed
    @Output()
    readonly openedChanged: EventEmitter<boolean | ''>;

    // On position changed
    @Output()
    readonly positionChanged: EventEmitter<'left' | 'right'>;

    @HostBinding('class.asm-drawer-animations-enabled')
    private _animationsEnabled: boolean;

    /**
     * Constructor
     *
     * @param {AnimationBuilder} _animationBuilder
     * @param {AsmDrawerService} _asmDrawerService
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer2
     */
    constructor(
        private _animationBuilder: AnimationBuilder,
        private _asmDrawerService: AsmDrawerService,
        private _elementRef: ElementRef,
        private _renderer2: Renderer2
    )
    {
        // Set the private defaults
        this._animationsEnabled = false;
        this._overlay = null;

        // Set the defaults
        this.modeChanged = new EventEmitter<'over' | 'side'>();
        this.openedChanged = new EventEmitter<boolean | ''>();
        this.positionChanged = new EventEmitter<'left' | 'right'>();

        this.mode = 'side';
        this.opened = false;
        this.position = 'left';
        this.transparentOverlay = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for mode
     *
     * @param value
     */
    @Input()
    set mode(value: 'over' | 'side')
    {
        // If the value is the same, return...
        if ( this._mode === value )
        {
            return;
        }

        // If the mode changes to the 'side' from the 'over',
        // hide the backdrop
        if ( this.mode === 'over' && value.startsWith('side') )
        {
            this._hideOverlay();
        }

        let modeClassName;

        // Remove the previous mode class
        modeClassName = 'asm-drawer-mode-' + this.mode;
        this._renderer2.removeClass(this._elementRef.nativeElement, modeClassName);

        // Store the mode
        this._mode = value;

        // Add the new mode class
        modeClassName = 'asm-drawer-mode-' + this.mode;
        this._renderer2.addClass(this._elementRef.nativeElement, modeClassName);

        // Execute the observable
        this.modeChanged.next(this.mode);
    }

    get mode(): 'over' | 'side'
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

        // If the drawer opened, and the mode
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

        // Update opened classes
        if ( this.opened )
        {
            this._renderer2.setStyle(this._elementRef.nativeElement, 'visibility', 'visible');
            this._renderer2.addClass(this._elementRef.nativeElement, 'asm-drawer-opened');
        }
        else
        {
            this._renderer2.setStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
            this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-drawer-opened');
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
    set position(value: 'left' | 'right')
    {
        // If the value is the same, return...
        if ( this._position === value )
        {
            return;
        }

        let positionClassName;

        // Remove the previous position class
        positionClassName = 'asm-drawer-position-' + this.position;
        this._renderer2.removeClass(this._elementRef.nativeElement, positionClassName);

        // Store the position
        this._position = value;

        // Add the new position class
        positionClassName = 'asm-drawer-position-' + this.position;
        this._renderer2.addClass(this._elementRef.nativeElement, positionClassName);

        // Execute the observable
        this.positionChanged.next(this.position);
    }

    get position(): 'left' | 'right'
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
        // Register the drawer
        this._asmDrawerService.registerComponent(this.name, this);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Deregister the drawer from the registry
        this._asmDrawerService.deregisterComponent(this.name);
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
     * Show the backdrop
     *
     * @private
     */
    private _showOverlay(): void
    {
        // Create the backdrop element
        this._overlay = this._renderer2.createElement('div');

        // Add a class to the backdrop element
        this._overlay.classList.add('asm-drawer-overlay');

        // Add a class depending on the transparentOverlay option
        if ( this.transparentOverlay )
        {
            this._overlay.classList.add('asm-drawer-overlay-transparent');
        }

        // Append the backdrop to the parent of the drawer
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
     * Hide the backdrop
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

            // If the backdrop still exists...
            if ( this._overlay )
            {
                // Remove the backdrop
                this._overlay.parentNode.removeChild(this._overlay);
                this._overlay = null;
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
        this._renderer2.addClass(this._elementRef.nativeElement, 'asm-drawer-hover');
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
        this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-drawer-hover');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open the drawer
     */
    open(): void
    {
        // Enable the animations
        this._enableAnimations();

        // Open
        this.opened = true;
    }

    /**
     * Close the drawer
     */
    close(): void
    {
        // Enable the animations
        this._enableAnimations();

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
}
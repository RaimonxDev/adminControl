import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'asm-card-panel',
    templateUrl  : './panel.component.html',
    styles       : [''],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'asmCardPanel'
})
export class AsmCardPanelComponent
{
    showDetails: boolean;

    // Private
    private _animation: string;

    /**
     * Constructor
     *
     * @param {Renderer2} _renderer2
     * @param {ElementRef} _elementRef
     */
    constructor(
        private _renderer2: Renderer2,
        private _elementRef: ElementRef
    )
    {
        // Set the defaults
        this.animation = 'expandCollapse';
        this.showDetails = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter and getter for animation
     *
     * @param value
     */
    @Input()
    set animation(value: string)
    {
        // If the value is the same, return...
        if ( this._animation === value )
        {
            return;
        }

        // Update the class name
        if ( value )
        {
            // this._renderer2.addClass(this._elementRef.nativeElement, 'asm-card-flippable');
        }
        else
        {
            // this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-card-flippable');
        }

        // Store the value
        this._animation = value;
    }

    get animation(): string
    {
        return this._animation;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Show the details
     */
    show(): void
    {
        this.showDetails = true;
    }

    /**
     * Hide the details
     */
    hide(): void
    {
        this.showDetails = false;
    }
}

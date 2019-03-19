import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'asm-card',
    templateUrl  : './card.component.html',
    styleUrls    : ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'asmCard'
})
export class AsmCardComponent
{
    // Private
    private _flippable: boolean;

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
        this.flippable = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter and getter for flippable
     *
     * @param value
     */
    @Input()
    set flippable(value: boolean)
    {
        // If the value is the same, return...
        if ( this._flippable === value )
        {
            return;
        }

        // Update the class name
        if ( value )
        {
            this._renderer2.addClass(this._elementRef.nativeElement, 'asm-card-flippable');
        }
        else
        {
            this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-card-flippable');
        }

        // Store the value
        this._flippable = value;
    }

    get flippable(): boolean
    {
        return this._flippable;
    }

}

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
    private _appearance: 'material';
    private _color: 'currentColor' | 'primary' | 'accent' | 'warn';
    private _diameter: number;

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
        this.appearance = 'material';
        this.color = 'currentColor';
        this.diameter = 32;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter and getter for appearance
     *
     * @param value
     */
    @Input()
    set appearance(value: 'material')
    {
        // Update the class name
        this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-spinner-appearance-' + this.appearance);
        this._renderer2.addClass(this._elementRef.nativeElement, 'asm-spinner-appearance-' + value);

        // Store the value
        this._appearance = value;
    }

    get appearance(): 'material'
    {
        return this._appearance;
    }

    /**
     * Setter and getter for color
     *
     * @param value
     */
    @Input()
    set color(value: 'currentColor' | 'primary' | 'accent' | 'warn')
    {
        // Update the class name
        this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-spinner-color-' + this.color);
        this._renderer2.addClass(this._elementRef.nativeElement, 'asm-spinner-color-' + value);

        // Store the value
        this._color = value;
    }

    get color(): 'currentColor' | 'primary' | 'accent' | 'warn'
    {
        return this._color;
    }

    /**
     * Setter and getter for diameter
     *
     * @param value
     */
    @Input()
    set diameter(value: number)
    {
        // Store the value
        this._diameter = value;
    }

    get diameter(): number
    {
        return this._diameter;
    }

}

import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
    selector   : 'asm-search',
    templateUrl: './search.component.html',
    styleUrls  : ['./search.component.scss']
})
export class AsmSearchComponent
{
    // Private
    private _appearance: 'basic' | 'bar' | 'fullscreen';

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2
    )
    {
        // Set the private defaults

        // Set the defaults
        this.appearance = 'basic';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    @Input()
    set appearance(value: 'basic' | 'bar' | 'fullscreen')
    {
        // If the value is the same, return...
        if ( this._appearance === value )
        {
            return;
        }

        let appearanceClassName;

        // Remove the previous appearance class
        appearanceClassName = 'asm-search-appearance-' + this.appearance;
        this._renderer.removeClass(this._elementRef.nativeElement, appearanceClassName);

        // Store the appearance
        this._appearance = value;

        // Add the new appearance class
        appearanceClassName = 'asm-navigation-appearance-' + this.appearance;
        this._renderer.addClass(this._elementRef.nativeElement, appearanceClassName);

        // Execute the observable
        // this._asmNavigationService.onAppearanceChanged.next(this.appearance);
    }

    get appearance(): 'basic' | 'bar' | 'fullscreen'
    {
        return this._appearance;
    }

}

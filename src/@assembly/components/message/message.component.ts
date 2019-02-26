import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'asm-message',
    templateUrl    : './message.component.html',
    styleUrls      : ['./message.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'asmMessage'
})
export class AsmMessageComponent
{
    // Private
    private _appearance: 'solid' | 'outline';
    private _showIcon: boolean;
    private _type: 'basic' | 'primary' | 'accent' | 'warn' | 'error' | 'info' | 'success' | 'warning';
    private _customIcon: boolean;

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer2
     */
    constructor(
        private _elementRef: ElementRef,
        private _renderer2: Renderer2
    )
    {
        // Set the defaults
        this.appearance = 'solid';
        this.showIcon = true;
        this.type = 'primary';
        this._customIcon = false;
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
    set appearance(value: 'solid' | 'outline')
    {
        // Update the class name
        this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-message-appearance-' + this.appearance);
        this._renderer2.addClass(this._elementRef.nativeElement, 'asm-message-appearance-' + value);

        // Store the value
        this._appearance = value;
    }

    get appearance(): 'solid' | 'outline'
    {
        return this._appearance;
    }

    /**
     * Setter and getter for appearance
     *
     * @param value
     */
    @Input()
    set showIcon(value: boolean)
    {
        // Update the class name
        if ( value )
        {
            this._renderer2.addClass(this._elementRef.nativeElement, 'asm-message-show-icon' + this.appearance);
        }
        {
            this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-message-show-icon' + this.appearance);
        }

        // Store the value
        this._showIcon = value;
    }

    get showIcon(): boolean
    {
        return this._showIcon;
    }

    /**
     * Setter and getter for type
     *
     * @param value
     */
    @Input()
    set type(value: 'basic' | 'primary' | 'accent' | 'warn' | 'error' | 'info' | 'success' | 'warning')
    {
        // Update the class name
        this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-message-type-' + this.type);
        this._renderer2.addClass(this._elementRef.nativeElement, 'asm-message-type-' + value);

        // Store the value
        this._type = value;
    }

    get type(): 'basic' | 'primary' | 'accent' | 'warn' | 'error' | 'info' | 'success' | 'warning'
    {
        return this._type;
    }

    /**
     * Setter and getter for custom icon
     *
     * @param value
     */
    @Input()
    set customIcon(value: boolean)
    {
        // Store the value
        this._customIcon = value;
    }

    get customIcon(): boolean
    {
        return this._customIcon;
    }

}

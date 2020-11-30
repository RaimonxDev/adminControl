import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
    selector: 'textarea[treoAutogrow]',
    exportAs: 'treoAutogrow'
})
export class TreoAutogrowDirective implements OnChanges, OnInit, OnDestroy
{
    // Public
    // tslint:disable-next-line:no-input-rename
    @Input('treoAutogrowVerticalPadding') padding = 8;

    // Private
    private _height = 'auto';
    @HostBinding('rows') private _rows = 1;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     */
    constructor(private _elementRef: ElementRef)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component inline styles
     */
    @HostBinding('style') get styleList(): any
    {
        return {
            'height'  : this._height,
            'overflow': 'hidden',
            'resize'  : 'none'
        };
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
        // Padding
        if ( 'treoAutogrowVerticalPadding' in changes )
        {
            // Resize
            setTimeout(() => {
                this._resize();
            });
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Resize for the first time
        setTimeout(() => {
            this._resize();
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

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resize on 'input' and 'ngModelChange' events
     *
     * @private
     */
    @HostListener('input')
    @HostListener('ngModelChange')
    private _resize(): void
    {
        // Set the height to 'auto' so we can correctly read the scrollHeight
        this._height = 'auto';

        // Get the scrollHeight and subtract the vertical padding
        this._height = `${this._elementRef.nativeElement.scrollHeight - this.padding}px`;
    }
}

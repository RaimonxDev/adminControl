import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
    selector: 'textarea[treoAutogrow]',
    exportAs: 'treoAutogrow'
})
export class TreoAutogrowDirective implements OnChanges, OnInit, OnDestroy
{
    // tslint:disable-next-line:no-input-rename
    @Input('treoAutogrowVerticalPadding') padding = 8;
    @HostBinding('rows') rows = 1;

    // Private
    private _height = 'auto';
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
     * Host binding for inline styles
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

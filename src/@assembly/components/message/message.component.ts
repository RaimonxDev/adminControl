import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AsmAnimations } from '@assembly/animations/public-api';
import { AsmMessageAppearance, AsmMessageType } from '@assembly/components/message/message.types';
import { AsmMessageService } from '@assembly/components/message/message.service';

@Component({
    selector       : 'asm-message',
    templateUrl    : './message.component.html',
    styleUrls      : ['./message.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations     : AsmAnimations,
    exportAs       : 'asmMessage'
})
export class AsmMessageComponent implements OnInit, OnDestroy
{
    // Name
    @Input()
    name: string;

    // Private
    private _appearance: AsmMessageAppearance;
    private _dismissed: null | boolean;
    private _showIcon: boolean;
    private _type: AsmMessageType;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmMessageService} _asmMessageService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer2
     */
    constructor(
        private _asmMessageService: AsmMessageService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _elementRef: ElementRef,
        private _renderer2: Renderer2
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.appearance = 'fill';
        this.dismissed = null;
        this.showIcon = true;
        this.type = 'primary';
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
    set appearance(value: AsmMessageAppearance)
    {
        // If the value is the same, return...
        if ( this._appearance === value )
        {
            return;
        }

        // Update the class name
        this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-message-appearance-' + this.appearance);
        this._renderer2.addClass(this._elementRef.nativeElement, 'asm-message-appearance-' + value);

        // Store the value
        this._appearance = value;
    }

    get appearance(): AsmMessageAppearance
    {
        return this._appearance;
    }

    /**
     * Setter and getter for dismissed
     *
     * @param value
     */
    @Input()
    set dismissed(value: null | boolean)
    {
        // If the value is the same, return...
        if ( this._dismissed === value )
        {
            return;
        }

        // Update the class name
        if ( value === null )
        {
            this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-message-dismissible');
        }
        else if ( value === false )
        {
            this._renderer2.addClass(this._elementRef.nativeElement, 'asm-message-dismissible');
            this._renderer2.addClass(this._elementRef.nativeElement, 'asm-message-dismissed');
        }
        else
        {
            this._renderer2.addClass(this._elementRef.nativeElement, 'asm-message-dismissible');
            this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-message-dismissed');
        }

        // Store the value
        this._dismissed = value;
    }

    get dismissed(): null | boolean
    {
        return this._dismissed;
    }

    /**
     * Setter and getter for show icon
     *
     * @param value
     */
    @Input()
    set showIcon(value: boolean)
    {
        // If the value is the same, return...
        if ( this._showIcon === value )
        {
            return;
        }

        // Update the class name
        if ( value )
        {
            this._renderer2.addClass(this._elementRef.nativeElement, 'asm-message-show-icon');
        }
        else
        {
            this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-message-show-icon');
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
    set type(value: AsmMessageType)
    {
        // If the value is the same, return...
        if ( this._type === value )
        {
            return;
        }

        // Update the class name
        this._renderer2.removeClass(this._elementRef.nativeElement, 'asm-message-type-' + this.type);
        this._renderer2.addClass(this._elementRef.nativeElement, 'asm-message-type-' + value);

        // Store the value
        this._type = value;
    }

    get type(): AsmMessageType
    {
        return this._type;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the service calls if only
        // a name provided for the message box
        if ( this.name )
        {
            // Subscribe to the dismiss calls
            this._asmMessageService.onDismiss
                .pipe(
                    filter((name) => this.name === name),
                    takeUntil(this._unsubscribeAll)
                )
                .subscribe(() => {

                    // Dismiss the message box
                    this.dismiss();
                });

            // Subscribe to the show calls
            this._asmMessageService.onShow
                .pipe(
                    filter((name) => this.name === name),
                    takeUntil(this._unsubscribeAll)
                )
                .subscribe(() => {

                    // Show the message box
                    this.show();
                });
        }
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
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss the message box
     */
    dismiss(): void
    {
        // Return, if already dismissed
        if ( this.dismissed )
        {
            return;
        }

        // Dismiss
        this.dismissed = true;

        // Notify the change detector
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Show the dismissed message box
     */
    show(): void
    {
        // Return, if not dismissed
        if ( !this.dismissed )
        {
            return;
        }

        // Show
        this.dismissed = false;

        // Notify the change detector
        this._changeDetectorRef.markForCheck();
    }
}

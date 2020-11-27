import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { TreoAnimations } from '@treo/animations';
import { TreoAlertAppearance, TreoAlertType } from '@treo/components/alert/alert.types';
import { TreoAlertService } from '@treo/components/alert/alert.service';
import { TreoUtilsService } from '@treo/services/utils/utils.service';

@Component({
    selector       : 'treo-alert',
    templateUrl    : './alert.component.html',
    styleUrls      : ['./alert.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations     : TreoAnimations,
    exportAs       : 'treoAlert'
})
export class TreoAlertComponent implements OnChanges, OnInit, OnDestroy
{
    @Input() appearance: TreoAlertAppearance = 'soft';
    @Input() dismissible = false;
    @Input() dismissed = false;
    @Input() name: string = this._treoUtilsService.randomId();
    @Input() showIcon = true;
    @Input() type: TreoAlertType = 'primary';
    @Output() readonly dismissedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    // Private
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {TreoAlertService} _treoAlertService
     * @param {TreoUtilsService} _treoUtilsService
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _treoAlertService: TreoAlertService,
        private _treoUtilsService: TreoUtilsService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for classes
     */
    @HostBinding('class') get classList(): any
    {
        return {
            [`treo-alert-appearance-${this.appearance}`]: true,
            'treo-alert-dismissed'                      : this.dismissed,
            'treo-alert-dismissible'                    : this.dismissible,
            'treo-alert-show-icon'                      : this.showIcon,
            [`treo-alert-type-${this.type}`]            : true
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
        // Dismissible
        if ( 'dismissible' in changes )
        {
            // Interpret empty string as 'true'
            this.dismissible = changes.dismissible.currentValue === '' ? true : changes.dismissible.currentValue;
        }

        // Dismissed
        if ( 'dismissed' in changes )
        {
            // Interpret empty string as 'true'
            this.dismissed = changes.dismissed.currentValue === '' ? true : changes.dismissed.currentValue;

            // Dismiss/show the alert
            this._toggleDismiss(this.dismissed);
        }

        // Show icon
        if ( 'showIcon' in changes )
        {
            // Interpret empty string as 'true'
            this.showIcon = changes.showIcon.currentValue === '' ? true : changes.showIcon.currentValue;
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the dismiss calls
        this._treoAlertService.onDismiss
            .pipe(
                filter((name) => this.name === name),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {

                // Dismiss the alert
                this.dismiss();
            });

        // Subscribe to the show calls
        this._treoAlertService.onShow
            .pipe(
                filter((name) => this.name === name),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {

                // Show the alert
                this.show();
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
     * Dismiss/show the alert
     *
     * @param dismissed
     * @private
     */
    private _toggleDismiss(dismissed: boolean): void
    {
        // Return if the alert is not dismissible
        if ( !this.dismissible )
        {
            return;
        }

        // Set the dismissed
        this.dismissed = dismissed;

        // Execute the observable
        this.dismissedChanged.next(this.dismissed);

        // Notify the change detector
        this._changeDetectorRef.markForCheck();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss the alert
     */
    dismiss(): void
    {
        // Return if the alert is already dismissed
        if ( this.dismissed )
        {
            return;
        }

        // Dismiss the alert
        this._toggleDismiss(true);
    }

    /**
     * Show the dismissed alert
     */
    show(): void
    {
        // Return if the alert is already showing
        if ( !this.dismissed )
        {
            return;
        }

        // Show the alert
        this._toggleDismiss(false);
    }
}

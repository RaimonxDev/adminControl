import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { TreoAnimations } from '@treo/animations';
import { TreoNavigationItem } from '@treo/components/navigation/navigation.types';
import { TreoNavigationService } from '@treo/components/navigation/navigation.service';
import { TreoUtilsService } from '@treo/services/utils/utils.service';

@Component({
    selector       : 'treo-horizontal-navigation',
    templateUrl    : './horizontal.component.html',
    styleUrls      : ['./horizontal.component.scss'],
    animations     : TreoAnimations,
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'treoHorizontalNavigation'
})
export class TreoHorizontalNavigationComponent implements OnChanges, OnInit, OnDestroy
{
    // Public
    @Input() name: string = this._treoUtilsService.randomId();
    @Input() navigation: TreoNavigationItem[] = [];
    onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

    // Private
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {TreoNavigationService} _treoNavigationService
     * @param {TreoUtilsService} _treoUtilsService
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _treoNavigationService: TreoNavigationService,
        private _treoUtilsService: TreoUtilsService
    )
    {
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
        // Navigation
        if ( 'navigation' in changes )
        {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Register the navigation component
        this._treoNavigationService.registerComponent(this.name, this);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Deregister the navigation component from the registry
        this._treoNavigationService.deregisterComponent(this.name);

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Refresh the component to apply the changes
     */
    refresh(): void
    {
        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this.onRefreshed.next(true);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}

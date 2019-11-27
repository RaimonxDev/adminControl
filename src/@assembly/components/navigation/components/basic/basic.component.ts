import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AsmNavigationItem } from '@assembly/components/navigation/navigation.type';
import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
    selector       : 'asm-navigation-basic-item',
    templateUrl    : './basic.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmNavigationBasicItemComponent implements OnInit, OnDestroy
{
    showTooltips: boolean;

    // Item
    @Input()
    item: AsmNavigationItem;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmNavigationService} _asmNavigationService
     * @param {ChangeDetectorRef} _changeDetectorRef
     */
    constructor(
        private _asmNavigationService: AsmNavigationService,
        private _changeDetectorRef: ChangeDetectorRef
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to item changes
        merge(
            this._asmNavigationService.onItemAdded,
            this._asmNavigationService.onItemUpdated,
            this._asmNavigationService.onItemDeleted
        ).pipe(
            takeUntil(this._unsubscribeAll),
            // Only react if the changed item equals to this item
            filter((item) => item && this.item.id === item.id)
        ).subscribe(() => {

            // Apply the changes
            this._changeDetectorRef.markForCheck();
        });

        // Get the showTooltips option
        this.showTooltips = this._asmNavigationService.showTooltips;
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
}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AsmNavigationItem } from '@assembly/components/navigation/navigation.type';
import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';

@Component({
    selector       : 'asm-navigation-subheader-item',
    templateUrl    : './subheader.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmNavigationSubheaderItemComponent implements OnInit, OnDestroy
{
    // Item
    @Input()
    item: AsmNavigationItem;

    // Name
    @Input()
    name: string;

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
        // Subscribe to onRefresh
        this._asmNavigationService.onRefresh.pipe(
            takeUntil(this._unsubscribeAll),
            filter((name) => name && this.name === name)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
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
}

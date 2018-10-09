import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AsmMenuService } from '@assembly/components/menu/menu.service';

@Component({
    selector       : 'asm-menu-vertical-group-item',
    templateUrl    : './group.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmMenuVerticalGroupItemComponent implements OnInit, OnDestroy
{
    // Item
    @Input()
    item: any;

    // Auto collapse
    @Input()
    autoCollapse: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmMenuService} _asmMenuService
     * @param {ChangeDetectorRef} _changeDetectorRef
     */
    constructor(
        private _asmMenuService: AsmMenuService,
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
        // Subscribe to menu item updates
        this._asmMenuService.onMenuItemUpdated
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

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

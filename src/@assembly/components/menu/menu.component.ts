import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AsmMenuService } from '@assembly/components/menu/menu.service';

@Component({
    selector       : 'asm-menu',
    templateUrl    : './menu.component.html',
    styleUrls      : ['./menu.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmMenuComponent implements OnInit, OnDestroy
{
    // Auto collapse
    @Input()
    autoCollapse: boolean;

    // Data
    @Input()
    data: any[];

    // Type
    @Input()
    type: 'horizontal' | 'vertical';

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmMenuComponent} _asmMenuService
     * @param {ChangeDetectorRef} _changeDetectorRef
     */
    constructor(
        private _asmMenuService: AsmMenuService,
        private _changeDetectorRef: ChangeDetectorRef
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.autoCollapse = true;
        this.type = 'vertical';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Load the menu either from the input or from the service
        this.data = this.data || this._asmMenuService.getCurrentMenu();

        // Subscribe to the current menu changes
        this._asmMenuService.onMenuChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

                // Load the menu
                this.data = this._asmMenuService.getCurrentMenu();

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

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

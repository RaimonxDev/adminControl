import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AsmMenuService } from '@assembly/components/menu/menu.service';

@Component({
    selector     : 'asm-menu',
    templateUrl  : './menu.component.html',
    styleUrls    : ['./menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AsmMenuComponent implements OnInit
{
    // Data
    @Input()
    data: any[];

    // Type
    @Input()
    type: 'horizontal' | 'vertical';

    // Auto collapse
    @Input()
    autoCollapse: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     */
    constructor(
        private _asmMenuService: AsmMenuService
    )
    {
        // Set the defaults
        this.type = 'vertical';
        this.autoCollapse = true;

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
        // Load the menu either from the input or from the service
        this.data = this.data || this._asmMenuService.getCurrentMenu();

        // Subscribe to the current menu changes
        this._asmMenuService.onMenuChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.data = this._asmMenuService.getCurrentMenu();
            });
    }
}

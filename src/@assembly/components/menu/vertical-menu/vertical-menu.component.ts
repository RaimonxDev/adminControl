import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AsmVerticalMenuService } from '@assembly/components/menu/vertical-menu/vertical-menu.service';
import { AsmVerticalMenu } from '@assembly/components/menu/vertical-menu/vertical-menu.type';

@Component({
    selector       : 'asm-vertical-menu',
    templateUrl    : './vertical-menu.component.html',
    styleUrls      : ['./vertical-menu.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'asmVerticalMenu'
})
export class AsmVerticalMenuComponent implements OnInit
{
    // Auto collapse
    @Input()
    autoCollapse: boolean;

    // Data
    @Input()
    data: AsmVerticalMenu[];

    /**
     * Constructor
     *
     * @param {AsmVerticalMenuService} _asmVerticalMenuService
     */
    constructor(
        private _asmVerticalMenuService: AsmVerticalMenuService
    )
    {
        // Set the defaults
        this.autoCollapse = true;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Store options on the service
        this._asmVerticalMenuService.autoCollapse = this.autoCollapse;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackById(index, item): number
    {
        return item.id || index;
    }
}

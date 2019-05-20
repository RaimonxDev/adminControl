import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AsmNavigationItem } from '@assembly/components/navigation/navigation.type';
import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';

@Component({
    selector       : 'asm-navigation-aside-item',
    templateUrl    : './aside.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmNavigationAsideItemComponent implements OnInit
{
    showTooltips: boolean;

    // Active
    @Input()
    active: boolean;

    // Item
    @Input()
    item: AsmNavigationItem;

    // Skip children
    @Input()
    skipChildren: boolean;

    /**
     * Constructor
     *
     * @param {AsmNavigationService} _asmNavigationService
     */
    constructor(
        private _asmNavigationService: AsmNavigationService
    )
    {
        // Set the defaults
        this.skipChildren = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the showTooltips option
        this.showTooltips = this._asmNavigationService.showTooltips;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param item
     * @param index
     */
    trackById(item, index): number
    {
        return index;
    }
}

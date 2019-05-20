import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AsmNavigationItem } from '@assembly/components/navigation/navigation.type';
import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';

@Component({
    selector       : 'asm-navigation-basic-item',
    templateUrl    : './basic.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmNavigationBasicItemComponent implements OnInit
{
    showTooltips: boolean;

    // Item
    @Input()
    item: AsmNavigationItem;

    /**
     * Constructor
     *
     * @param {AsmNavigationService} _asmNavigationService
     */
    constructor(
        private _asmNavigationService: AsmNavigationService
    )
    {
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
}

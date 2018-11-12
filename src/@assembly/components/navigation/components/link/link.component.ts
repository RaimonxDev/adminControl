import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';

@Component({
    selector       : 'asm-navigation-link-item',
    templateUrl    : './link.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmNavigationLinkItemComponent implements OnInit
{
    showTooltips: boolean;

    // Item
    @Input()
    item: any;

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

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector       : 'asm-navigation-subheader-item',
    templateUrl    : './subheader.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmNavigationSubheaderItemComponent
{
    // Item
    @Input()
    item: any;

    /**
     * Constructor
     *
     */
    constructor()
    {
    }
}

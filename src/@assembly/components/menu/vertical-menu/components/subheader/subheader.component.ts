import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector       : 'asm-vertical-menu-subheader-item',
    templateUrl    : './subheader.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmVerticalMenuSubheaderItemComponent
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

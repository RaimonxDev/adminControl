import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector       : 'asm-vertical-menu-divider-item',
    templateUrl    : './divider.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmVerticalMenuDividerItemComponent
{
    // Item
    @Input()
    item: any;

    /**
     * Constructor
     */
    constructor()
    {
    }
}

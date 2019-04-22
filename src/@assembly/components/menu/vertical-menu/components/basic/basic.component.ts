import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector       : 'asm-vertical-menu-basic-item',
    templateUrl    : './basic.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmVerticalMenuBasicItemComponent
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

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsmVerticalMenuItem } from '@assembly/components/menu/vertical-menu/vertical-menu.type';

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
    item: AsmVerticalMenuItem;

    /**
     * Constructor
     */
    constructor()
    {
    }
}

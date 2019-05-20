import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsmVerticalMenuItem } from '@assembly/components/menu/vertical-menu/vertical-menu.type';

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
    item: AsmVerticalMenuItem;

    /**
     * Constructor
     */
    constructor()
    {
    }
}

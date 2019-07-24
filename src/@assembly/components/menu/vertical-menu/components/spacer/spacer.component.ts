import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsmVerticalMenuItem } from '@assembly/components/menu/vertical-menu/vertical-menu.type';

@Component({
    selector       : 'asm-vertical-menu-spacer-item',
    templateUrl    : './spacer.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmVerticalMenuSpacerItemComponent
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

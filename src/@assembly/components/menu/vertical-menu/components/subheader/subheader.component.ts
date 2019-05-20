import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsmVerticalMenuItem } from '@assembly/components/menu/vertical-menu/vertical-menu.type';

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
    item: AsmVerticalMenuItem;

    /**
     * Constructor
     *
     */
    constructor()
    {
    }
}

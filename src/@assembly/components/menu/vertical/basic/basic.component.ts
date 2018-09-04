import { Component, Input } from '@angular/core';

@Component({
    selector   : 'asm-menu-vertical-basic-item',
    templateUrl: './basic.component.html',
    styles     : []
})
export class AsmMenuVerticalBasicItemComponent
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

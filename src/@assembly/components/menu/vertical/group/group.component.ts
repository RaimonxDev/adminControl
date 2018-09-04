import { Component, Input } from '@angular/core';

@Component({
    selector   : 'asm-menu-vertical-group-item',
    templateUrl: './group.component.html',
    styles     : []
})
export class AsmMenuVerticalGroupItemComponent
{
    // Item
    @Input()
    item: any;

    // Auto collapse
    @Input()
    autoCollapse: boolean;

    /**
     * Constructor
     */
    constructor()
    {
    }
}

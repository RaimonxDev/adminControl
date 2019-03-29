import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector       : 'asm-navigation-divider-item',
    templateUrl    : './divider.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmNavigationDividerItemComponent
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

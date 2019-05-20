import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsmNavigationItem } from '@assembly/components/navigation/navigation.type';

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
    item: AsmNavigationItem;

    /**
     * Constructor
     */
    constructor()
    {
    }
}

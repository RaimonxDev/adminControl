import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsmNavigationItem } from '@assembly';

@Component({
    selector       : 'asm-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmNavigationSpacerItemComponent
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

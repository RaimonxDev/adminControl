import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsmNavigationItem } from '@assembly/components/navigation/navigation.type';

@Component({
    selector       : 'asm-navigation-subheader-item',
    templateUrl    : './subheader.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmNavigationSubheaderItemComponent
{
    // Item
    @Input()
    item: AsmNavigationItem;

    /**
     * Constructor
     *
     */
    constructor()
    {
    }
}

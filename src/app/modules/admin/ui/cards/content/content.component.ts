import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'cards-content',
    templateUrl    : './content.component.html',
    styleUrls      : ['./content.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsContentComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }

}

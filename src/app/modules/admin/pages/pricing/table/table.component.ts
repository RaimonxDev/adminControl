import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'pricing-table',
    templateUrl    : './table.component.html',
    styleUrls      : ['./table.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingTableComponent
{
    yearlyBilling: boolean = true;

    /**
     * Constructor
     */
    constructor()
    {
    }
}

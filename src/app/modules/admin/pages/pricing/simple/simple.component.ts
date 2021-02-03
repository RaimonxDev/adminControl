import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'pricing-simple',
    templateUrl    : './simple.component.html',
    styleUrls      : ['./simple.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingSimpleComponent
{
    annualBilling: boolean = true;

    /**
     * Constructor
     */
    constructor()
    {
    }
}

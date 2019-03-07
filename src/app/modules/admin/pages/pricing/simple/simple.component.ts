import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector       : 'pricing-simple',
    templateUrl    : './simple.component.html',
    styleUrls      : ['./simple.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingSimpleComponent
{
    annualBilling: boolean;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.annualBilling = false;
    }
}

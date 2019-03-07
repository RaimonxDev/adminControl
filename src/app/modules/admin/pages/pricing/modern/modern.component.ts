import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector       : 'pricing-modern',
    templateUrl    : './modern.component.html',
    styleUrls      : ['./modern.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingModernComponent
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

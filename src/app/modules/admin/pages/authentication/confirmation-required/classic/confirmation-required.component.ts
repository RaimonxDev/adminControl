import { Component, ViewEncapsulation } from '@angular/core';
import { TreoAnimations } from '@treo/animations';

@Component({
    selector     : 'confirmation-required-classic',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : TreoAnimations
})
export class ConfirmationRequiredClassicComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

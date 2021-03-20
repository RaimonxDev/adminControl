import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreoAnimations } from '@treo/animations';

@Component({
    selector     : 'confirmation-required-fullscreen-reversed',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : TreoAnimations
})
export class ConfirmationRequiredFullscreenReversedComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

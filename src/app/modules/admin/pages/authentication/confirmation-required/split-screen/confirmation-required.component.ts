import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreoAnimations } from '@treo/animations';

@Component({
    selector     : 'confirmation-required-split-screen',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : TreoAnimations
})
export class ConfirmationRequiredSplitScreenComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

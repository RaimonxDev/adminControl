import { Component, ViewEncapsulation } from '@angular/core';
import { AsmAnimations } from '@assembly/animations';

@Component({
    selector     : 'landing',
    templateUrl  : './landing.component.html',
    styleUrls    : ['./landing.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : AsmAnimations
})
export class LandingComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

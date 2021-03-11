import { Component, ViewEncapsulation } from '@angular/core';
import { TreoAnimations } from '@treo/animations';

@Component({
    selector     : 'colors',
    templateUrl  : './colors.component.html',
    animations   : TreoAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ColorsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'form-layouts',
    templateUrl    : './form-layouts.component.html',
    styleUrls      : ['./form-layouts.component.scss'],
    encapsulation  : ViewEncapsulation.None
})
export class FormLayoutsComponent
{
    formFieldAppearance: 'standard' | 'fill' | 'outline';

    /**
     * Constructor
     */
    constructor()
    {
        // Set the default
        this.formFieldAppearance = 'fill';
    }

}

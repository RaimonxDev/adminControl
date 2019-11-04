import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'forms',
    templateUrl    : './forms.component.html',
    styleUrls      : ['./forms.component.scss'],
    encapsulation  : ViewEncapsulation.None
})
export class FormsComponent
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

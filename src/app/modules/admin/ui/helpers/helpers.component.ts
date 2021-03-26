import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector   : 'helpers',
    templateUrl: './helpers.component.html'
})
export class HelpersComponent
{
    formFieldHelpers: string[] = [''];

    /**
     * Constructor
     */
    constructor(private _formBuilder: FormBuilder)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the form field helpers as string
     */
    getFormFieldHelpersAsString(): string
    {
        return this.formFieldHelpers.join(' ');
    }
}

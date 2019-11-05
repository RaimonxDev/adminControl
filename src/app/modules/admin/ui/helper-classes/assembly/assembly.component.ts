import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector     : 'assembly-helper-classes',
    templateUrl  : './assembly.component.html',
    styleUrls    : ['./assembly.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AssemblyHelperClassesComponent implements OnInit
{
    demoForm: FormGroup;
    formFieldHelpers: string[];

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder
    )
    {
        // Set the default
        this.formFieldHelpers = [''];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the demo form
        this.demoForm = this._formBuilder.group({
            fieldInput : ['Demo value', [Validators.required]],
            fieldSelect: ['', [Validators.required]]
        });
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

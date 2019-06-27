import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector     : 'assembly-helper-classes',
    templateUrl  : './assembly-helper-classes.component.html',
    styleUrls    : ['./assembly-helper-classes.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AssemblyHelperClassesComponent implements OnInit
{
    demoForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder
    )
    {
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
}

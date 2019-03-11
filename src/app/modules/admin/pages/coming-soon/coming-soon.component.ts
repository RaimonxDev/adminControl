import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsmAnimations } from '@assembly';

@Component({
    selector     : 'coming-soon',
    templateUrl  : './coming-soon.component.html',
    styleUrls    : ['./coming-soon.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : AsmAnimations
})
export class ComingSoonComponent implements OnInit
{
    comingSoonForm: FormGroup;
    message: any;
    messageAnimationState: boolean;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.message = null;
        this.messageAnimationState = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.comingSoonForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }
}

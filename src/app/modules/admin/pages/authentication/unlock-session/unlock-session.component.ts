import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsmAnimations } from '@assembly';

@Component({
    selector     : 'auth-unlock-session',
    templateUrl  : './unlock-session.component.html',
    styleUrls    : ['./unlock-session.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : AsmAnimations
})
export class UnlockSessionComponent implements OnInit
{
    messageBox: any;
    messageBoxAnimationState: boolean;
    name: string;
    unlockSessionForm: FormGroup;

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
        this.messageBox = null;
        this.messageBoxAnimationState = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the user's name
        this.name = 'Andrew Watkins';

        // Create the form
        this.unlockSessionForm = this._formBuilder.group({
            name    : [
                {
                    value   : this.name,
                    disabled: true
                }
            ],
            password: ['', Validators.required]
        });
    }
}

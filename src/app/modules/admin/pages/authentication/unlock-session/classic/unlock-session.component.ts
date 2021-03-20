import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TreoAnimations } from '@treo/animations';
import { TreoAlertType } from '@treo/components/alert';

@Component({
    selector     : 'unlock-session-classic',
    templateUrl  : './unlock-session.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : TreoAnimations
})
export class UnlockSessionClassicComponent implements OnInit
{
    @ViewChild('unlockSessionNgForm') unlockSessionNgForm: NgForm;

    alert: { type: TreoAlertType, message: string } = {
        type   : 'success',
        message: ''
    };
    name: string = 'Andrew Watkins';
    showAlert: boolean = false;
    unlockSessionForm: FormGroup;

    /**
     * Constructor
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Unlock
     */
    unlock(): void
    {
    }
}

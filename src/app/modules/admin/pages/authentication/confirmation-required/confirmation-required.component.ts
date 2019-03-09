import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AsmAnimations } from '@assembly';

@Component({
    selector     : 'auth-confirmation-required',
    templateUrl  : './confirmation-required.component.html',
    styleUrls    : ['./confirmation-required.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : AsmAnimations
})
export class ConfirmationRequiredComponent implements OnInit
{
    email: string;

    /**
     * Constructor
     */
    constructor()
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
        // Get the user's email
        this.email = 'watkins.andrew@company.com';
    }
}

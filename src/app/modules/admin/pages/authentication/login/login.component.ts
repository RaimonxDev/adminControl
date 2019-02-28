import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsmAnimations } from '@assembly';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : AsmAnimations
})
export class LoginComponent implements OnInit
{
    loginForm: FormGroup;
    messageBox: any;
    messageBoxAnimationState: boolean;

    /**
     * Constructor
     *
     * @param {AuthService} _authService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _authService: AuthService,
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
        // Create the form
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsmAnimations } from '@assembly';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector   : 'auth-unlock-session',
    templateUrl: './unlock-session.component.html',
    styleUrls  : ['./unlock-session.component.scss'],
    animations : AsmAnimations
})
export class AuthUnlockSessionComponent implements OnInit
{
    messageBox: any;
    messageBoxAnimationState: boolean;
    name: string;
    unlockSessionForm: FormGroup;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {AuthService} _authService
     * @param {FormBuilder} _formBuilder
     * @param {Router} _router
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
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

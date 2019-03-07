import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsmAnimations } from '@assembly';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector   : 'auth-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss'],
    animations : AsmAnimations
})
export class AuthLoginComponent implements OnInit
{
    loginForm: FormGroup;
    messageBox: any;
    messageBoxAnimationState: boolean;

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
        // Create the form
        this.loginForm = this._formBuilder.group({
            email   : ['watkins.andrew@company.com', [Validators.required, Validators.email]],
            password: ['admin', Validators.required]
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Login
     */
    login(): void
    {
        // Disable the form
        this.loginForm.disable();

        // Hide the message box
        this.messageBox = null;

        // Get the credentials
        const credentials = this.loginForm.value;

        // Login
        this._authService.login(credentials)
            .subscribe(() => {

                // Set the redirect url
                const redirectURL = this._activatedRoute.snapshot.queryParams['redirectURL'] || '/';

                // Navigate to the redirect url
                this._router.navigateByUrl(redirectURL);

            }, (response) => {

                // Re-enable the form
                this.loginForm.enable();

                // Show the error message
                this.messageBox = {
                    message: response.error,
                    type   : 'error'
                };
            });
    }
}

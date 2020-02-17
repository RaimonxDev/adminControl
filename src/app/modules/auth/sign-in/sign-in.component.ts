import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AsmAnimations } from '@assembly/animations';
import { AuthService } from 'app/core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    styleUrls    : ['./sign-in.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : AsmAnimations
})
export class AuthSignInComponent implements OnInit
{
    signInForm: FormGroup;
    message: any;

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
        this.message = null;
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
        this.signInForm = this._formBuilder.group({
            email   : ['watkins.andrew@company.com'],
            password: ['admin']
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void
    {
        // Disable the form
        this.signInForm.disable();

        // Hide the message
        this.message = null;

        // Get the credentials
        const credentials = this.signInForm.value;

        // Sign in
        this._authService.signIn(credentials)
            .subscribe(() => {

                // Set the redirect url
                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/';

                // Navigate to the redirect url
                this._router.navigateByUrl(redirectURL);

            }, (response) => {

                // Re-enable the form
                this.signInForm.enable();

                // Show the error message
                this.message = {
                    content : response.error,
                    shake   : true,
                    showIcon: false,
                    type    : 'error'
                };
            });
    }
}

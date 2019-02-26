import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit
{
    loginForm: FormGroup;
    errorMessage: string | null;

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
        this.errorMessage = null;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
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
        // Get the credentials
        const credentials = this.loginForm.value;

        // Login
        this._authService.login(credentials)
            .subscribe(() => {

                // Set the redirect url
                const redirectURL = this._activatedRoute.snapshot.queryParams['redirectURL'] || '/';

                // If the redirect url parameter exits...
                if ( redirectURL )
                {
                    // navigate to it
                    this._router.navigateByUrl(redirectURL);
                }

            }, (response) => {

                // Set an error on the login form
                this.loginForm.setErrors({error: response.error});

                // Set the error message
                this.errorMessage = response.error;

                console.log(response);
            });
    }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AsmAnimations } from '@assembly';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : AsmAnimations
})
export class LoginComponent implements OnInit
{
    cardStyle: string;
    loginForm: FormGroup;
    message: any;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {FormBuilder} _formBuilder
     * @param {Router} _router
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
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
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        // Set the card style for the first time
        this._setCardStyle();

        // Register to the NavigationEnd event
        this._router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {

                // Set the card style
                this._setCardStyle();
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the card style from the url
     * Demonstration purposes only!
     *
     * @private
     */
    private _setCardStyle(): void
    {
        // Get the current route
        let route = this._activatedRoute;
        while ( route.firstChild )
        {
            route = route.firstChild;
        }

        // Set the card style from the path
        this.cardStyle = route.snapshot.url[0].path;
    }
}

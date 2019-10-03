import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AsmAnimations, AsmValidators } from '@assembly';

@Component({
    selector     : 'signup',
    templateUrl  : './signup.component.html',
    styleUrls    : ['./signup.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : AsmAnimations
})
export class SignupComponent implements OnInit, OnDestroy
{
    cardStyle: string;
    message: any;
    signupForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

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

        // Set the private defaults
        this._unsubscribeAll = new Subject();
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
        this.signupForm = this._formBuilder.group({
            name           : ['', Validators.required],
            email          : ['', [Validators.required, Validators.email]],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, AsmValidators.confirmPassword()]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.signupForm.get('password').valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.signupForm.get('passwordConfirm').updateValueAndValidity();
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

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
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

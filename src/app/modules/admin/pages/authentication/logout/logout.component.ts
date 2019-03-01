import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { AuthService } from 'app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector     : 'auth-logout',
    templateUrl  : './logout.component.html',
    styleUrls    : ['./logout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit, OnDestroy
{
    countdown: number;
    countdownMapping: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AuthService} _authService
     * @param {Router} _router
     */
    constructor(
        private _authService: AuthService,
        private _router: Router
    )
    {
        // Set the private default
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.countdown = 5;
        this.countdownMapping = {
            '=1'   : '# second',
            'other': '# seconds'
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the duration
        const duration = this.countdown;

        // Redirect after the countdown
        interval(1000)
            .pipe(
                take(duration),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    this.countdown--;
                },
                () => {
                },
                () => {
                }
            );
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
}

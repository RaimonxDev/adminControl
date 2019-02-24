import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector   : 'logout',
    templateUrl: './logout.component.html',
    styleUrls  : ['./logout.component.scss']
})
export class LogoutComponent implements OnInit
{
    countdown: number;
    countdownMapping: any;

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
        // Set the defaults
        this.countdown = 3;
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
        // Logout
        this._authService.logout();

        // Get the duration
        const duration = this.countdown;

        // Redirect after the countdown
        interval(1000)
            .pipe(take(duration))
            .subscribe({
                next    : () => {
                    this.countdown--;
                },
                complete: () => {
                    this._router.navigate(['login']);
                }
            });
    }
}

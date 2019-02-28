import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector     : 'logout',
    templateUrl  : './logout.component.html',
    styleUrls    : ['./logout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit
{
    countdown: number;
    countdownMapping: any;

    /**
     * Constructor
     *
     */
    constructor()
    {
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
            .pipe(take(duration))
            .subscribe(() => {
                    this.countdown--;
                },
                () => {
                },
                () => {
                }
            );
    }
}

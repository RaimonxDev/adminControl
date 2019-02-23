import { ChangeDetectorRef, NgZone, OnDestroy, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeAgo',
    pure: false
})
export class AsmTimeAgoPipe implements PipeTransform, OnDestroy
{
    private timer: number;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _ngZone: NgZone
    )
    {
    }

    transform(value: string): string
    {
        this._deleteTimer();
        const d = new Date(value);
        const now = new Date();
        const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        const timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this._getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this._ngZone.runOutsideAngular(() => {
            if ( typeof window !== 'undefined' )
            {
                return window.setTimeout(() => {
                    this._ngZone.run(() => this._changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
        const minutes = Math.round(Math.abs(seconds / 60));
        const hours = Math.round(Math.abs(minutes / 60));
        const days = Math.round(Math.abs(hours / 24));
        const months = Math.round(Math.abs(days / 30.416));
        const years = Math.round(Math.abs(days / 365));

        if ( Number.isNaN(seconds) )
        {
            return '';
        }
        else if ( seconds <= 45 )
        {
            return 'a few seconds ago';
        }
        else if ( seconds <= 90 )
        {
            return 'a minute ago';
        }
        else if ( minutes <= 45 )
        {
            return minutes + ' minutes ago';
        }
        else if ( minutes <= 90 )
        {
            return 'an hour ago';
        }
        else if ( hours <= 22 )
        {
            return hours + ' hours ago';
        }
        else if ( hours <= 36 )
        {
            return 'a day ago';
        }
        else if ( days <= 25 )
        {
            return days + ' days ago';
        }
        else if ( days <= 45 )
        {
            return 'a month ago';
        }
        else if ( days <= 345 )
        {
            return months + ' months ago';
        }
        else if ( days <= 545 )
        {
            return 'a year ago';
        }
        // (days > 545)
        else
        {
            return years + ' years ago';
        }
    }

    ngOnDestroy(): void
    {
        this._deleteTimer();
    }

    private _deleteTimer(): void
    {
        if ( this.timer )
        {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }

    private _getSecondsUntilUpdate(seconds: number): number
    {
        const min = 60;
        const hr = min * 60;
        const day = hr * 24;

        // less than 1 min, update every 2 secs
        if ( seconds < min )
        {
            return 2;
        }
        // less than an hour, update every 30 secs
        else if ( seconds < hr )
        {
            return 30;
        }
        // less then a day, update every 5 mins
        else if ( seconds < day )
        {
            return 300;
        }
        // update every hour
        else
        {
            return 3600;
        }
    }
}

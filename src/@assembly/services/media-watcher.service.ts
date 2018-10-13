import { Injectable, NgZone } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AsmMediaWatcherService
{
    private _mqlMap: Map<string, MediaQueryList>;
    private _onMediaChangeSubject: BehaviorSubject<string>;

    private readonly _rules: any = [
        // Base rules
        {
            alias: 'xs',
            query: '(min-width: 0px) and (max-width: 599px)',
            base : true
        },
        {
            alias: 'sm',
            query: '(min-width: 600px) and (max-width: 959px)',
            base : true
        },
        {
            alias: 'md',
            query: '(min-width: 960px) and (max-width: 1279px)',
            base : true
        },
        {
            alias: 'lg',
            query: '(min-width: 1280px) and (max-width: 1919px)',
            base : true
        },
        {
            alias: 'xl',
            query: '(min-width: 1920px) and (max-width: 5000px)',
            base : true
        },
        // Extended rules
        {
            alias   : 'lt-sm',
            query   : '(max-width: 599px)',
            extended: true
        },
        {
            alias     : 'lt-md',
            query: '(max-width: 959px)',
            extended  : true
        },
        {
            alias     : 'lt-lg',
            query: '(max-width: 1279px)',
            extended  : true
        },
        {
            alias   : 'lt-xl',
            query   : '(max-width: 1919px)',
            extended: true
        },
        {
            alias   : 'gt-xs',
            query   : '(min-width: 600px)',
            extended: true
        },
        {
            alias   : 'gt-sm',
            query   : '(min-width: 960px)',
            extended: true
        },
        {
            alias   : 'gt-md',
            query   : '(min-width: 1280px)',
            extended: true
        },

        {
            alias   : 'gt-lg',
            query   : '(min-width: 1920px)',
            extended: true
        }
    ];

    /**
     * Constructor
     *
     * @param {MediaMatcher} _mediaMatcher
     * @param {NgZone} _ngZone
     */
    constructor(
        private _mediaMatcher: MediaMatcher,
        private _ngZone: NgZone
    )
    {
        // Set the defaults
        this._onMediaChangeSubject = new BehaviorSubject<string>('');

        // Initialize
        this._init();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * OnMediaChange subscribable
     */
    get onMediaChange(): Observable<any>
    {
        return this._onMediaChangeSubject.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */
    private _init(): void
    {
        // Prepare the mqlMap
        this._mqlMap = new Map<string, MediaQueryList>();

        // Loop through all the rules
        this._rules.forEach((rule) => {

            // If the mql already exists in the map, skip it...
            if ( this._mqlMap.get[rule.alias] )
            {
                return;
            }

            // Create a MediaQueryList object for the rule
            const mql = this._mediaMatcher.matchMedia(rule.query);

            // Set a new entry to the mqlMap
            this._mqlMap.set(rule.alias, mql);

            // Add a listener to that MediaQueryList
            mql.addListener((event) => {

                // If it's a base rule and matches, execute the observable
                if ( event.matches && rule.base )
                {
                    this._ngZone.run(() => {
                        this._onMediaChangeSubject.next(rule.alias);
                    });
                }
            });

            // If the breakpoint is active, trigger
            // the observable for the first time
            if ( mql.matches && rule.base )
            {
                // Execute the observable
                this._ngZone.run(() => {
                    this._onMediaChangeSubject.next(rule.alias);
                });
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check if the given alias is active
     *
     * @param alias
     * @return {boolean}
     */
    isActive(alias): boolean
    {
        return this._mqlMap.get(alias).matches;
    }
}

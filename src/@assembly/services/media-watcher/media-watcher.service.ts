import { Injectable, NgZone } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class AsmMediaWatcherService
{
    private _mqlMap: Map<string, MediaQueryList>;
    private _onMediaChange: BehaviorSubject<string[] | null>;

    private readonly _baseRules: string[];
    private readonly _extendedRules: string[];
    private readonly _rules: any[];

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
        this._baseRules = ['xs', 'sm', 'md', 'lg', 'xl'];
        this._extendedRules = ['lt-sm', 'lt-md', 'lt-lg', 'lt-xl', 'gt-xs', 'gt-sm', 'gt-md', 'gt-lg'];
        this._onMediaChange = new BehaviorSubject(null);
        this._rules = [
            // Base rules
            {
                alias: 'xs',
                query: '(min-width: 0px) and (max-width: 599px)'
            },
            {
                alias: 'sm',
                query: '(min-width: 600px) and (max-width: 959px)'
            },
            {
                alias: 'md',
                query: '(min-width: 960px) and (max-width: 1279px)'
            },
            {
                alias: 'lg',
                query: '(min-width: 1280px) and (max-width: 1919px)'
            },
            {
                alias: 'xl',
                query: '(min-width: 1920px) and (max-width: 5000px)'
            },
            // Extended rules
            {
                alias: 'lt-sm',
                query: '(max-width: 599px)'
            },
            {
                alias: 'lt-md',
                query: '(max-width: 959px)'
            },
            {
                alias: 'lt-lg',
                query: '(max-width: 1279px)'
            },
            {
                alias: 'lt-xl',
                query: '(max-width: 1919px)'
            },
            {
                alias: 'gt-xs',
                query: '(min-width: 600px)'
            },
            {
                alias: 'gt-sm',
                query: '(min-width: 960px)'
            },
            {
                alias: 'gt-md',
                query: '(min-width: 1280px)'
            },
            {
                alias: 'gt-lg',
                query: '(min-width: 1920px)'
            }
        ];

        // Initialize
        this._init();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for _onMediaChange
     */
    get onMediaChange$(): Observable<string[]>
    {
        return this._onMediaChange.asObservable();
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

        // Create MediaQueryLists from the rules and store them in the map
        this._rules.forEach((rule) => {

            // Create a new MediaQueryList for the rule
            const mql = this._mediaMatcher.matchMedia(rule.query);

            // Add the MediaQueryList to the map
            this._mqlMap.set(rule.alias, mql);
        });

        // Iterate through the MediaQueryList map for the base rules
        this._mqlMap.forEach((mql, key) => {

            // Return if this is not a base rule
            if ( !this._baseRules.includes(key) )
            {
                return;
            }

            // Add an event listener to the MediaQueryList
            mql.addEventListener('change', (event) => {

                // If the rule doesn't match, return
                if ( !event.matches )
                {
                    return;
                }

                // Prepare the matching aliases array
                const matchingAliases = [];

                // Iterate through the entire MediaQueryList
                // map to find all the matching rules
                this._mqlMap.forEach((r, a) => {

                    // If the rule matches...
                    if ( r.matches )
                    {
                        // Add it to the matching aliases
                        matchingAliases.push(a);
                    }
                });

                // Execute the observable within the zone
                // to trigger change detection
                this._ngZone.run(() => {
                    this._onMediaChange.next(matchingAliases);
                });
            });

            // If the rule matches...
            if ( mql.matches )
            {
                const matchingAliases = [];

                // Iterate through the entire MediaQueryList
                // map to find the matching rules
                this._mqlMap.forEach((v, k) => {

                    // If the rule matches...
                    if ( v.matches )
                    {
                        // Add it to the matching aliases
                        matchingAliases.push(k);
                    }
                });

                // Execute the observable within the zone
                // to trigger change detection
                this._ngZone.run(() => {
                    this._onMediaChange.next(matchingAliases);
                });
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On media query change
     *
     * @param query
     */
    onMediaQueryChange$(query: string): Observable<boolean>
    {
        // Create a new MediaQueryList from the query
        const mql: MediaQueryList = this._mediaMatcher.matchMedia(query);

        // Create a behavior subject with the initial matches value
        const mediaQuerySubject: BehaviorSubject<boolean> = new BehaviorSubject(mql.matches);

        // Execute observable
        const executeObservable = (event: MediaQueryListEvent) => {
            mediaQuerySubject.next(event.matches);
        };

        // Add an event listener to the MediaQueryList
        mql.addEventListener('change', executeObservable);

        // Return the subject as observable
        return mediaQuerySubject.asObservable().pipe(
            // On finalize....
            finalize(() => {

                // Remove the event listener to prevent memory leaks
                mql.removeEventListener('change', executeObservable);
            })
        );
    }
}

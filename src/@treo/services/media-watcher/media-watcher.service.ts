import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable, ReplaySubject } from 'rxjs';
import { tailwindConfig } from '@treo/tailwind/config';

@Injectable()
export class TreoMediaWatcherService
{
    // Private
    private _onMediaChange: ReplaySubject<{ matchingAliases: string[], matchingQueries: any }> = new ReplaySubject<{ matchingAliases: string[], matchingQueries: any }>(1);

    /**
     * Constructor
     *
     * @param {BreakpointObserver} _breakpointObserver
     */
    constructor(
        private _breakpointObserver: BreakpointObserver
    )
    {
        // Initialize
        this._init();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for _onMediaChange
     */
    get onMediaChange$(): Observable<{ matchingAliases: string[], matchingQueries: any }>
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
        // Get the breakpoints
        const breakpoints: { [alias: string]: string } = tailwindConfig.breakpoints;

        // Subscribe to the breakpoint observer
        this._breakpointObserver.observe(Object.values(breakpoints))
            .subscribe((state) => {

                // Prepare the observable values and set their defaults
                const matchingAliases: string[] = [];
                const matchingQueries: any = {};

                // Get the matching breakpoints and use them to fill the subject
                const matchingBreakpoints = Object.entries(state.breakpoints).filter(([query, matches]) => matches) ?? [];
                for ( const [query] of matchingBreakpoints )
                {
                    // Find the alias of the matching query
                    const matchingAlias = Object.entries(breakpoints).find(([alias, q]) => q === query)?.[0];

                    // Add the matching query to the observable values
                    if ( matchingAlias )
                    {
                        matchingAliases.push(matchingAlias);
                        matchingQueries[matchingAlias] = query;
                    }
                }

                // Execute the observable
                this._onMediaChange.next({
                    matchingAliases,
                    matchingQueries
                });
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
    onMediaQueryChange$(query: string | string[]): Observable<BreakpointState>
    {
        return this._breakpointObserver.observe(query);
    }
}

import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';
import { AsmNavigationItem, AsmNavigationService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { defaultNavigation } from 'app/core/mock-api/navigation/data';

@Injectable({
    providedIn: 'root'
})
export class MockSearchResultsApi
{
    // Data
    private _defaultNavigation: AsmNavigationItem[] = defaultNavigation;

    /**
     * constructor
     */
    constructor(
        private _asmNavigationService: AsmNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @param mock
     */
    init(mock: MockAdapter): void
    {
        console.log(this._defaultNavigation);

        // Get the flat navigation and store it
        const flatNavigation = this._asmNavigationService.getFlatNavigation(this._defaultNavigation);

        // GET - Search results
        mock.onPost('api/search')
            .reply(mockWithAuth((config) => {

                // Get the search query
                const query = JSON.parse(config.data).query.toLowerCase();

                // Filter the results
                const results = flatNavigation.filter((item) => {
                    return (item.title.toLowerCase().includes(query) || (item.subtitle && item.subtitle.includes(query)));
                });

                return [200, {results}];
            }));
    }
}

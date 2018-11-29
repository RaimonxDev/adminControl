import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';
import * as _ from 'lodash';
import { AsmNavigationItem, AsmNavigationService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { contacts } from 'app/core/mock-api/contacts/data';
import { defaultNavigation } from 'app/core/mock-api/navigation/data';

@Injectable({
    providedIn: 'root'
})
export class MockSearchResultsApi
{
    // Data
    private _contacts: any[] = contacts;
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
        // Get the flat navigation and store it
        const flatNavigation = this._asmNavigationService.getFlatNavigation(this._defaultNavigation);

        // GET - Search results
        mock.onPost('api/search')
            .reply(mockWithAuth((config) => {

                // Get the search query
                const query = JSON.parse(config.data).query.toLowerCase();

                // If the search query is an empty string,
                // return an empty array
                if ( query === '' )
                {
                    return [200, {results: []}];
                }

                // Filter the navigation
                const navigationResults = _.cloneDeep(flatNavigation).filter((item) => {
                    return (item.title.toLowerCase().includes(query) || (item.subtitle && item.subtitle.includes(query)));
                });

                // Filter the contacts
                const contactsResults = _.cloneDeep(this._contacts).filter((user) => {
                    return (user.firstName.toLowerCase().includes(query) || user.lastName.toLowerCase().includes(query));
                });

                // Create the results array
                const results = [];

                // If there are navigation results...
                if ( navigationResults.length > 0 )
                {
                    // Normalize the results while marking the found chars
                    navigationResults.forEach((result) => {

                        // Normalize
                        result.hint = result.link;
                        result.resultType = 'page';

                        // Make the found chars bold
                        const re = new RegExp('(' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'ig');
                        result.title = result.title.replace(re, '<mark>$1</mark>');
                    });

                    // Add the results to the results object
                    results.push({
                        label  : 'Pages',
                        results: navigationResults
                    });
                }

                // If there are contacts results...
                if ( contactsResults.length > 0 )
                {
                    // Normalize the results while marking the found chars
                    contactsResults.forEach((result) => {

                        // Normalize
                        result.title = result.firstName + ' ' + result.lastName;
                        result.resultType = 'contact';

                        // Make the found chars bold
                        const re = new RegExp('(' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'ig');
                        result.title = result.title.replace(re, '<mark>$1</mark>');
                    });

                    // Add the results to the results object
                    results.push({
                        label  : 'Contacts',
                        results: contactsResults
                    });
                }

                // Return the results
                return [200, {results}];
            }));
    }
}

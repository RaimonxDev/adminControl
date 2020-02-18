import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmNavigationItem, AsmNavigationService } from '@assembly/navigation';
import { AsmMockApi } from '@mock-api/mock-api.interface';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { defaultNavigation } from '@mock-api/data/navigation/data';
import { contacts } from '@mock-api/data/contacts/data';

@Injectable({
    providedIn: 'root'
})
export class SearchResultsMockApi implements AsmMockApi
{
    // Private Readonly
    private readonly _defaultNavigation: AsmNavigationItem[] = defaultNavigation;
    private readonly _contacts: any[] = contacts;

    /**
     * Constructor
     *
     * @param _asmNavigationService
     * @param _asmMockApiService
     */
    constructor(
        private _asmNavigationService: AsmNavigationService,
        private _asmMockApiService: AsmMockApiService
    )
    {
        // Set the data
        this._defaultNavigation = defaultNavigation;
        this._contacts = contacts;

        // Register the API endpoints
        this.register();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register
     */
    register(): void
    {
        // Get the flat navigation and store it
        const flatNavigation = this._asmNavigationService.getFlatNavigation(this._defaultNavigation);

        // -----------------------------------------------------------------------------------------------------
        // @ Search results - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPost('api/search')
            .reply((request) => {

                // Get the search query
                const query = _.cloneDeep(request.body.query.toLowerCase());

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
                    return user.name.toLowerCase().includes(query);
                });

                // Create the results array
                const results = [];

                // If there are navigation results...
                if ( navigationResults.length > 0 )
                {
                    // Normalize the results while marking the found chars
                    navigationResults.forEach((result) => {

                        // Normalize
                        result['hint'] = result.link;
                        result['resultType'] = 'page';

                        // Mark the found chars
                        const re = new RegExp('(' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'ig');
                        result.title = result.title.replace(re, '<mark>$1</mark>');
                    });

                    // Add the results
                    results.push(...navigationResults);
                }

                // If there are contacts results...
                if ( contactsResults.length > 0 )
                {
                    // Normalize the results while marking the found chars
                    contactsResults.forEach((result) => {

                        // Normalize
                        result.title = result.name;
                        result.resultType = 'contact';

                        // Make the found chars bold
                        const re = new RegExp('(' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'ig');
                        result.title = result.title.replace(re, '<mark>$1</mark>');

                        // Add a link
                        result.link = '/apps/contacts/' + result.id;
                    });

                    // Add the results to the results object
                    results.push(...contactsResults);
                }

                // Return the results
                return [200, {results}];
            });
    }
}

import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';
import { AsmNavigationItem } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { compactNavigation, defaultNavigation } from 'app/core/mock-api/navigation/data';

@Injectable({
    providedIn: 'root'
})
export class MockNavigationData
{
    // Data
    private _defaultNavigation: AsmNavigationItem[] = defaultNavigation;
    private _compactNavigation: AsmNavigationItem[] = compactNavigation;

    /**
     * constructor
     */
    constructor()
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
        // GET - Default navigation
        mock.onGet('api/navigation/default')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    {
                        navigation: this._defaultNavigation
                    }
                ];
            }));

        // GET - Compact navigation
        mock.onGet('api/navigation/compact')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    {
                        navigation: this._compactNavigation
                    }
                ];
            }));
    }
}

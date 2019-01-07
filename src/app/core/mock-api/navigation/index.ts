import { Injectable } from '@angular/core';
import { AsmMockApiService, AsmNavigationItem } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { compactNavigation, defaultNavigation } from 'app/core/mock-api/navigation/data';

@Injectable({
    providedIn: 'root'
})
export class MockNavigationApi
{
    // Private Readonly
    private readonly _defaultNavigation: AsmNavigationItem[];
    private readonly _compactNavigation: AsmNavigationItem[];

    /**
     * Constructor
     *
     * @param _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
        // Set the data
        this._defaultNavigation = defaultNavigation;
        this._compactNavigation = compactNavigation;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     */
    init(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Default navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/navigation/default')
            .reply(() => {
                return [
                    200,
                    {
                        navigation: this._defaultNavigation
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Compact navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/navigation/compact')
            .reply(() => {
                return [
                    200,
                    {
                        navigation: this._compactNavigation
                    }
                ];
            });
    }
}

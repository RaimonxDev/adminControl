import { Injectable } from '@angular/core';
import { AsmMockApiService, AsmNavigationItem } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { compactNavigation, defaultNavigation } from 'app/core/mock-api/navigation/data';

@Injectable({
    providedIn: 'root'
})
export class MockNavigationApi
{
    // Data
    private _defaultNavigation: AsmNavigationItem[] = defaultNavigation;
    private _compactNavigation: AsmNavigationItem[] = compactNavigation;

    /**
     * Constructor
     *
     * @param _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
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

import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmNavigationItem } from '@assembly';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { compactNavigation, defaultNavigation } from '@mock-api/data/navigation/data';

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
                        navigation: _.cloneDeep(this._defaultNavigation)
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
                        navigation: _.cloneDeep(this._compactNavigation)
                    }
                ];
            });
    }
}

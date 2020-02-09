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
        this._compactNavigation = compactNavigation;
        this._defaultNavigation = defaultNavigation;
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
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/navigation')
            .reply(() => {

                // Fill compact navigation's aside item's children using the default navigation
                this._compactNavigation.forEach((compactNavItem) => {

                    this._defaultNavigation.forEach((defaultNavItem) => {

                        if ( defaultNavItem.id === compactNavItem.id )
                        {
                            compactNavItem.children = _.cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                return [
                    200,
                    {
                        compact: _.cloneDeep(this._compactNavigation),
                        default: _.cloneDeep(this._defaultNavigation)
                    }
                ];
            });
    }
}

import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmNavigationItem } from '@assembly/components/navigation';
import { AsmMockApi } from '@assembly/lib/mock-api/mock-api.interfaces';
import { AsmMockApiService } from '@assembly/lib/mock-api/mock-api.service';
import { compactNavigation, defaultNavigation, futuristicNavigation, horizontalNavigation } from 'app/data/mock/common/navigation/data';

@Injectable({
    providedIn: 'root'
})
export class NavigationMockApi implements AsmMockApi
{
    // Private Readonly
    private readonly _compactNavigation: AsmNavigationItem[];
    private readonly _defaultNavigation: AsmNavigationItem[];
    private readonly _futuristicNavigation: AsmNavigationItem[];
    private readonly _horizontalNavigation: AsmNavigationItem[];

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
        this._futuristicNavigation = futuristicNavigation;
        this._horizontalNavigation = horizontalNavigation;

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
        // -----------------------------------------------------------------------------------------------------
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/common/navigation')
            .reply(() => {

                // Fill compact navigation children using the default navigation
                this._compactNavigation.forEach((compactNavItem) => {
                    this._defaultNavigation.forEach((defaultNavItem) => {
                        if ( defaultNavItem.id === compactNavItem.id )
                        {
                            compactNavItem.children = _.cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                // Fill compact navigation children using the default navigation
                this._futuristicNavigation.forEach((futuristicNavItem) => {
                    this._defaultNavigation.forEach((defaultNavItem) => {
                        if ( defaultNavItem.id === futuristicNavItem.id )
                        {
                            futuristicNavItem.children = _.cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                // Fill horizontal navigation children using the default navigation
                this._horizontalNavigation.forEach((horizontalNavItem) => {
                    this._defaultNavigation.forEach((defaultNavItem) => {
                        if ( defaultNavItem.id === horizontalNavItem.id )
                        {
                            horizontalNavItem.children = _.cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                return [
                    200,
                    {
                        compact   : _.cloneDeep(this._compactNavigation),
                        default   : _.cloneDeep(this._defaultNavigation),
                        futuristic: _.cloneDeep(this._futuristicNavigation),
                        horizontal: _.cloneDeep(this._horizontalNavigation)
                    }
                ];
            });
    }
}

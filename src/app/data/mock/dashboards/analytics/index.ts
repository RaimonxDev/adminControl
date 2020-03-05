import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApi } from '@assembly/lib/mock-api/mock-api.interfaces';
import { AsmMockApiService } from '@assembly/lib/mock-api/mock-api.service';
import { analytics as analyticsData } from 'app/data/mock/dashboards/analytics/data';

@Injectable({
    providedIn: 'root'
})
export class DashboardAnalyticsMockApi implements AsmMockApi
{
    // Private
    private _analytics: any;

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
        this._analytics = analyticsData;

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
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/dashboard/analytics')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._analytics)
                ];
            });
    }
}

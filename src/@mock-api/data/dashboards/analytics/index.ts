import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { analytics as analyticsData } from '@mock-api/data/dashboards/analytics/data';

@Injectable({
    providedIn: 'root'
})
export class MockDashboardAnalyticsApi
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

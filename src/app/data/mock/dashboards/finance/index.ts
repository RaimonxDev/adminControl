import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApi } from '@assembly/lib/mock-api/mock-api.interfaces';
import { AsmMockApiService } from '@assembly/lib/mock-api/mock-api.service';
import { finance as financeData } from 'app/data/mock/dashboards/finance/data';

@Injectable({
    providedIn: 'root'
})
export class FinanceMockApi implements AsmMockApi
{
    // Private
    private _finance: any;

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
        this._finance = financeData;

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
            .onGet('api/dashboards/finance')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._finance)
                ];
            });
    }
}

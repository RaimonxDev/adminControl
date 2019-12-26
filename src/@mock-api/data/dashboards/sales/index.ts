import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { sales as salesData } from '@mock-api/data/dashboards/sales/data';

@Injectable({
    providedIn: 'root'
})
export class MockDashboardSalesApi
{
    // Private
    private _sales: any;

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
        this._sales = salesData;
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
            .onGet('api/dashboard/sales')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._sales)
                ];
            });
    }
}

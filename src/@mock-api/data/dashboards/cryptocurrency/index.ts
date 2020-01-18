import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { cryptocurrency as cryptocurrencyData } from '@mock-api/data/dashboards/cryptocurrency/data';

@Injectable({
    providedIn: 'root'
})
export class MockDashboardCryptocurrencyApi
{
    // Private
    private _cryptocurrency: any;

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
        this._cryptocurrency = cryptocurrencyData;
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
        // @ Cryptocurrency - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/dashboard/cryptocurrency')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._cryptocurrency)
                ];
            });
    }
}

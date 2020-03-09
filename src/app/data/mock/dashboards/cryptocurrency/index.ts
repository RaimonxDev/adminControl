import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApi } from '@assembly/lib/mock-api/mock-api.interfaces';
import { AsmMockApiService } from '@assembly/lib/mock-api/mock-api.service';
import { cryptocurrency as cryptocurrencyData } from 'app/data/mock/dashboards/cryptocurrency/data';

@Injectable({
    providedIn: 'root'
})
export class DashboardCryptocurrencyMockApi implements AsmMockApi
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
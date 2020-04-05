import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApi } from '@assembly/lib/mock-api/mock-api.interfaces';
import { AsmMockApiService } from '@assembly/lib/mock-api/mock-api.service';
import { crypto as cryptoData } from 'app/data/mock/dashboards/crypto/data';

@Injectable({
    providedIn: 'root'
})
export class CryptoMockApi implements AsmMockApi
{
    // Private
    private _crypto: any;

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
        this._crypto = cryptoData;

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
        // @ Crypto - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/dashboards/crypto')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._crypto)
                ];
            });
    }
}

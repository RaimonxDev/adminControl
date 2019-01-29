import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { dripicons, iconsmind, material } from 'app/core/mock-api/icons/data';

@Injectable({
    providedIn: 'root'
})
export class MockIconsApi
{
    // Private Readonly
    private readonly _dripicons: any;
    private readonly _material: any;
    private readonly _iconsmind: any;

    /**
     * Constructor
     *
     * @param {AsmMockApiService} _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
        // Set the data
        this._dripicons = dripicons;
        this._material = material;
        this._iconsmind = iconsmind;
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
        // @ Dripicons icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/ui/icons/dripicons')
            .reply(() => {
                return [
                    200,
                    {
                        fontSet: 'dripicons',
                        list   : _.cloneDeep(this._dripicons)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Material baseline icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/ui/icons/material-baseline')
            .reply(() => {
                return [
                    200,
                    {
                        fontSet: 'material-baseline-icons',
                        list   : _.cloneDeep(this._material)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Material outline icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/ui/icons/material-outline')
            .reply(() => {
                return [
                    200,
                    {
                        fontSet: 'material-outline-icons',
                        list   : _.cloneDeep(this._material)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Iconsmind icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/ui/icons/iconsmind')
            .reply(() => {
                return [
                    200,
                    {
                        fontSet: 'iconsmind',
                        list   : _.cloneDeep(this._iconsmind)
                    }
                ];
            });
    }
}

import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { dripicons, iconsmind, materialTwotone } from '@mock-api/data/icons/data';

@Injectable({
    providedIn: 'root'
})
export class MockIconsApi
{
    // Private Readonly
    private readonly _dripicons: any;
    private readonly _iconsmind: any;
    private readonly _materialTwotone: any;

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
        this._iconsmind = iconsmind;
        this._materialTwotone = materialTwotone;
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
                        namespace: 'dripicons',
                        name     : 'Dripicons',
                        list     : _.cloneDeep(this._dripicons)
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
                        namespace: 'iconsmind',
                        name     : 'Iconsmind',
                        list     : _.cloneDeep(this._iconsmind)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Material twotone icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/ui/icons/material-twotone')
            .reply(() => {
                return [
                    200,
                    {
                        namespace: '',
                        name     : 'Material Twotone',
                        list     : _.cloneDeep(this._materialTwotone)
                    }
                ];
            });
    }
}

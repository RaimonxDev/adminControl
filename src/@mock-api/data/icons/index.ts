import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { dripicons, iconsmind, material } from '@mock-api/data/icons/data';

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
                        name   : 'Dripicons',
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
                        name   : 'Material Baseline',
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
                        name   : 'Material Outline',
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
                        name   : 'Iconsmind',
                        list   : _.cloneDeep(this._iconsmind)
                    }
                ];
            });
    }
}

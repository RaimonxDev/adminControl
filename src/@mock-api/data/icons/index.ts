import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApi } from '@mock-api/mock-api.interface';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { dripicons, iconsmind, material } from '@mock-api/data/icons/data';

@Injectable({
    providedIn: 'root'
})
export class IconsMockApi implements AsmMockApi
{
    // Private Readonly
    private readonly _dripicons: any;
    private readonly _iconsmind: any;
    private readonly _material: any;

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
        this._material = material;

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
        // @ Material outline icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/ui/icons/material-outline')
            .reply(() => {
                return [
                    200,
                    {
                        namespace: 'mat_outline',
                        name     : 'Material Outline',
                        list     : _.cloneDeep(this._material)
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
                        list     : _.cloneDeep(this._material)
                    }
                ];
            });
    }
}

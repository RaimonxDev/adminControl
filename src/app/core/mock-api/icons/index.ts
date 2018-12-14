import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { dripicons, iconsmind, materialOutline } from 'app/core/mock-api/icons/data';

@Injectable({
    providedIn: 'root'
})
export class MockIconsApi
{
    // Data
    private _dripicons = dripicons;
    private _materialOutline = materialOutline;
    private _iconsmind = iconsmind;

    /**
     * Constructor
     *
     * @param {AsmMockApiService} _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     */
    init(): void
    {
        // GET - Dripicons icons
        this._asmMockApiService
            .onGet('api/ui/icons/dripicons')
            .reply(() => {
                return [
                    200,
                    {
                        icons  : this._dripicons,
                        fontSet: 'dripicons'
                    }
                ];
            });

        // GET - Material Outline icons
        this._asmMockApiService
            .onGet('api/ui/icons/material-outline')
            .reply(() => {
                return [
                    200,
                    {
                        icons  : this._materialOutline,
                        fontSet: 'material-icons'
                    }
                ];
            });

        // GET - Iconsmind icons
        this._asmMockApiService
            .onGet('api/ui/icons/iconsmind')
            .reply(() => {
                return [
                    200,
                    {
                        icons  : this._iconsmind,
                        fontSet: 'iconsmind'
                    }
                ];
            });
    }
}

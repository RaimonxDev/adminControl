import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { iconsmind, materialOutline } from 'app/core/mock-api/icons/data';

@Injectable({
    providedIn: 'root'
})
export class MockIconsApi
{
    // Data
    private _materialOutline = materialOutline;
    private _iconsmind = iconsmind;

    /**
     * constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @param mock
     */
    init(mock: MockAdapter): void
    {
        // GET - Material Outline icons
        mock.onGet('api/ui/icons/material-outline')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    {
                        icons  : this._materialOutline,
                        fontSet: 'material-icons'
                    }
                ];
            }));

        // GET - Iconsmind icons
        mock.onGet('api/ui/icons/iconsmind')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    {
                        icons  : this._iconsmind,
                        fontSet: 'iconsmind'
                    }
                ];
            }));
    }
}

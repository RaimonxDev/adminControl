import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { shortcuts } from 'app/core/mock-api/shortcuts/data';

@Injectable({
    providedIn: 'root'
})
export class MockShortcutsApi
{
    // Data
    private _shortcuts = shortcuts;

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
        // GET - Shortcuts
        mock.onGet('api/shortcuts')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    {
                        shortcuts: this._shortcuts
                    }
                ];
            }));
    }
}

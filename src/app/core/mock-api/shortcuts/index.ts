import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { shortcuts } from 'app/core/mock-api/shortcuts/data';

@Injectable({
    providedIn: 'root'
})
export class MockShortcutsApi
{
    // Private Readonly
    private readonly _shortcuts: any;

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
        this._shortcuts = shortcuts;
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
        // @ Shortcuts - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/shortcuts')
            .reply(() => {
                return [
                    200,
                    {
                        shortcuts: this._shortcuts
                    }
                ];
            });
    }
}

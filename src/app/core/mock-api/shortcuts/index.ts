import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@assembly';

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

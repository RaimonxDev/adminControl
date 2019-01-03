import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { systemLabels } from 'app/core/mock-api/mails/data';

@Injectable({
    providedIn: 'root'
})
export class MockMailsApi
{
    // Data
    private _systemLabels = systemLabels;

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
        // GET - System labels
        this._asmMockApiService
            .onGet('api/apps/mails/labels/system')
            .reply(() => {
                return [
                    200,
                    {
                        systemLabels: this._systemLabels
                    }
                ];
            });
    }
}

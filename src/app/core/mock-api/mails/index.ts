import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { systemLabels, userLabels, userLabels2 } from 'app/core/mock-api/mails/data';

@Injectable({
    providedIn: 'root'
})
export class MockMailsApi
{
    // Private Readonly
    private readonly _systemLabels: any;
    private readonly _userLabels: any;

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
        this._userLabels = userLabels;
        this._systemLabels = systemLabels;
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
        // @ System labels - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mails/labels/system')
            .reply(() => {
                return [
                    200,
                    this._systemLabels
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ User labels - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mails/labels/user')
            .reply(() => {
                return [
                    200,
                    this._userLabels
                ];
            });
    }
}

import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { contacts } from 'app/core/mock-api/contacts/data';

@Injectable({
    providedIn: 'root'
})
export class MockContactsApi
{
    // Data
    private _contacts = contacts;

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
        // @ ...
        // -----------------------------------------------------------------------------------------------------

    }
}

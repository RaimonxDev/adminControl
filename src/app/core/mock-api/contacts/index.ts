import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { contacts } from 'app/core/mock-api/contacts/data';

@Injectable({
    providedIn: 'root'
})
export class MockContactsApi
{
    // Private Readonly
    private readonly _contacts: any;

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
        this._contacts = contacts;
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

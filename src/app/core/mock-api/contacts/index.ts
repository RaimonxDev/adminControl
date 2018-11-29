import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';

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
        // GET

    }
}

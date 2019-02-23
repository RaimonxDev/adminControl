import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { contacts } from '@mock-api/data/contacts/data';

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

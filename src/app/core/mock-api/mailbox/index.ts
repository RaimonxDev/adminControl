import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { inbox, labels } from 'app/core/mock-api/mailbox/data';

@Injectable({
    providedIn: 'root'
})
export class MockMailboxApi
{
    // Private Readonly
    private readonly _inbox: any;
    private readonly _labels: any;

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
        this._inbox = inbox;
        this._labels = labels;
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
        // @ Labels - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mailbox/labels')
            .reply((request) => {

                // Extract the type from the params
                // and decide which labels to return
                const type = request.params.get('type');

                return [
                    200,
                    this._labels[type]
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Mails - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mailbox/mails')
            .reply((request) => {

                // First, decide if mails are requested by category or label
                const category = request.params.get('category');
                const label = request.params.get('label');

                // Prepare the mails
                let mails;

                if ( category )
                {
                    mails = [{subject: category}, ...this._inbox];
                }
                else if ( label )
                {
                    mails = [{subject: 'label/' + label}, ...this._inbox];
                }

                // Pagination

                return [
                    200,
                    mails
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Mail - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mailbox/mail')
            .reply((request) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Find the mail
                let mail = this._inbox.filter((mailItem) => {
                    return mailItem.id === id;
                });

                // Remove the array
                if ( mail && mail.length === 1 )
                {
                    mail = mail[0];
                }

                // Pagination

                return [
                    200,
                    mail
                ];
            });
    }
}

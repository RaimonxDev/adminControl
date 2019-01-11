import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@assembly';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { filters as filtersData, folders as foldersData, mails as mailsData, labels as labelsData } from 'app/core/mock-api/mailbox/data';

@Injectable({
    providedIn: 'root'
})
export class MockMailboxApi
{
    // Private Readonly
    private readonly _filters: any;
    private readonly _folders: any;
    private readonly _mails: any;
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
        this._filters = filtersData;
        this._folders = foldersData;
        this._mails = mailsData;
        this._labels = labelsData;
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
        // @ Folders - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mailbox/folders')
            .reply(() => {

                return [
                    200,
                    this._folders
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Filters - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mailbox/filters')
            .reply(() => {

                return [
                    200,
                    this._filters
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Labels - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mailbox/labels')
            .reply(() => {

                return [
                    200,
                    this._labels
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Mails - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mailbox/mails')
            .reply((request) => {

                // First, decide if mails are requested by folder, filter or label
                const byFolder = request.params.get('folder');
                const byFilter = request.params.get('filter');
                const byLabel = request.params.get('label');

                // Filter the mails depending on the requested by type
                let mails = this._mails.filter((mail) => {

                    if ( byFolder )
                    {
                        return mail.folder === this._folders.filter(folder => folder.slug === byFolder)[0].id;
                    }

                    if ( byFilter )
                    {
                        return mail[byFilter] === true;
                    }

                    if ( byLabel )
                    {
                        return mail.labels.includes(this._labels.filter(label => label.slug === byLabel)[0].id);
                    }
                });

                // Do some modifications
                /*mails = mails.map((mail) => {

                    // Remove the email address portion from the contact
                    mail.from.contact = mail.from.contact.split('<')[0].trim();

                    // Truncate the mail content
                    mail.content = mail.content.substring(0, 80) + ' ...';

                    // Return the modified mail object
                    return mail;
                });*/

                /*if ( category )
                {
                    mails = [{subject: category}, ...this._inbox];
                }
                else if ( label )
                {
                    mails = [{subject: 'label/' + label}, ...this._inbox];
                }*/

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
                let mail = this._mails.filter((item) => {
                    return item.id === id;
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

        // -----------------------------------------------------------------------------------------------------
        // @ Mail - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/mailbox/mail')
            .reply((request) => {

                // Get the updated mail object from the body
                const mail = request.body.mail;

                // Prepare the updated mail
                let updatedMail = null;

                // Find the mail and update it
                this._mails.forEach((item, index, mails) => {

                    if ( item.id === mail.id )
                    {
                        // Update the mail
                        mails[index] = mail;

                        // Store the updated mail
                        updatedMail = mails[index];
                    }
                });

                return [
                    200,
                    updatedMail
                ];
            });
    }
}

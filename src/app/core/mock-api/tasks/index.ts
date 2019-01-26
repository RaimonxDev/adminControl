import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@assembly';
import * as _ from 'lodash';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { filters as filtersData, folders as foldersData, mails as mailsData, labels as labelsData } from 'app/core/mock-api/mailbox/data';

@Injectable({
    providedIn: 'root'
})
export class MockTasksApi
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

                // Clone the mails data to prevent accidental data updates
                let mails = _.cloneDeep(this._mails);

                // Filter the mails depending on the requested by type
                mails = mails.filter((mail) => {

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

                // Paginate - Start

                const mailsLength = mails.length;
                const resultsPerPage = 10;

                // Get the requested page number
                const page = parseInt(request.params.get('page'), 10);

                // Calculate pagination details
                const begin = (page - 1) * resultsPerPage;
                const end = Math.min((resultsPerPage * page), mailsLength);
                const lastPage = Math.max(Math.ceil(mailsLength / resultsPerPage), 1);

                // Prepare the pagination object
                let pagination = {};

                // If the requested page number is bigger than
                // the last possible page number, return null for
                // mails but also send the last possible page so
                // the app can navigate to there
                if ( page > lastPage )
                {
                    mails = null;
                    pagination = {
                        lastPage: lastPage
                    };
                }
                else
                {
                    // Paginate the results by 10
                    mails = mails.slice(begin, end);

                    // Prepare the pagination data
                    pagination = {
                        totalResults  : mailsLength,
                        resultsPerPage: resultsPerPage,
                        currentPage   : page,
                        lastPage      : lastPage,
                        startIndex    : begin,
                        endIndex      : end - 1
                    };
                }

                // Paginate - End

                return [
                    200,
                    {
                        mails,
                        pagination
                    }
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

                // Clone the mails data to prevent accidental data updates
                const mails = _.cloneDeep(this._mails);

                // Find the mail
                let mail = mails.filter((item) => {
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

                // Get the id and mail
                const id = request.body.id;
                const mail = _.cloneDeep(request.body.mail);

                // Prepare the updated mail
                let updatedMail = null;

                // Find the mail and update it
                this._mails.forEach((item, index, mails) => {

                    if ( item.id === id )
                    {
                        // Update the mail
                        mails[index] = _.assign({}, mails[index], mail);

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

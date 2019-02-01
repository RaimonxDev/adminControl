import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@assembly';

import { MockUtils } from 'app/core/mock-api/utils';
import { mockWithAuth } from 'app/core/mock-api/with-auth';
import {
    filters as filtersData, folders as foldersData, mails as mailsData, labels as labelsData, settings as settingsData
} from 'app/core/mock-api/mailbox/data';

@Injectable({
    providedIn: 'root'
})
export class MockMailboxApi
{
    // Private
    private _filters: any[];
    private _folders: any[];
    private _mails: any[];
    private _labels: any[];
    private _settings: any;

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
        this._settings = settingsData;
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
        // @ Settings - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mailbox/settings')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._settings)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Settings - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/mailbox/settings')
            .reply((request) => {

                // Get the settings
                const settings = _.cloneDeep(request.body.settings);

                // Update the settings
                this._settings = _.assign({}, this._settings, settings);

                return [
                    200,
                    _.cloneDeep(this._settings)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Folders - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/mailbox/folders')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._folders)
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
                    _.cloneDeep(this._filters)
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
                    _.cloneDeep(this._labels)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Labels - PUT
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPut('api/apps/mailbox/label')
            .reply((request) => {

                // Get the label
                const label = _.cloneDeep(request.body.label);

                // Generate an id
                label.id = MockUtils.guid();

                // Generate a slug
                label.slug = label.title.toLowerCase()
                                  .replace(/ /g, '-')
                                  .replace(/[-]+/g, '-')
                                  .replace(/[^\w-]+/g, '');

                // Check if the slug is being used and update it if necessary
                const originalSlug = label.slug;

                let sameSlug,
                    slugSuffix = 1;

                do
                {
                    sameSlug = this._labels.filter((item) => {
                        return item.slug === label.slug;
                    });

                    if ( sameSlug.length > 0 )
                    {
                        label.slug = originalSlug + '-' + slugSuffix;
                        slugSuffix++;
                    }
                }
                while ( sameSlug.length > 0 );

                // Add the label
                this._labels.push(label);

                return [
                    200,
                    label
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Labels - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/mailbox/label')
            .reply((request) => {

                // Get the id and label
                const id = request.body.id;
                const label = _.cloneDeep(request.body.label);

                // Prepare the updated label
                let updatedLabel = null;

                // Find the label and update it
                this._labels.forEach((item, index, labels) => {

                    if ( item.id === id )
                    {
                        // Update the slug
                        label.slug = label.title.toLowerCase()
                                          .replace(/ /g, '-')
                                          .replace(/[-]+/g, '-')
                                          .replace(/[^\w-]+/g, '');

                        // Update the label
                        labels[index] = _.assign({}, labels[index], label);

                        // Store the updated label
                        updatedLabel = labels[index];
                    }
                });

                return [
                    200,
                    updatedLabel
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Labels - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onDelete('api/apps/mailbox/label')
            .reply((request) => {

                // Get the id
                const id = request.params.get('id');

                // Find the label and remove it
                this._labels.forEach((item, index) => {

                    if ( item.id === id )
                    {
                        this._labels.splice(index, 1);
                    }

                    return;
                });

                // Get all the mails that have the label
                const mailsWithLabel = this._mails.filter((mail) => {
                    return mail.labels.indexOf(id) > -1;
                });

                // Iterate through them and remove the label
                mailsWithLabel.forEach((mail) => {
                    mail.labels.splice(mail.labels.indexOf(id), 1);
                });

                return [
                    200,
                    true
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

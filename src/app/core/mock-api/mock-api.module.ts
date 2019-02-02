import { NgModule } from '@angular/core';
import { AsmMockApiModule } from '@assembly';

import { MockAuthApi } from 'app/core/mock-api/auth';
import { MockContactsApi } from 'app/core/mock-api/contacts';
import { MockDocsApi } from 'app/core/mock-api/docs';
import { MockIconsApi } from 'app/core/mock-api/icons';
import { MockMailboxApi } from 'app/core/mock-api/mailbox';
import { MockNavigationApi } from 'app/core/mock-api/navigation';
import { MockSearchResultsApi } from 'app/core/mock-api/search';
import { MockShortcutsApi } from 'app/core/mock-api/shortcuts';
import { MockTasksApi } from 'app/core/mock-api/tasks';

@NgModule({
    imports: [
        AsmMockApiModule
    ]
})
export class MockApiModule
{
    /**
     * Constructor
     *
     * @param {MockAuthApi} _mockAuthApi
     * @param {MockContactsApi} _mockContactsApi
     * @param {MockDocsApi} _mockDocsApi
     * @param {MockIconsApi} _mockIconsApi
     * @param {MockMailboxApi} _mockMailboxApi
     * @param {MockNavigationApi} _mockNavigationApi
     * @param {MockSearchResultsApi} _mockSearchResultsApi
     * @param {MockShortcutsApi} _mockShortcutsApi
     * @param {MockTasksApi} _mockTasksApi
     */
    constructor(
        private _mockAuthApi: MockAuthApi,
        private _mockContactsApi: MockContactsApi,
        private _mockDocsApi: MockDocsApi,
        private _mockIconsApi: MockIconsApi,
        private _mockMailboxApi: MockMailboxApi,
        private _mockNavigationApi: MockNavigationApi,
        private _mockSearchResultsApi: MockSearchResultsApi,
        private _mockShortcutsApi: MockShortcutsApi,
        private _mockTasksApi: MockTasksApi
    )
    {
        this._mockAuthApi.init();
        this._mockContactsApi.init();
        this._mockDocsApi.init();
        this._mockIconsApi.init();
        this._mockMailboxApi.init();
        this._mockNavigationApi.init();
        this._mockSearchResultsApi.init();
        this._mockShortcutsApi.init();
        this._mockTasksApi.init();
    }
}

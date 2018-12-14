import { NgModule } from '@angular/core';
import { AsmMockApiModule } from '@assembly';

import { MockAuthApi } from 'app/core/mock-api/auth';
import { MockContactsApi } from 'app/core/mock-api/contacts';
import { MockDocsApi } from 'app/core/mock-api/docs';
import { MockIconsApi } from 'app/core/mock-api/icons';
import { MockNavigationApi } from 'app/core/mock-api/navigation';
import { MockSearchResultsApi } from 'app/core/mock-api/search';
import { MockShortcutsApi } from 'app/core/mock-api/shortcuts';

@NgModule({
    providers: [
        MockAuthApi,
        MockContactsApi,
        MockDocsApi,
        MockIconsApi,
        MockNavigationApi,
        MockSearchResultsApi,
        MockShortcutsApi
    ],
    imports  : [
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
     * @param {MockNavigationApi} _mockNavigationApi
     * @param {MockSearchResultsApi} _mockSearchResultsApi
     * @param {MockShortcutsApi} _mockShortcutsApi
     */
    constructor(
        private _mockAuthApi: MockAuthApi,
        private _mockContactsApi: MockContactsApi,
        private _mockDocsApi: MockDocsApi,
        private _mockIconsApi: MockIconsApi,
        private _mockNavigationApi: MockNavigationApi,
        private _mockSearchResultsApi: MockSearchResultsApi,
        private _mockShortcutsApi: MockShortcutsApi
    )
    {
        this._mockAuthApi.init();
        this._mockContactsApi.init();
        this._mockDocsApi.init();
        this._mockIconsApi.init();
        this._mockNavigationApi.init();
        this._mockSearchResultsApi.init();
        this._mockShortcutsApi.init();
    }
}

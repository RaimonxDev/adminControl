import { NgModule } from '@angular/core';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { MockAuthApi } from 'app/core/mock-api/auth';
import { MockContactsApi } from 'app/core/mock-api/contacts';
import { MockDocsApi } from 'app/core/mock-api/docs';
import { MockNavigationApi } from 'app/core/mock-api/navigation';
import { MockSearchResultsApi } from 'app/core/mock-api/search';

const mockAdapter = new MockAdapter(axios, {delayResponse: 0});

@NgModule()
export class MockApiModule
{
    /**
     * Constructor
     *
     * @param {MockAuthApi} _mockAuthApi
     * @param {MockContactsApi} _mockContactsApi
     * @param {MockDocsApi} _mockDocsApi
     * @param {MockNavigationApi} _mockNavigationApi
     * @param {MockSearchResultsApi} _mockSearchResultsApi
     */
    constructor(
        private _mockAuthApi: MockAuthApi,
        private _mockContactsApi: MockContactsApi,
        private _mockDocsApi: MockDocsApi,
        private _mockNavigationApi: MockNavigationApi,
        private _mockSearchResultsApi: MockSearchResultsApi
    )
    {
        this._mockAuthApi.init(mockAdapter);
        this._mockContactsApi.init(mockAdapter);
        this._mockDocsApi.init(mockAdapter);
        this._mockNavigationApi.init(mockAdapter);
        this._mockSearchResultsApi.init(mockAdapter);
    }
}

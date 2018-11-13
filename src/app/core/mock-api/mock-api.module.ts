import { NgModule } from '@angular/core';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { MockAuthData } from 'app/core/mock-api/auth';
import { MockDocsData } from 'app/core/mock-api/docs';
import { MockNavigationData } from 'app/core/mock-api/navigation';

const mockAdapter = new MockAdapter(axios, {delayResponse: 0});

@NgModule()
export class MockApiModule
{
    /**
     * Constructor
     *
     * @param {MockAuthData} _mockAuthData
     * @param {MockDocsData} _mockDocsData
     * @param {MockNavigationData} _mockNavigationData
     */
    constructor(
        private _mockAuthData: MockAuthData,
        private _mockDocsData: MockDocsData,
        private _mockNavigationData: MockNavigationData
    )
    {
        this._mockAuthData.init(mockAdapter);
        this._mockDocsData.init(mockAdapter);
        this._mockNavigationData.init(mockAdapter);
    }
}

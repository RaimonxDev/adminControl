import { NgModule } from '@angular/core';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { MockAuthData } from 'app/core/mock-api/data/auth';
import { MockNavigationData } from 'app/core/mock-api/data/navigation';
import { MockNotificationsData } from 'app/core/mock-api/data/notifications';

const mockAdapter = new MockAdapter(axios);

@NgModule()
export class MockApiModule
{
    /**
     * Constructor
     *
     * @param {MockAuthData} _mockAuthData
     * @param {MockNavigationData} _mockNavigationData
     * @param {MockNotificationsData} _mockNotificationsData
     */
    constructor(
        private _mockAuthData: MockAuthData,
        private _mockNavigationData: MockNavigationData,
        private _mockNotificationsData: MockNotificationsData
    )
    {
        this._mockAuthData.init(mockAdapter);
        this._mockNavigationData.init(mockAdapter);
        this._mockNotificationsData.init(mockAdapter);
    }
}

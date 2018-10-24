import { NgModule } from '@angular/core';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { MockAuthData } from 'app/core/mock-api/data/auth';
import { MockNotificationsData } from 'app/core/mock-api/data/notifications';

const mockAdapter = new MockAdapter(axios);

@NgModule()
export class MockApiModule
{
    /**
     * Constructor
     *
     * @param _mockAuthData
     * @param _mockNotificationsData
     */
    constructor(
        private _mockAuthData: MockAuthData,
        private _mockNotificationsData: MockNotificationsData
    )
    {
        this._mockAuthData.init(mockAdapter);
        this._mockNotificationsData.init(mockAdapter);
    }
}

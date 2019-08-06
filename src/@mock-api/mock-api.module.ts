import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AsmMockApiInterceptor } from '@mock-api/mock-api.interceptor';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { MockAuthApi } from '@mock-api/data/auth';
import { MockCalendarApi } from '@mock-api/data/calendar';
import { MockContactsApi } from '@mock-api/data/contacts';
import { MockDocsApi } from '@mock-api/data/docs';
import { MockHelpCenterApi } from '@mock-api/data/help-center';
import { MockIconsApi } from '@mock-api/data/icons';
import { MockMailboxApi } from '@mock-api/data/mailbox';
import { MockNavigationApi } from '@mock-api/data/navigation';
import { MockSearchResultsApi } from '@mock-api/data/search';
import { MockShortcutsApi } from '@mock-api/data/shortcuts';
import { MockTasksApi } from '@mock-api/data/tasks';

@NgModule({
    providers: [
        AsmMockApiService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AsmMockApiInterceptor,
            multi   : true
        }
    ]
})
export class AsmMockApiModule
{
    /**
     * Constructor
     *
     * @param {MockAuthApi} _mockAuthApi
     * @param {MockCalendarApi} _mockCalendarApi
     * @param {MockContactsApi} _mockContactsApi
     * @param {MockDocsApi} _mockDocsApi
     * @param {MockHelpCenterApi} _mockHelpCenterApi
     * @param {MockIconsApi} _mockIconsApi
     * @param {MockMailboxApi} _mockMailboxApi
     * @param {MockNavigationApi} _mockNavigationApi
     * @param {MockSearchResultsApi} _mockSearchResultsApi
     * @param {MockShortcutsApi} _mockShortcutsApi
     * @param {MockTasksApi} _mockTasksApi
     */
    constructor(
        private _mockAuthApi: MockAuthApi,
        private _mockCalendarApi: MockCalendarApi,
        private _mockContactsApi: MockContactsApi,
        private _mockDocsApi: MockDocsApi,
        private _mockHelpCenterApi: MockHelpCenterApi,
        private _mockIconsApi: MockIconsApi,
        private _mockMailboxApi: MockMailboxApi,
        private _mockNavigationApi: MockNavigationApi,
        private _mockSearchResultsApi: MockSearchResultsApi,
        private _mockShortcutsApi: MockShortcutsApi,
        private _mockTasksApi: MockTasksApi
    )
    {
        this._mockAuthApi.init();
        this._mockCalendarApi.init();
        this._mockContactsApi.init();
        this._mockDocsApi.init();
        this._mockHelpCenterApi.init();
        this._mockIconsApi.init();
        this._mockMailboxApi.init();
        this._mockNavigationApi.init();
        this._mockSearchResultsApi.init();
        this._mockShortcutsApi.init();
        this._mockTasksApi.init();
    }
}

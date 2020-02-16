import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AsmMockApiInterceptor } from '@mock-api/mock-api.interceptor';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { AuthMockApi } from '@mock-api/data/auth';
import { CalendarMockApi } from '@mock-api/data/calendar';
import { ContactsMockApi } from '@mock-api/data/contacts';
import { DashboardAnalyticsMockApi } from '@mock-api/data/dashboards/analytics';
import { DashboardCryptocurrencyMockApi } from '@mock-api/data/dashboards/cryptocurrency';
import { DocsMockApi } from '@mock-api/data/docs';
import { HelpCenterMockApi } from '@mock-api/data/help-center';
import { IconsMockApi } from '@mock-api/data/icons';
import { MailboxMockApi } from '@mock-api/data/mailbox';
import { MessagesMockApi } from '@mock-api/data/messages';
import { NavigationMockApi } from '@mock-api/data/navigation';
import { NotificationsMockApi } from '@mock-api/data/notifications';
import { SearchResultsMockApi } from '@mock-api/data/search';
import { ShortcutsMockApi } from '@mock-api/data/shortcuts';
import { TasksMockApi } from '@mock-api/data/tasks';
import { UserMockApi } from '@mock-api/data/user';

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
     * @param {AuthMockApi} _mockAuthApi
     * @param {CalendarMockApi} _mockCalendarApi
     * @param {ContactsMockApi} _mockContactsApi
     * @param {DashboardAnalyticsMockApi} _mockDashboardAnalyticsApi
     * @param {DashboardCryptocurrencyMockApi} _mockDashboardCryptocurrencyApi
     * @param {DocsMockApi} _mockDocsApi
     * @param {HelpCenterMockApi} _mockHelpCenterApi
     * @param {IconsMockApi} _mockIconsApi
     * @param {MailboxMockApi} _mockMailboxApi
     * @param {MessagesMockApi} _mockMessagesApi
     * @param {NavigationMockApi} _mockNavigationApi
     * @param {NotificationsMockApi} _mockNotificationsApi
     * @param {SearchResultsMockApi} _mockSearchResultsApi
     * @param {ShortcutsMockApi} _mockShortcutsApi
     * @param {TasksMockApi} _mockTasksApi
     * @param {UserMockApi} _mockUserApi
     */
    constructor(
        private _mockAuthApi: AuthMockApi,
        private _mockCalendarApi: CalendarMockApi,
        private _mockContactsApi: ContactsMockApi,
        private _mockDashboardAnalyticsApi: DashboardAnalyticsMockApi,
        private _mockDashboardCryptocurrencyApi: DashboardCryptocurrencyMockApi,
        private _mockDocsApi: DocsMockApi,
        private _mockHelpCenterApi: HelpCenterMockApi,
        private _mockIconsApi: IconsMockApi,
        private _mockMailboxApi: MailboxMockApi,
        private _mockMessagesApi: MessagesMockApi,
        private _mockNavigationApi: NavigationMockApi,
        private _mockNotificationsApi: NotificationsMockApi,
        private _mockSearchResultsApi: SearchResultsMockApi,
        private _mockShortcutsApi: ShortcutsMockApi,
        private _mockTasksApi: TasksMockApi,
        private _mockUserApi: UserMockApi
    )
    {
        this._mockAuthApi.register();
        this._mockCalendarApi.register();
        this._mockContactsApi.register();
        this._mockDashboardAnalyticsApi.register();
        this._mockDashboardCryptocurrencyApi.register();
        this._mockDocsApi.register();
        this._mockHelpCenterApi.register();
        this._mockIconsApi.register();
        this._mockMailboxApi.register();
        this._mockMessagesApi.register();
        this._mockNavigationApi.register();
        this._mockNotificationsApi.register();
        this._mockSearchResultsApi.register();
        this._mockShortcutsApi.register();
        this._mockTasksApi.register();
        this._mockUserApi.register();
    }
}

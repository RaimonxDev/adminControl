import { AuthMockApi } from 'app/data/mock/auth';
import { ContactsMockApi } from 'app/data/mock/apps/contacts';
import { MessagesMockApi } from 'app/data/mock/common/messages';
import { NavigationMockApi } from 'app/data/mock/common/navigation';
import { NotificationsMockApi } from 'app/data/mock/common/notifications';
import { SearchMockApi } from 'app/data/mock/common/search';
import { ShortcutsMockApi } from 'app/data/mock/common/shortcuts';
import { UserMockApi } from 'app/data/mock/common/user';

export const mockDataServices = [
    AuthMockApi,
    ContactsMockApi,
    MessagesMockApi,
    NavigationMockApi,
    NotificationsMockApi,
    SearchMockApi,
    ShortcutsMockApi,
    UserMockApi
];

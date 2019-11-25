import { AsmShortcut } from '@assembly';

/* tslint:disable:max-line-length */
export const shortcuts: AsmShortcut[] = [
    {
        id         : 'a1ae91d3-e2cb-459b-9be9-a184694f548b',
        label      : 'Changelog',
        description: 'Latest version: v1.2',
        icon       : 'list_alt',
        link       : 'docs/changelog',
        useRouter  : true
    },
    {
        id         : '989ce876-c177-4d71-a749-1953c477f825',
        label      : 'Documentation',
        description: 'Getting started',
        icon       : 'chrome_reader_mode',
        link       : 'docs/getting-started',
        useRouter  : true
    },
    {
        id         : '2496f42e-2f25-4e34-83d5-3ff9568fd984',
        label      : 'About',
        description: 'Who we are?',
        icon       : 'info',
        link       : 'apps/dashboard',
        useRouter  : true
    },
    {
        id         : '3c48e75e-2ae7-4b73-938a-12dc655be28b',
        label      : 'Dashboard',
        description: 'User analytics',
        icon       : 'dashboard',
        link       : 'apps/dashboard',
        useRouter  : true
    },
    {
        id         : '34fb28db-4ec8-4570-8584-2414d6de796b',
        label      : 'Calendar',
        description: 'Latest appointments',
        icon       : 'calendar_today',
        link       : 'apps/calendar',
        useRouter  : true
    },
    {
        id         : 'f5daf93e-b6f3-4199-8a0c-b951e92a6cb8',
        label      : 'Notifications',
        description: 'List all notifications',
        icon       : 'notifications',
        link       : 'apps/dashboard',
        useRouter  : false
    }
];

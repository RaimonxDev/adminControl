import { AsmNotification } from '@assembly';
import * as moment from 'moment';

/* tslint:disable:max-line-length */
export const notifications: AsmNotification[] = [
    {
        id         : '493190c9-5b61-4912-afe5-78c21f1044d7',
        icon       : 'check_circle',
        title      : 'Daily challenges',
        description: 'Your submission has been accepted',
        time       : moment().subtract(25, 'minutes').toISOString(), // 25 minutes ago
        read       : false
    },
    {
        id         : '6e3e97e5-effc-4fb7-b730-52a151f0b641',
        image      : 'assets/images/avatars/male-04.jpg',
        description: '<span  class="link">Leo Gill</span> added you to <span  class="link">Top Secret Project</span> group and assigned you as a <em>Project Manager</em>',
        time       : moment().subtract(50, 'minutes').toISOString(), // 50 minutes ago
        read       : true
    },
    {
        id         : 'b91ccb58-b06c-413b-b389-87010e03a120',
        icon       : 'mail',
        title      : 'Mailbox',
        description: 'You have 15 unread mails across 3 mailboxes',
        time       : moment().subtract(3, 'hours').toISOString(), // 3 hours ago
        read       : false
    },
    {
        id         : '541416c9-84a7-408a-8d74-27a43c38d797',
        icon       : 'autorenew',
        title      : 'Cron jobs',
        description: 'Your <span class="link">Docker container</span> is ready to publish',
        time       : moment().subtract(5, 'hours').toISOString(), // 5 hours ago
        read       : false
    },
    {
        id         : 'ef7b95a7-8e8b-4616-9619-130d9533add9',
        image      : 'assets/images/avatars/male-06.jpg',
        description: '<span class="link">Roger Murray</span> accepted your friend request',
        time       : moment().subtract(7, 'hours').toISOString(), // 7 hours ago
        read       : true
    },
    {
        id         : 'eb8aa470-635e-461d-88e1-23d9ea2a5665',
        image      : 'assets/images/avatars/female-04.jpg',
        description: '<span class="link">Sophie Stone</span> sent you a direct message',
        time       : moment().subtract(9, 'hours').toISOString(), // 9 hours ago
        read       : true
    },
    {
        id         : 'b85c2338-cc98-4140-bbf8-c226ce4e395e',
        icon       : 'mail',
        title      : 'Mailbox',
        description: 'You have 3 new mails',
        time       : moment().subtract(1, 'day').toISOString(), // 1 day ago
        read       : true
    },
    {
        id         : '8f8e1bf9-4661-4939-9e43-390957b60f42',
        icon       : 'check_circle',
        title      : 'Daily challenges',
        description: 'Your submission has been accepted and you are ready to sign-up for the final assigment which will be ready in 2 days',
        time       : moment().subtract(3, 'days').toISOString(), // 3 days ago
        read       : true
    },
    {
        id         : '30af917b-7a6a-45d1-822f-9e7ad7f8bf69',
        icon       : 'autorenew',
        title      : 'Cron jobs',
        description: 'Your <span  class="link">Vagrant container</span> is ready to download',
        time       : moment().subtract(4, 'day').toISOString(), // 4 days ago
        read       : true
    }
];
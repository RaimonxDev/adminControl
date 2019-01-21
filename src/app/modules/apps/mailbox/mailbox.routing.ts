import { Route, UrlMatchResult, UrlSegment } from '@angular/router';
import { MailboxComponent } from 'app/modules/apps/mailbox/mailbox.component';
import {
    MailboxFiltersResolver,
    MailboxFoldersResolver,
    MailboxLabelsResolver,
    MailboxMailResolver,
    MailboxMailsResolver
} from 'app/modules/apps/mailbox/mailbox.resolvers';
import { MailboxListComponent } from 'app/modules/apps/mailbox/list/list.component';
import { MailboxDetailsComponent } from 'app/modules/apps/mailbox/details/details.component';

/**
 * Mailbox custom route matcher
 *
 * @param url
 */
function mailboxRouteMatcher(url: UrlSegment[]): UrlMatchResult
{
    // Prepare consumed url and positional parameters
    let consumed = url;
    const posParams = {};

    // Filter or label
    if ( url[0].path === 'filter' || url[0].path === 'label' )
    {
        posParams[url[0].path] = url[1];
        posParams['page'] = url[2];

        // Remove the id if exists
        if ( url[3] )
        {
            consumed = url.slice(0, -1);
        }
    }
    else
    {
        posParams['folder'] = url[0];
        posParams['page'] = url[1];

        // Remove the id if exists
        if ( url[2] )
        {
            consumed = url.slice(0, -1);
        }
    }

    return {
        consumed,
        posParams
    };
}

export const mailboxRoutes: Route[] = [
    {
        path      : '',
        redirectTo: 'inbox/1',
        pathMatch : 'full'
    },
    {
        path      : 'filter/:filter',
        redirectTo: 'filter/:filter/1',
        pathMatch : 'full'
    },
    {
        path      : 'label/:label',
        redirectTo: 'label/:label/1',
        pathMatch : 'full'
    },
    {
        path      : ':folder',
        redirectTo: ':folder/1',
        pathMatch : 'full'
    },
    {
        path     : '',
        component: MailboxComponent,
        resolve  : {
            filters: MailboxFiltersResolver,
            folders: MailboxFoldersResolver,
            labels : MailboxLabelsResolver
        },
        children : [
            {
                matcher  : mailboxRouteMatcher,
                component: MailboxListComponent,
                resolve  : {
                    mails: MailboxMailsResolver
                },
                children : [
                    {
                        path     : '',
                        component: MailboxDetailsComponent,
                        children : [
                            {
                                path   : ':id',
                                resolve: {
                                    mail: MailboxMailResolver
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

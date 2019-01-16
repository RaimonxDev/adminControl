import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { AsmLookUpByPipeModule, AsmScrollbarModule } from '@assembly';
import { SharedModule } from 'app/core/shared.module';
import { ContentLayoutWithSidebarModule } from 'app/core/content-layouts/with-sidebar/with-sidebar.module';

import {
    MailboxFiltersResolver, MailboxFoldersResolver, MailboxLabelsResolver, MailboxMailResolver,
    MailboxMailsResolver
} from 'app/modules/apps/mailbox/mailbox.resolvers';
import { MailboxComponent } from 'app/modules/apps/mailbox/mailbox.component';
import { MailboxDetailComponent } from 'app/modules/apps/mailbox/detail/detail.component';
import { MailboxListComponent } from 'app/modules/apps/mailbox/list/list.component';
import { MailboxSidebarComponent } from 'app/modules/apps/mailbox/sidebar/sidebar.component';

const routes: Route[] = [
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
                path    : 'filter/:filter',
                children: [
                    {
                        path    : ':page',
                        resolve : {
                            mails: MailboxMailsResolver
                        },
                        children: [
                            {
                                path   : ':id',
                                resolve: {
                                    mail: MailboxMailResolver
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path    : 'label/:label',
                children: [
                    {
                        path    : ':page',
                        resolve : {
                            mails: MailboxMailsResolver
                        },
                        children: [
                            {
                                path   : ':id',
                                resolve: {
                                    mail: MailboxMailResolver
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path    : ':folder',
                children: [
                    {
                        path    : ':page',
                        resolve : {
                            mails: MailboxMailsResolver
                        },
                        children: [
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

@NgModule({
    declarations: [
        MailboxComponent,
        MailboxDetailComponent,
        MailboxListComponent,
        MailboxSidebarComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        AsmLookUpByPipeModule,
        AsmScrollbarModule,
        SharedModule,
        ContentLayoutWithSidebarModule
    ]
})
export class MailboxModule
{
}

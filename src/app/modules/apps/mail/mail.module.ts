import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { AsmScrollbarModule } from '@assembly';
import { SharedModule } from 'app/core/shared.module';
import { ContentLayoutWithSidebarModule } from 'app/core/content-layouts/with-sidebar/with-sidebar.module';

import { MailService } from 'app/modules/apps/mail/mail.service';
import { MailComponent } from 'app/modules/apps/mail/mail.component';
import { MailDetailComponent } from 'app/modules/apps/mail/detail/detail.component';
import { MailListComponent } from 'app/modules/apps/mail/list/list.component';
import { MailSidebarComponent } from 'app/modules/apps/mail/sidebar/sidebar.component';

const routes: Route[] = [
    {
        path     : ':label',
        component: MailComponent,
        resolve  : {
            mail: MailService
        },
        children : [
            {
                path     : ':id',
                component: MailComponent
            }
        ]
    },
    {
        path      : '**',
        redirectTo: 'inbox'
    }
];

@NgModule({
    declarations: [
        MailComponent,
        MailDetailComponent,
        MailListComponent,
        MailSidebarComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        AsmScrollbarModule,
        SharedModule,
        ContentLayoutWithSidebarModule
    ]
})
export class MailModule
{
}

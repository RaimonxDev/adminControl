import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AsmScrollbarModule } from '@assembly';
import { ContentLayoutWithSidebarModule } from 'app/core/content-layouts/with-sidebar/with-sidebar.module';

import { MailComponent } from 'app/modules/apps/mail/mail.component';
import { MailDetailComponent } from 'app/modules/apps/mail/detail/detail.component';
import { MailListComponent } from 'app/modules/apps/mail/list/list.component';
import { MailSidebarComponent } from 'app/modules/apps/mail/sidebar/sidebar.component';

const routes: Route[] = [
    {
        path     : '',
        component: MailComponent
    }
];

@NgModule({
    declarations: [
        MailComponent,
        MailDetailComponent,
        MailListComponent,
        MailSidebarComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),
        AsmScrollbarModule,
        ContentLayoutWithSidebarModule
    ]
})
export class MailModule
{
}

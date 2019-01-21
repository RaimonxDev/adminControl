import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule } from '@angular/material';
import { AsmLookUpByPipeModule, AsmScrollbarModule } from '@assembly';
import { SharedModule } from 'app/core/shared.module';
import { ContentLayoutWithSidebarModule } from 'app/core/content-layouts/with-sidebar/with-sidebar.module';

import { mailboxRoutes } from 'app/modules/apps/mailbox/mailbox.routing';
import { MailboxComponent } from 'app/modules/apps/mailbox/mailbox.component';
import { MailboxDetailsComponent } from 'app/modules/apps/mailbox/details/details.component';
import { MailboxListComponent } from 'app/modules/apps/mailbox/list/list.component';
import { MailboxSidebarComponent } from 'app/modules/apps/mailbox/sidebar/sidebar.component';

@NgModule({
    declarations: [
        MailboxComponent,
        MailboxDetailsComponent,
        MailboxListComponent,
        MailboxSidebarComponent
    ],
    imports     : [
        RouterModule.forChild(mailboxRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatMenuModule,
        AsmLookUpByPipeModule,
        AsmScrollbarModule,
        SharedModule,
        ContentLayoutWithSidebarModule
    ]
})
export class MailboxModule
{
}

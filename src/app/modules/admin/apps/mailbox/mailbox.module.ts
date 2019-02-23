import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { AsmLookUpByPipeModule, AsmScrollbarModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { MailboxComponent } from 'app/modules/admin/apps/mailbox/mailbox.component';
import { MailboxDetailsComponent } from 'app/modules/admin/apps/mailbox/details/details.component';
import { MailboxListComponent } from 'app/modules/admin/apps/mailbox/list/list.component';
import { MailboxSettingsComponent } from 'app/modules/admin/apps/mailbox/settings/settings.component';
import { MailboxSidebarComponent } from 'app/modules/admin/apps/mailbox/sidebar/sidebar.component';
import { mailboxRoutes } from 'app/modules/admin/apps/mailbox/mailbox.routing';

@NgModule({
    declarations: [
        MailboxComponent,
        MailboxDetailsComponent,
        MailboxListComponent,
        MailboxSettingsComponent,
        MailboxSidebarComponent
    ],
    imports     : [
        RouterModule.forChild(mailboxRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        AsmLookUpByPipeModule,
        AsmScrollbarModule,
        SharedModule
    ]
})
export class MailboxModule
{
}

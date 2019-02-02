import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule
} from '@angular/material';
import { AsmLookUpByPipeModule, AsmScrollbarModule } from '@assembly';
import { SharedModule } from 'app/core/shared.module';

import { mailboxRoutes } from 'app/modules/apps/mailbox/mailbox.routing';
import { MailboxComponent } from 'app/modules/apps/mailbox/mailbox.component';
import { MailboxDetailsComponent } from 'app/modules/apps/mailbox/details/details.component';
import { MailboxListComponent } from 'app/modules/apps/mailbox/list/list.component';
import { MailboxSettingsComponent } from 'app/modules/apps/mailbox/settings/settings.component';
import { MailboxSidebarComponent } from 'app/modules/apps/mailbox/sidebar/sidebar.component';

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
        ReactiveFormsModule,
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

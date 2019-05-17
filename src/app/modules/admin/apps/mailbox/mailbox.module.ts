import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmLookUpByPipeModule, AsmScrollbarModule, AsmVerticalMenuModule } from '@assembly';
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
        AsmVerticalMenuModule,
        SharedModule
    ]
})
export class MailboxModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmHighlightModule } from '@assembly/components/highlight';
import { AsmMessageModule } from '@assembly/components/message';
import { SharedModule } from 'app/core/shared/shared.module';
import { MessagesComponent } from 'app/modules/admin/assembly/components/messages/messages.component';
import { messagesRoutes } from 'app/modules/admin/assembly/components/messages/messages.routing';

@NgModule({
    declarations: [
        MessagesComponent
    ],
    imports     : [
        RouterModule.forChild(messagesRoutes),
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        AsmHighlightModule,
        AsmMessageModule,
        SharedModule
    ]
})
export class MessagesModule
{
}

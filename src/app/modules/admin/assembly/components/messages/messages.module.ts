import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatTabsModule } from '@angular/material';
import { AsmHighlightModule, AsmMessageModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
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

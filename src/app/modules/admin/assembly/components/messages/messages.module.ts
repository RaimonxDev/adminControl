import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { AsmMessageModule } from '@assembly';
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
        AsmMessageModule,
        SharedModule
    ]
})
export class MessagesModule
{
}

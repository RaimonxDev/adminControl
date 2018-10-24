import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { AsmNotificationsComponent } from '@assembly/components/notifications/notifications.component';
import { AsmNotificationsService } from '@assembly/components/notifications/notifications.service';

@NgModule({
    declarations: [
        AsmNotificationsComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatMenuModule
    ],
    exports     : [
        AsmNotificationsComponent
    ],
    providers   : [
        AsmNotificationsService
    ]
})
export class AsmNotificationsModule
{
}

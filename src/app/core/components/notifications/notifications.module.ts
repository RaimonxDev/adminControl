import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { NotificationsComponent } from 'app/core/components/notifications/notifications.component';
import { NotificationsService } from 'app/core/components/notifications/notifications.service';

@NgModule({
    declarations: [
        NotificationsComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatMenuModule
    ],
    exports     : [
        NotificationsComponent
    ],
    providers   : [
        NotificationsService
    ]
})
export class NotificationsModule
{
}

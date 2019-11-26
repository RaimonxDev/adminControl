import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { AsmNotificationsComponent } from '@assembly/components/notifications/notifications.component';

@NgModule({
    declarations: [
        AsmNotificationsComponent
    ],
    imports     : [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        OverlayModule,
        PortalModule
    ],
    exports     : [
        AsmNotificationsComponent
    ]
})
export class AsmNotificationsModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material';
import { AsmCardModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { LogoutComponent } from 'app/modules/admin/pages/authentication/logout/logout.component';
import { logoutRoutes } from 'app/modules/admin/pages/authentication/logout/logout.routing';

@NgModule({
    declarations: [
        LogoutComponent
    ],
    imports     : [
        RouterModule.forChild(logoutRoutes),
        MatSelectModule,
        AsmCardModule,
        SharedModule
    ]
})
export class LogoutModule
{
}

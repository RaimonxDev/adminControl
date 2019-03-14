import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material';
import { AsmCardModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { LogoutComponent } from 'app/modules/admin/pages/authentication/logout/logout.component';

const routes: Route[] = [
    {
        path     : '',
        component: LogoutComponent
    }
];

@NgModule({
    declarations: [
        LogoutComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatSelectModule,
        AsmCardModule,
        SharedModule
    ]
})
export class LogoutModule
{
}

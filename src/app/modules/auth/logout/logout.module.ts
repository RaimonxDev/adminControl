import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { LogoutComponent } from 'app/modules/auth/logout/logout.component';

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
        SharedModule
    ]
})
export class LogoutModule
{
}

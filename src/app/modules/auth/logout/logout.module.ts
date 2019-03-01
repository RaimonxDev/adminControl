import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { AuthLogoutComponent } from 'app/modules/auth/logout/logout.component';

const routes: Route[] = [
    {
        path     : '',
        component: AuthLogoutComponent
    }
];

@NgModule({
    declarations: [
        AuthLogoutComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class AuthLogoutModule
{
}

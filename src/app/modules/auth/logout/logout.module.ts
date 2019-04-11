import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsmCardModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { AuthLogoutComponent } from 'app/modules/auth/logout/logout.component';
import { authLogoutRoutes } from 'app/modules/auth/logout/logout.routing';

@NgModule({
    declarations: [
        AuthLogoutComponent
    ],
    imports     : [
        RouterModule.forChild(authLogoutRoutes),
        AsmCardModule,
        SharedModule
    ]
})
export class AuthLogoutModule
{
}

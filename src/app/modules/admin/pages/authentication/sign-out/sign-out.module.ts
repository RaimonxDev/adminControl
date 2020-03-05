import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AsmCardModule } from '@assembly/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { SignOutComponent } from 'app/modules/admin/pages/authentication/sign-out/sign-out.component';
import { signOutRoutes } from 'app/modules/admin/pages/authentication/sign-out/sign-out.routing';

@NgModule({
    declarations: [
        SignOutComponent
    ],
    imports     : [
        RouterModule.forChild(signOutRoutes),
        MatButtonModule,
        AsmCardModule,
        SharedModule
    ]
})
export class SignOutModule
{
}

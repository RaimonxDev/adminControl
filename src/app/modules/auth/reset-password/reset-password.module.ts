import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AsmMessageModule, AsmSpinnerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { AuthResetPasswordComponent } from 'app/modules/auth/reset-password/reset-password.component';

const routes: Route[] = [
    {
        path     : '',
        component: AuthResetPasswordComponent
    }
];

@NgModule({
    declarations: [
        AuthResetPasswordComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        AsmMessageModule,
        AsmSpinnerModule,
        SharedModule
    ]
})
export class AuthResetPasswordModule
{
}

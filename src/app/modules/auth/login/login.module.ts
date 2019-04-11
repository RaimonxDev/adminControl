import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AsmCardModule, AsmMessageModule, AsmSpinnerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { AuthLoginComponent } from 'app/modules/auth/login/login.component';
import { authLoginRoutes } from 'app/modules/auth/login/login.routing';

@NgModule({
    declarations: [
        AuthLoginComponent
    ],
    imports     : [
        RouterModule.forChild(authLoginRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        AsmCardModule,
        AsmMessageModule,
        AsmSpinnerModule,
        SharedModule
    ]
})
export class AuthLoginModule
{
}

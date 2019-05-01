import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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

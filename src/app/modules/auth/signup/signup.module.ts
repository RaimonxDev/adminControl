import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AsmCardModule, AsmMessageModule, AsmSpinnerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignupComponent } from 'app/modules/auth/signup/signup.component';
import { authSignupRoutes } from 'app/modules/auth/signup/signup.routing';

@NgModule({
    declarations: [
        AuthSignupComponent
    ],
    imports     : [
        RouterModule.forChild(authSignupRoutes),
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
export class AuthSignupModule
{
}

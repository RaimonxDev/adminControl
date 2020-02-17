import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AsmCardModule } from '@assembly/card';
import { AsmMessageModule } from '@assembly/message';
import { AsmSpinnerModule } from '@assembly/spinner';
import { SharedModule } from 'app/core/shared/shared.module';
import { SignUpComponent } from 'app/modules/admin/pages/authentication/sign-up/sign-up.component';
import { signupRoutes } from 'app/modules/admin/pages/authentication/sign-up/sign-up.routing';

@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports     : [
        RouterModule.forChild(signupRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        AsmCardModule,
        AsmMessageModule,
        AsmSpinnerModule,
        SharedModule
    ]
})
export class SignUpModule
{
}

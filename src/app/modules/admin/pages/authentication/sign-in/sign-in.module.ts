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
import { SignInComponent } from 'app/modules/admin/pages/authentication/sign-in/sign-in.component';
import { signInRoutes } from 'app/modules/admin/pages/authentication/sign-in/sign-in.routing';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports     : [
        RouterModule.forChild(signInRoutes),
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
export class SignInModule
{
}

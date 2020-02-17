import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AsmCardModule } from '@assembly/components/card';
import { AsmMessageModule } from '@assembly/components/message';
import { AsmSpinnerModule } from '@assembly/components/spinner';
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

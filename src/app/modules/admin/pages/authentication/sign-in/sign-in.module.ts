import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsmCardModule } from '@assembly/components/card';
import { AsmMessageModule } from '@assembly/components/message';
import { SharedModule } from 'app/shared/shared.module';
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
        MatProgressSpinnerModule,
        AsmCardModule,
        AsmMessageModule,
        SharedModule
    ]
})
export class SignInModule
{
}

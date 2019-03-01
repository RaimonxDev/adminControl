import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AsmMessageModule, AsmSpinnerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignupComponent } from 'app/modules/auth/signup/signup.component';

const routes: Route[] = [
    {
        path     : '',
        component: AuthSignupComponent
    }
];

@NgModule({
    declarations: [
        AuthSignupComponent
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
export class AuthSignupModule
{
}

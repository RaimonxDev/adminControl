import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { AsmMessageModule, AsmSpinnerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { SignupComponent } from 'app/modules/auth/signup/signup.component';

const routes: Route[] = [
    {
        path     : '',
        component: SignupComponent
    }
];

@NgModule({
    declarations: [
        SignupComponent
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
export class SignupModule
{
}

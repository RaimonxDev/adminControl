import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { AsmMessageModule, AsmSpinnerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { LoginComponent } from 'app/modules/auth/login/login.component';

const routes: Route[] = [
    {
        path     : '',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
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
export class LoginModule
{
}

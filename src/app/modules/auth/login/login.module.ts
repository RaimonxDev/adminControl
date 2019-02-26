import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AsmMessageModule } from '@assembly';
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
        SharedModule
    ]
})
export class LoginModule
{
}

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AsmMessageModule, AsmSpinnerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { AuthUnlockSessionComponent } from 'app/modules/auth/unlock-session/unlock-session.component';

const routes: Route[] = [
    {
        path     : '',
        component: AuthUnlockSessionComponent
    }
];

@NgModule({
    declarations: [
        AuthUnlockSessionComponent
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
export class AuthUnlockSessionModule
{
}

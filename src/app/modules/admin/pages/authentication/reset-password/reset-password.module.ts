import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AsmCardModule, AsmMessageModule, AsmSpinnerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { ResetPasswordComponent } from 'app/modules/admin/pages/authentication/reset-password/reset-password.component';
import { resetPasswordRoutes } from 'app/modules/admin/pages/authentication/reset-password/reset-password.routing';

@NgModule({
    declarations: [
        ResetPasswordComponent
    ],
    imports     : [
        RouterModule.forChild(resetPasswordRoutes),
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
export class ResetPasswordModule
{
}

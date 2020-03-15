import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsmCardModule } from '@assembly/components/card';
import { AsmMessageModule } from '@assembly/components/message';
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
        MatProgressSpinnerModule,
        AsmCardModule,
        AsmMessageModule,
        SharedModule
    ]
})
export class ResetPasswordModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { AsmCardModule, AsmMessageModule, AsmSpinnerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { ConfirmationRequiredComponent } from 'app/modules/admin/pages/authentication/confirmation-required/confirmation-required.component';
import { confirmationRequiredRoutes } from 'app/modules/admin/pages/authentication/confirmation-required/confirmation-required.routing';

@NgModule({
    declarations: [
        ConfirmationRequiredComponent
    ],
    imports     : [
        RouterModule.forChild(confirmationRequiredRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        AsmCardModule,
        AsmMessageModule,
        AsmSpinnerModule,
        SharedModule
    ]
})
export class ConfirmationRequiredModule
{
}

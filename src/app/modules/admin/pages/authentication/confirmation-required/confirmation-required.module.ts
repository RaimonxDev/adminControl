import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AsmCardModule } from '@assembly/card';
import { SharedModule } from 'app/core/shared/shared.module';
import { ConfirmationRequiredComponent } from 'app/modules/admin/pages/authentication/confirmation-required/confirmation-required.component';
import { confirmationRequiredRoutes } from 'app/modules/admin/pages/authentication/confirmation-required/confirmation-required.routing';

@NgModule({
    declarations: [
        ConfirmationRequiredComponent
    ],
    imports     : [
        RouterModule.forChild(confirmationRequiredRoutes),
        MatButtonModule,
        AsmCardModule,
        SharedModule
    ]
})
export class ConfirmationRequiredModule
{
}

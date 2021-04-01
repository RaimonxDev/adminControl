import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TreoCardModule } from '@treo/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { AuthConfirmationRequiredComponent } from 'app/modules/auth/confirmation-required/confirmation-required.component';
import { authConfirmationRequiredRoutes } from 'app/modules/auth/confirmation-required/confirmation-required.routing';
import { FormularioModulesModule } from 'app/shared/formulario-modules.module';

@NgModule({
    declarations: [
        AuthConfirmationRequiredComponent
    ],
    imports     : [
        RouterModule.forChild(authConfirmationRequiredRoutes),
        MatButtonModule,
        TreoCardModule,
        SharedModule,
        FormularioModulesModule
    ]
})
export class AuthConfirmationRequiredModule
{
}

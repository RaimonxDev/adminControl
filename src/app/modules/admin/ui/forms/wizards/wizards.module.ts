import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { AsmCardModule } from '@assembly/card';
import { SharedModule } from 'app/core/shared/shared.module';
import { FormsWizardsComponent } from 'app/modules/admin/ui/forms/wizards/wizards.component';
import { formsWizardsRoutes } from 'app/modules/admin/ui/forms/wizards/wizards.routing';

@NgModule({
    declarations: [
        FormsWizardsComponent
    ],
    imports     : [
        RouterModule.forChild(formsWizardsRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatStepperModule,
        AsmCardModule,
        SharedModule
    ]
})
export class FormsWizardsModule
{
}

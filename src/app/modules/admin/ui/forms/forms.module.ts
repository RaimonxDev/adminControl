import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { AsmCardModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { FormsComponent } from 'app/modules/admin/ui/forms/forms.component';
import { FormsFieldsComponent } from 'app/modules/admin/ui/forms/fields/fields.component';
import { FormsLayoutsComponent } from 'app/modules/admin/ui/forms/layouts/layouts.component';
import { formsRoutes } from 'app/modules/admin/ui/forms/forms.routing';

@NgModule({
    declarations: [
        FormsComponent,
        FormsFieldsComponent,
        FormsLayoutsComponent
    ],
    imports     : [
        RouterModule.forChild(formsRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRadioModule,
        MatSelectModule,
        AsmCardModule,
        SharedModule
    ]
})
export class FormsModule
{
}

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
import { FormsFieldsComponent } from 'app/modules/admin/ui/forms/fields/fields.component';
import { formsFieldsRoutes } from 'app/modules/admin/ui/forms/fields/fields.routing';

@NgModule({
    declarations: [
        FormsFieldsComponent,
    ],
    imports     : [
        RouterModule.forChild(formsFieldsRoutes),
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
export class FormsFieldsModule
{
}

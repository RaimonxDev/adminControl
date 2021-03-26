import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { TreoAutogrowModule } from '@treo/directives/autogrow';
import { SharedModule } from 'app/shared/shared.module';
import { FormsFieldsComponent } from 'app/modules/admin/ui/forms/fields/fields.component';

export const routes: Route[] = [
    {
        path     : '',
        component: FormsFieldsComponent
    }
];

@NgModule({
    declarations: [
        FormsFieldsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatSelectModule,
        TreoAutogrowModule,
        SharedModule
    ]
})
export class FormsFieldsModule
{
}

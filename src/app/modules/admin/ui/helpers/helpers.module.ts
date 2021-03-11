import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { TreoCardModule } from '@treo/components/card';
import { TreoHighlightModule } from '@treo/components/highlight';
import { TreoAlertModule } from '@treo/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { HelpersComponent } from 'app/modules/admin/ui/helpers/helpers.component';

export const routes: Route[] = [
    {
        path     : '',
        component: HelpersComponent
    }
];

@NgModule({
    declarations: [
        HelpersComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMomentDateModule,
        MatSelectModule,
        MatTabsModule,
        TreoCardModule,
        TreoHighlightModule,
        TreoAlertModule,
        SharedModule
    ]
})
export class HelpersModule
{
}

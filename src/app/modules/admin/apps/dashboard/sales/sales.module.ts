import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardSalesComponent } from 'app/modules/admin/apps/dashboard/sales/sales.component';
import { dashboardSalesRoutes } from 'app/modules/admin/apps/dashboard/sales/sales.routing';

@NgModule({
    declarations: [
        DashboardSalesComponent
    ],
    imports     : [
        RouterModule.forChild(dashboardSalesRoutes),
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
        NgApexchartsModule,
        SharedModule
    ]
})
export class DashboardSalesModule
{
}

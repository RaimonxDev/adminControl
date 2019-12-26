import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { dashboardSalesRoutes } from 'app/modules/admin/apps/dashboard/sales/sales.routing';
import { DashboardSalesComponent } from 'app/modules/admin/apps/dashboard/sales/sales.component';

@NgModule({
    declarations: [
        DashboardSalesComponent
    ],
    imports     : [
        RouterModule.forChild(dashboardSalesRoutes),
        MatIconModule,
        NgApexchartsModule,
        SharedModule
    ]
})
export class DashboardSalesModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardAnalyticsComponent } from 'app/modules/admin/apps/dashboard/analytics/analytics.component';
import { dashboardAnalyticsRoutes } from 'app/modules/admin/apps/dashboard/analytics/analytics.routing';

@NgModule({
    declarations: [
        DashboardAnalyticsComponent
    ],
    imports     : [
        RouterModule.forChild(dashboardAnalyticsRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSortModule,
        MatTableModule,
        NgApexchartsModule,
        SharedModule
    ]
})
export class DashboardAnalyticsModule
{
}

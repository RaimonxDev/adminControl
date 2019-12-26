import { Route } from '@angular/router';
import { DashboardSalesComponent } from 'app/modules/admin/apps/dashboard/sales/sales.component';
import { DashboardSalesResolver } from 'app/modules/admin/apps/dashboard/sales/sales.resolvers';

export const dashboardSalesRoutes: Route[] = [
    {
        path     : '',
        component: DashboardSalesComponent,
        resolve  : {
            sales: DashboardSalesResolver
        }
    }
];

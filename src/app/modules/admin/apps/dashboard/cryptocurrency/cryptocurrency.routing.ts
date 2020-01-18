import { Route } from '@angular/router';
import { DashboardCryptocurrencyComponent } from 'app/modules/admin/apps/dashboard/cryptocurrency/cryptocurrency.component';
import { DashboardCryptocurrencyResolver } from 'app/modules/admin/apps/dashboard/cryptocurrency/cryptocurrency.resolvers';

export const dashboardCryptocurrencyRoutes: Route[] = [
    {
        path     : '',
        component: DashboardCryptocurrencyComponent,
        resolve  : {
            sales: DashboardCryptocurrencyResolver
        }
    }
];

import { Route } from '@angular/router';
import { DashboardCryptoComponent } from 'app/modules/admin/apps/dashboard/crypto/crypto.component';
import { DashboardCryptoResolver } from 'app/modules/admin/apps/dashboard/crypto/crypto.resolvers';

export const dashboardCryptoRoutes: Route[] = [
    {
        path     : '',
        component: DashboardCryptoComponent,
        resolve  : {
            sales: DashboardCryptoResolver
        }
    }
];

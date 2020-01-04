import { Route } from '@angular/router';
import { DashboardAnalyticsComponent } from 'app/modules/admin/apps/dashboard/analytics/analytics.component';
import { DashboardAnalyticsResolver } from 'app/modules/admin/apps/dashboard/analytics/analytics.resolvers';

export const dashboardAnalyticsRoutes: Route[] = [
    {
        path     : '',
        component: DashboardAnalyticsComponent,
        resolve  : {
            sales: DashboardAnalyticsResolver
        }
    }
];

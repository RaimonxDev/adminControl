import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/core/auth/guards/auth.guard';

// Routes
const routes: Route[] = [
    {
        // Redirect /apps to /apps/dashboard
        path      : 'apps',
        redirectTo: 'apps/dashboard',
        pathMatch : 'full'
    },
    {
        path    : 'apps',
        children: [
            {
                path        : 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                canActivate : [AuthGuard]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AppsModule
{
}

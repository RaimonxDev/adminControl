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
            },
            {
                path        : 'mailbox',
                loadChildren: './mailbox/mailbox.module#MailboxModule',
                canActivate : [AuthGuard]
            },
            {
                path        : 'tasks',
                loadChildren: './tasks/tasks.module#TasksModule',
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

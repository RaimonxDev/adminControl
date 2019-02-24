import { Route } from '@angular/router';
import { AdminResolver } from 'app/modules/admin/admin.resolvers';
import { LayoutsComponent } from 'app/core/layouts/layouts.component';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';

export const adminRoutes: Route[] = [
    {
        path       : '',
        component  : LayoutsComponent,
        canActivate: [AuthGuard],
        resolve    : {
            admin: AdminResolver
        },
        children   : [
            // Redirect / to /apps/dashboard
            {
                path      : '',
                redirectTo: 'apps/dashboard',
                pathMatch : 'full'
            },
            // Apps
            {
                path        : 'apps/dashboard',
                loadChildren: './apps/dashboard/dashboard.module#DashboardModule'
            },
            {
                path        : 'apps/mailbox',
                loadChildren: './apps/mailbox/mailbox.module#MailboxModule'
            },
            {
                path        : 'apps/tasks',
                loadChildren: './apps/tasks/tasks.module#TasksModule'
            },
            // Pages
            {
                path        : 'pages/errors/404',
                loadChildren: './pages/errors/error-404/error-404.module#Error404Module'
            },
            // User Interface
            {
                path        : 'ui/icons',
                loadChildren: './ui/icons/icons.module#IconsModule'
            },
            // Documentation
            {
                path        : 'docs',
                loadChildren: './docs/docs.module#DocsModule'
            },
            // 404
            {
                path        : '404-not-found',
                pathMatch   : 'full',
                loadChildren: './pages/errors/error-404/error-404.module#Error404Module'
            },
            // Catch all
            {
                path      : '**',
                redirectTo: '404-not-found'
            }
        ]
    }
];

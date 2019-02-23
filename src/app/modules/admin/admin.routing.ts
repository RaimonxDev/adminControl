import { Route } from '@angular/router';
import { AdminResolver } from 'app/modules/admin/admin.resolvers';

export const adminRoutes: Route[] = [
    {
        // Redirect / to /apps/dashboard
        path      : '',
        redirectTo: 'apps/dashboard',
        pathMatch : 'full'
    },
    {
        path    : '',
        resolve : {
            admin: AdminResolver
        },
        children: [
            {
                // Apps
                path    : 'apps',
                children: [
                    {
                        path        : 'dashboard',
                        loadChildren: './apps/dashboard/dashboard.module#DashboardModule'
                    },
                    {
                        path        : 'mailbox',
                        loadChildren: './apps/mailbox/mailbox.module#MailboxModule'
                    },
                    {
                        path        : 'tasks',
                        loadChildren: './apps/tasks/tasks.module#TasksModule'
                    }
                ]
            },
            {
                // Pages
                path    : 'pages',
                children: []
            },
            {
                // User Interface
                path    : 'ui',
                children: [
                    {
                        path        : 'icons',
                        loadChildren: './ui/icons/icons.module#IconsModule'
                    }
                ]
            },
            {
                // Documentation
                path        : 'docs',
                loadChildren: './docs/docs.module#DocsModule'
            }
        ]
    }
];

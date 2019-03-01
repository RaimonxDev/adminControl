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

            // Pages
            {
                path    : 'pages',
                children: [

                    // Authentication
                    {
                        path        : 'authentication/confirmation-required',
                        loadChildren: './pages/authentication/confirmation-required/confirmation-required.module#ConfirmationRequiredModule'
                    },
                    {
                        path        : 'authentication/forgot-password',
                        loadChildren: './pages/authentication/forgot-password/forgot-password.module#ForgotPasswordModule'
                    },
                    {
                        path        : 'authentication/login',
                        loadChildren: './pages/authentication/login/login.module#LoginModule'
                    },
                    {
                        path        : 'authentication/logout',
                        loadChildren: './pages/authentication/logout/logout.module#LogoutModule'
                    },
                    {
                        path        : 'authentication/reset-password',
                        loadChildren: './pages/authentication/reset-password/reset-password.module#ResetPasswordModule'
                    },
                    {
                        path        : 'authentication/signup',
                        loadChildren: './pages/authentication/signup/signup.module#SignupModule'
                    },
                    {
                        path        : 'authentication/unlock-session',
                        loadChildren: './pages/authentication/unlock-session/unlock-session.module#UnlockSessionModule'
                    },

                    // Coming soon
                    {
                        path        : 'coming-soon',
                        loadChildren: './pages/coming-soon/coming-soon.module#ComingSoonModule'
                    },

                    // Errors
                    {
                        path        : 'errors/404',
                        loadChildren: './pages/errors/error-404/error-404.module#Error404Module'
                    }
                ]
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

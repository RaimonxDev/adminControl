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
                        path    : 'authentication',
                        children: [
                            {
                                path        : 'confirmation-required',
                                loadChildren: './pages/authentication/confirmation-required/confirmation-required.module#ConfirmationRequiredModule'
                            },
                            {
                                path        : 'forgot-password',
                                loadChildren: './pages/authentication/forgot-password/forgot-password.module#ForgotPasswordModule'
                            },
                            {
                                path        : 'login',
                                loadChildren: './pages/authentication/login/login.module#LoginModule'
                            },
                            {
                                path        : 'logout',
                                loadChildren: './pages/authentication/logout/logout.module#LogoutModule'
                            },
                            {
                                path        : 'reset-password',
                                loadChildren: './pages/authentication/reset-password/reset-password.module#ResetPasswordModule'
                            },
                            {
                                path        : 'signup',
                                loadChildren: './pages/authentication/signup/signup.module#SignupModule'
                            },
                            {
                                path        : 'unlock-session',
                                loadChildren: './pages/authentication/unlock-session/unlock-session.module#UnlockSessionModule'
                            }
                        ]
                    },

                    // Coming soon
                    {
                        path        : 'coming-soon',
                        loadChildren: './pages/coming-soon/coming-soon.module#ComingSoonModule'
                    },

                    // Errors
                    {
                        path    : 'errors',
                        children: [
                            {
                                path        : '404',
                                loadChildren: './pages/errors/error-404/error-404.module#Error404Module'
                            },
                            {
                                path        : '500',
                                loadChildren: './pages/errors/error-500/error-500.module#Error500Module'
                            }
                        ]
                    },

                    // Maintenance
                    {
                        path        : 'maintenance',
                        loadChildren: './pages/maintenance/maintenance.module#MaintenanceModule'
                    },

                    // Pricing
                    {
                        path    : 'pricing',
                        children: [
                            {
                                path        : 'modern',
                                loadChildren: './pages/pricing/modern/modern.module#PricingModernModule'
                            },
                            {
                                path        : 'simple',
                                loadChildren: './pages/pricing/simple/simple.module#PricingSimpleModule'
                            }
                        ]
                    }
                ]
            },

            // User Interface
            {
                path    : 'ui',
                children: [

                    // Animations
                    {
                        path        : 'animations',
                        loadChildren: './ui/animations/animations.module#AnimationsModule'
                    },

                    // Cards
                    {
                        path    : 'cards',
                        children: [
                            {
                                path        : 'content',
                                loadChildren: './ui/cards/content/content.module#CardsContentModule'
                            }
                        ]
                    },

                    // Colors
                    {
                        path        : 'colors',
                        loadChildren: './ui/colors/colors.module#ColorsModule'
                    },

                    // Icons
                    {
                        path        : 'icons',
                        loadChildren: './ui/icons/icons.module#IconsModule'
                    }
                ]
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

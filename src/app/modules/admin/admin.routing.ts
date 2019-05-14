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

                    // Dashboard
                    {
                        path        : 'dashboard',
                        loadChildren: () => import('./apps/dashboard/dashboard.module')
                            .then(m => m.DashboardModule)
                    },

                    // Mailbox
                    {
                        path        : 'mailbox',
                        loadChildren: () => import('./apps/mailbox/mailbox.module')
                            .then(m => m.MailboxModule)
                    },

                    // Tasks
                    {
                        path        : 'tasks',
                        loadChildren: () => import('./apps/tasks/tasks.module')
                            .then(m => m.TasksModule)
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

                            // Confirmation required
                            {
                                path        : 'confirmation-required',
                                loadChildren: () => import('./pages/authentication/confirmation-required/confirmation-required.module')
                                    .then(m => m.ConfirmationRequiredModule)
                            },

                            // Forgot password
                            {
                                path        : 'forgot-password',
                                loadChildren: () => import('./pages/authentication/forgot-password/forgot-password.module')
                                    .then(m => m.ForgotPasswordModule)
                            },

                            // Login
                            {
                                path        : 'login',
                                loadChildren: () => import('./pages/authentication/login/login.module')
                                    .then(m => m.LoginModule)
                            },

                            // Logout
                            {
                                path        : 'logout',
                                loadChildren: () => import('./pages/authentication/logout/logout.module')
                                    .then(m => m.LogoutModule)
                            },

                            // Reset password
                            {
                                path        : 'reset-password',
                                loadChildren: () => import('./pages/authentication/reset-password/reset-password.module')
                                    .then(m => m.ResetPasswordModule)
                            },

                            // Signup
                            {
                                path        : 'signup',
                                loadChildren: () => import('./pages/authentication/signup/signup.module')
                                    .then(m => m.SignupModule)
                            },

                            // Unlock session
                            {
                                path        : 'unlock-session',
                                loadChildren: () => import('./pages/authentication/unlock-session/unlock-session.module')
                                    .then(m => m.UnlockSessionModule)
                            }
                        ]
                    },

                    // Coming soon
                    {
                        path        : 'coming-soon',
                        loadChildren: () => import('./pages/coming-soon/coming-soon.module')
                            .then(m => m.ComingSoonModule)
                    },

                    // Errors
                    {
                        path    : 'errors',
                        children: [

                            // 404
                            {
                                path        : '404',
                                loadChildren: () => import('./pages/errors/error-404/error-404.module')
                                    .then(m => m.Error404Module)
                            },

                            // 500
                            {
                                path        : '500',
                                loadChildren: () => import('./pages/errors/error-500/error-500.module')
                                    .then(m => m.Error500Module)
                            }
                        ]
                    },

                    // Maintenance
                    {
                        path        : 'maintenance',
                        loadChildren: () => import('./pages/maintenance/maintenance.module')
                            .then(m => m.MaintenanceModule)
                    },

                    // Pricing
                    {
                        path    : 'pricing',
                        children: [
                            {
                                path        : 'modern',
                                loadChildren: () => import('./pages/pricing/modern/modern.module')
                                    .then(m => m.PricingModernModule)
                            },
                            {
                                path        : 'simple',
                                loadChildren: () => import('./pages/pricing/simple/simple.module')
                                    .then(m => m.PricingSimpleModule)
                            }
                        ]
                    }
                ]
            },

            // User Interface
            {
                path    : 'ui',
                children: [

                    // Angular Material
                    {
                        path        : 'angular-material',
                        loadChildren: () => import('./ui/angular-material/angular-material.module')
                            .then(m => m.AngularMaterialModule)
                    },

                    // Colors
                    {
                        path        : 'colors',
                        loadChildren: () => import('./ui/colors/colors.module')
                            .then(m => m.ColorsModule)
                    },

                    // Content layouts
                    {
                        path    : 'content-layouts',
                        children: [

                            // Fullwidth
                            {
                                path    : 'fullwidth',
                                children: [

                                    // Basic
                                    {
                                        path        : 'basic',
                                        loadChildren: () => import('./ui/content-layouts/fullwidth/basic/basic.module')
                                            .then(m => m.FullwidthBasicModule)
                                    },

                                    // Standard
                                    {
                                        path        : 'standard',
                                        loadChildren: () => import('./ui/content-layouts/fullwidth/standard/standard.module')
                                            .then(m => m.FullwidthStandardModule)
                                    },

                                    // Tabs
                                    {
                                        path        : 'tabs',
                                        loadChildren: () => import('./ui/content-layouts/fullwidth/tabs/tabs.module')
                                            .then(m => m.FullwidthTabsModule)
                                    },

                                    // Tabs navigation
                                    {
                                        path        : 'tabs-navigation',
                                        loadChildren: () => import('./ui/content-layouts/fullwidth/tabs-navigation/tabs-navigation.module')
                                            .then(m => m.FullwidthTabsNavigationModule)
                                    }
                                ]
                            },

                            // Left sidebar
                            {
                                path    : 'left-sidebar',
                                children: [

                                    // Fullheight
                                    {
                                        path    : 'fullheight',
                                        children: [

                                            // Basic
                                            {
                                                path        : 'basic',
                                                loadChildren: () => import('./ui/content-layouts/left-sidebar/fullheight/basic/basic.module')
                                                    .then(m => m.LeftSidebarFullheightBasicModule)
                                            },

                                            // Standard
                                            {
                                                path        : 'standard',
                                                loadChildren: () => import('./ui/content-layouts/left-sidebar/fullheight/standard/standard.module')
                                                    .then(m => m.LeftSidebarFullheightStandardModule)
                                            },

                                            // Tabs
                                            {
                                                path        : 'tabs',
                                                loadChildren: () => import('./ui/content-layouts/left-sidebar/fullheight/tabs/tabs.module')
                                                    .then(m => m.LeftSidebarFullheightTabsModule)
                                            },

                                            // Tabs navigation
                                            {
                                                path        : 'tabs-navigation',
                                                loadChildren: () => import('./ui/content-layouts/left-sidebar/fullheight/tabs-navigation/tabs-navigation.module')
                                                    .then(m => m.LeftSidebarFullheightTabsNavigationModule)
                                            }
                                        ]
                                    },

                                    // Content
                                    {
                                        path    : 'content',
                                        children: [

                                            // Standard
                                            {
                                                path        : 'standard',
                                                loadChildren: () => import('./ui/content-layouts/left-sidebar/content/standard/standard.module')
                                                    .then(m => m.LeftSidebarContentStandardModule)
                                            },

                                            // Tabs
                                            {
                                                path        : 'tabs',
                                                loadChildren: () => import('./ui/content-layouts/left-sidebar/content/tabs/tabs.module')
                                                    .then(m => m.LeftSidebarContentTabsModule)
                                            },

                                            // Tabs navigation
                                            {
                                                path        : 'tabs-navigation',
                                                loadChildren: () => import('./ui/content-layouts/left-sidebar/content/tabs-navigation/tabs-navigation.module')
                                                    .then(m => m.LeftSidebarContentTabsNavigationModule)
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                    // Icons
                    {
                        path        : 'icons',
                        loadChildren: () => import('./ui/icons/icons.module')
                            .then(m => m.IconsModule)
                    }
                ]
            },

            // Assembly
            {
                path    : 'assembly',
                children: [
                    {

                        // Components
                        path    : 'components',
                        children: [

                            // Animations
                            {
                                path        : 'animations',
                                loadChildren: () => import('./assembly/components/animations/animations.module')
                                    .then(m => m.AnimationsModule)
                            },

                            // Cards
                            {
                                path    : 'cards',
                                children: [
                                    {
                                        path        : 'content',
                                        loadChildren: () => import('./assembly/components/cards/content/content.module')
                                            .then(m => m.CardsContentModule)
                                    }
                                ]
                            },

                            // Messages
                            {
                                path        : 'messages',
                                loadChildren: () => import('./assembly/components/messages/messages.module')
                                    .then(m => m.MessagesModule)
                            },

                            // Navigation
                            {
                                path        : 'navigation',
                                loadChildren: () => import('./assembly/components/navigation/navigation.module')
                                    .then(m => m.NavigationModule)
                            }
                        ]
                    }
                ]
            },

            // Documentation
            {
                path        : 'docs',
                loadChildren: () => import('./docs/docs.module')
                    .then(m => m.DocsModule)
            },

            // 404
            {
                path        : '404-not-found',
                pathMatch   : 'full',
                loadChildren: () => import('./pages/errors/error-404/error-404.module')
                    .then(m => m.Error404Module)
            },

            // Catch all
            {
                path      : '**',
                redirectTo: '404-not-found'
            }
        ]
    }
];

import { Route } from '@angular/router';
import { AdminResolver } from 'app/modules/admin/admin.resolvers';
import { LayoutsComponent } from 'app/core/layouts/layouts.component';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';

/* tslint:disable:max-line-length */
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
                        loadChildren: './apps/dashboard/dashboard.module#DashboardModule'
                    },

                    // Mailbox
                    {
                        path        : 'mailbox',
                        loadChildren: './apps/mailbox/mailbox.module#MailboxModule'
                    },

                    // Tasks
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

                            // Confirmation required
                            {
                                path        : 'confirmation-required',
                                loadChildren: './pages/authentication/confirmation-required/confirmation-required.module#ConfirmationRequiredModule'
                            },

                            // Forgot password
                            {
                                path        : 'forgot-password',
                                loadChildren: './pages/authentication/forgot-password/forgot-password.module#ForgotPasswordModule'
                            },

                            // Login
                            {
                                path        : 'login',
                                loadChildren: './pages/authentication/login/login.module#LoginModule'
                            },

                            // Logout
                            {
                                path        : 'logout',
                                loadChildren: './pages/authentication/logout/logout.module#LogoutModule'
                            },

                            // Reset password
                            {
                                path        : 'reset-password',
                                loadChildren: './pages/authentication/reset-password/reset-password.module#ResetPasswordModule'
                            },

                            // Signup
                            {
                                path        : 'signup',
                                loadChildren: './pages/authentication/signup/signup.module#SignupModule'
                            },

                            // Unlock session
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

                            // 404
                            {
                                path        : '404',
                                loadChildren: './pages/errors/error-404/error-404.module#Error404Module'
                            },

                            // 500
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

                    // Angular Material
                    {
                        path        : 'angular-material',
                        loadChildren: './ui/angular-material/angular-material.module#AngularMaterialModule'
                    },

                    // Colors
                    {
                        path        : 'colors',
                        loadChildren: './ui/colors/colors.module#ColorsModule'
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
                                        loadChildren: './ui/content-layouts/fullwidth/basic/basic.module#FullwidthBasicModule'
                                    },

                                    // Standard
                                    {
                                        path        : 'standard',
                                        loadChildren: './ui/content-layouts/fullwidth/standard/standard.module#FullwidthStandardModule'
                                    },

                                    // Tabs
                                    {
                                        path        : 'tabs',
                                        loadChildren: './ui/content-layouts/fullwidth/tabs/tabs.module#FullwidthTabsModule'
                                    },

                                    // Tabs navigation
                                    {
                                        path        : 'tabs-navigation',
                                        loadChildren: './ui/content-layouts/fullwidth/tabs-navigation/tabs-navigation.module#FullwidthTabsNavigationModule'
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
                                                loadChildren: './ui/content-layouts/left-sidebar/fullheight/basic/basic.module#LeftSidebarFullheightBasicModule'
                                            },

                                            // Standard
                                            {
                                                path        : 'standard',
                                                loadChildren: './ui/content-layouts/left-sidebar/fullheight/standard/standard.module#LeftSidebarFullheightStandardModule'
                                            },

                                            // Tabs
                                            {
                                                path        : 'tabs',
                                                loadChildren: './ui/content-layouts/left-sidebar/fullheight/tabs/tabs.module#LeftSidebarFullheightTabsModule'
                                            },

                                            // Tabs navigation
                                            // {
                                                // path        : 'tabs-navigation',
                                                // loadChildren: './ui/content-layouts/left-sidebar/fullheight/tabs-navigation/tabs-navigation.module#LeftSidebarFullheightTabsNavigationModule'
                                            // }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                    // Icons
                    {
                        path        : 'icons',
                        loadChildren: './ui/icons/icons.module#IconsModule'
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
                                loadChildren: './assembly/components/animations/animations.module#AnimationsModule'
                            },

                            // Cards
                            {
                                path    : 'cards',
                                children: [
                                    {
                                        path        : 'content',
                                        loadChildren: './assembly/components/cards/content/content.module#CardsContentModule'
                                    }
                                ]
                            },

                            // Messages
                            {
                                path        : 'messages',
                                loadChildren: './assembly/components/messages/messages.module#MessagesModule'
                            },

                            // Navigation
                            {
                                path        : 'navigation',
                                loadChildren: './assembly/components/navigation/navigation.module#NavigationModule'
                            }
                        ]
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

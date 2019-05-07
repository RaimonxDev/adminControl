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

                                    // Basic inner scroll
                                    {
                                        path        : 'basic-inner-scroll',
                                        loadChildren: './ui/content-layouts/fullwidth/basic-inner-scroll/basic-inner-scroll.module#FullwidthBasicInnerScrollModule'
                                    },

                                    // Standard
                                    {
                                        path        : 'standard',
                                        loadChildren: './ui/content-layouts/fullwidth/standard/standard.module#FullwidthStandardModule'
                                    },

                                    // Standard inner scroll
                                    {
                                        path        : 'standard-inner-scroll',
                                        loadChildren: './ui/content-layouts/fullwidth/standard-inner-scroll/standard-inner-scroll.module#FullwidthStandardInnerScrollModule'
                                    },

                                    // Tabbed
                                    {
                                        path        : 'tabbed',
                                        loadChildren: './ui/content-layouts/fullwidth/tabbed/tabbed.module#FullwidthTabbedModule'
                                    },

                                    // Tabbed inner scroll
                                    {
                                        path        : 'tabbed-inner-scroll',
                                        loadChildren: './ui/content-layouts/fullwidth/tabbed-inner-scroll/tabbed-inner-scroll.module#FullwidthTabbedInnerScrollModule'
                                    },

                                    // Tabbed nav
                                    {
                                        path        : 'tabbed-nav',
                                        loadChildren: './ui/content-layouts/fullwidth/tabbed-nav/tabbed-nav.module#FullwidthTabbedNavModule'
                                    },

                                    // Tabbed nav inner scroll
                                    {
                                        path        : 'tabbed-nav-inner-scroll',
                                        loadChildren: './ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabbed-nav-inner-scroll.module#FullwidthTabbedNavInnerScrollModule'
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

                                            // Basic inner scroll
                                            {
                                                path        : 'basic-inner-scroll',
                                                loadChildren: './ui/content-layouts/left-sidebar/fullheight/basic-inner-scroll/basic-inner-scroll.module#LeftSidebarFullheightBasicInnerScrollModule'
                                            },

                                            // Standard
                                            {
                                                path        : 'standard',
                                                loadChildren: './ui/content-layouts/left-sidebar/fullheight/standard/standard.module#LeftSidebarFullheightStandardModule'
                                            },

                                            // Standard content scroll
                                            {
                                                path        : 'standard-content-scroll',
                                                loadChildren: './ui/content-layouts/left-sidebar/fullheight/standard-content-scroll/standard-content-scroll.module#LeftSidebarFullheightStandardContentScrollModule'
                                            },

                                            // Standard inner scroll
                                            {
                                                path        : 'standard-inner-scroll',
                                                loadChildren: './ui/content-layouts/left-sidebar/fullheight/standard-inner-scroll/standard-inner-scroll.module#LeftSidebarFullheightStandardInnerScrollModule'
                                            },

                                            // Tabbed
                                            {
                                                path        : 'tabbed',
                                                loadChildren: './ui/content-layouts/left-sidebar/fullheight/tabbed/tabbed.module#LeftSidebarFullheightTabbedModule'
                                            },

                                            // Tabbed content scroll
                                            {
                                                path        : 'tabbed-content-scroll',
                                                loadChildren: './ui/content-layouts/left-sidebar/fullheight/tabbed-content-scroll/tabbed-content-scroll.module#LeftSidebarFullheightTabbedContentScrollModule'
                                            },

                                            // Tabbed inner scroll
                                            {
                                                path        : 'tabbed-inner-scroll',
                                                loadChildren: './ui/content-layouts/left-sidebar/fullheight/tabbed-inner-scroll/tabbed-inner-scroll.module#LeftSidebarFullheightTabbedInnerScrollModule'
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

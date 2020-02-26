/* tslint:disable:max-line-length */
import { AsmNavigationItem } from '@assembly/navigation';

export const defaultNavigation: AsmNavigationItem[] = [
    /*{
        id      : 'applications-aside-1',
        title   : 'Applications Aside 1',
        subtitle: 'Aside is good!',
        type    : 'aside',
        icon    : 'apps',
        children: [
            {
                id      : 'dashboard',
                title   : 'Dashboard',
                subtitle: 'Health tracking',
                type    : 'basic',
                icon    : 'dashboards',
                link    : 'apps/dashboard'
            },
            {
                id      : 'calendar',
                title   : 'Calendar',
                subtitle: '3 upcoming events',
                type    : 'basic',
                icon    : 'today',
                link    : '/apps/calendar'
            },
            {
                id      : 'e-commerce',
                title   : 'E-Commerce',
                subtitle: '4 new orders',
                type    : 'collapsable',
                icon    : 'shopping_cart',
                children: [
                    {
                        id        : 'products',
                        title     : 'Products',
                        type      : 'basic',
                        link      : '/apps/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'productDetail',
                        title     : 'Product Detail',
                        type      : 'basic',
                        link      : '/apps/e-commerce/products/1/printed-dress',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'Orders',
                        type      : 'basic',
                        link      : '/apps/e-commerce/orders',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Order Detail',
                        type      : 'basic',
                        link      : '/apps/e-commerce/orders/1',
                        exactMatch: true
                    }
                ]
            },
            {
                id      : 'academy',
                title   : 'Academy',
                subtitle: 'New lessons available!',
                type    : 'basic',
                icon    : 'school',
                link    : '/apps/academy'
            },
            {
                id   : 'mail',
                title: 'Mail',
                type : 'basic',
                icon : 'email',
                link : '/apps/mail',
                badge: {
                    title     : '25',
                    background: '#F44336',
                    color     : '#FFFFFF'
                }
            },
            {
                id   : 'mail-ngrx',
                title: 'Mail Ngrx',
                type : 'basic',
                icon : 'email',
                link : '/apps/mail-ngrx',
                badge: {
                    title     : 'NEW',
                    style     : 'rectangle',
                    background: '#EC0C8E',
                    color     : '#FFFFFF'
                }
            },
            {
                id   : 'chat',
                title: 'Chat',
                type : 'basic',
                icon : 'chat',
                link : '/apps/chat',
                badge: {
                    title     : '13',
                    style     : 'simple',
                    background: '#09D261',
                    color     : '#09D261'
                }
            },
            {
                id      : 'file-manager',
                title   : 'File Manager',
                subtitle: '1.4GB of 5GB used',
                type    : 'basic',
                icon    : 'folder',
                link    : '/apps/file-manager'
            },
            {
                id   : 'contacts',
                title: 'Contacts',
                type : 'basic',
                icon : 'account_box',
                link : '/apps/contacts'
            },
            {
                id      : 'to-do',
                title   : 'To-Do',
                subtitle: '7 overdue tasks',
                type    : 'basic',
                icon    : 'check_box',
                link    : '/apps/todo',
                badge   : {
                    title     : 'HOT!',
                    style     : 'rounded',
                    background: '#FF6F00',
                    color     : '#FFFFFF'
                }
            },
            {
                id   : 'scrumboard',
                title: 'Scrumboard',
                type : 'basic',
                icon : 'assessment',
                link : '/apps/scrumboard'
            }
        ]
    },
    {
        id      : 'applications-aside-2',
        title   : 'Applications Aside 2',
        type    : 'aside',
        icon    : 'apps',
        children: [
            {
                id   : 'dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'dashboards',
                link : 'apps/dashboard'
            },
            {
                id   : 'calendar',
                title: 'Calendar',
                type : 'basic',
                icon : 'today',
                link : '/apps/calendar'
            },
            {
                id      : 'e-commerce',
                title   : 'E-Commerce',
                type    : 'collapsable',
                icon    : 'shopping_cart',
                children: [
                    {
                        id        : 'products',
                        title     : 'Products',
                        type      : 'basic',
                        link      : '/apps/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'productDetail',
                        title     : 'Product Detail',
                        type      : 'basic',
                        link      : '/apps/e-commerce/products/1/printed-dress',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'Orders',
                        type      : 'basic',
                        link      : '/apps/e-commerce/orders',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Order Detail',
                        type      : 'basic',
                        link      : '/apps/e-commerce/orders/1',
                        exactMatch: true
                    }
                ]
            },
            {
                id   : 'academy',
                title: 'Academy',
                type : 'basic',
                icon : 'school',
                link : '/apps/academy'
            },
            {
                id   : 'mail',
                title: 'Mail',
                type : 'basic',
                icon : 'email',
                link : '/apps/mail',
                badge: {
                    title     : '25',
                    background: '#F44336',
                    color     : '#FFFFFF'
                }
            },
            {
                id   : 'mail-ngrx',
                title: 'Mail Ngrx',
                type : 'basic',
                icon : 'email',
                link : '/apps/mail-ngrx',
                badge: {
                    title     : 'NEW',
                    style     : 'rectangle',
                    background: '#EC0C8E',
                    color     : '#FFFFFF'
                }
            },
            {
                id   : 'chat',
                title: 'Chat',
                type : 'basic',
                icon : 'chat',
                link : '/apps/chat',
                badge: {
                    title     : '13',
                    style     : 'simple',
                    background: '#09D261',
                    color     : '#09D261'
                }
            },
            {
                id   : 'file-manager',
                title: 'File Manager',
                type : 'basic',
                icon : 'folder',
                link : '/apps/file-manager'
            },
            {
                id   : 'contacts',
                title: 'Contacts',
                type : 'basic',
                icon : 'account_box',
                link : '/apps/contacts'
            },
            {
                id   : 'to-do',
                title: 'To-Do',
                type : 'basic',
                icon : 'check_box',
                link : '/apps/todo',
                badge: {
                    title     : 'HOT!',
                    style     : 'rounded',
                    background: '#FF6F00',
                    color     : '#FFFFFF'
                }
            },
            {
                id   : 'scrumboard',
                title: 'Scrumboard',
                type : 'basic',
                icon : 'assessment',
                link : '/apps/scrumboard'
            }
        ]
    },*/
    {
        id      : 'applications',
        title   : 'Applications',
        subtitle: 'Custom made application designs',
        type    : 'group',
        icon    : 'apps',
        children: [
            {
                id      : 'applications.dashboard',
                title   : 'Dashboard',
                type    : 'collapsable',
                icon    : 'dashboard',
                children: [
                    {
                        id   : 'applications.dashboard.analytics',
                        title: 'Analytics',
                        type : 'basic',
                        link : '/apps/dashboard/analytics'
                    },
                    {
                        id   : 'applications.dashboard.cryptocurrency',
                        title: 'Cryptocurrency',
                        type : 'basic',
                        link : '/apps/dashboard/cryptocurrency'
                    }
                ]
            },
            {
                id      : 'applications.calendar',
                title   : 'Calendar',
                subtitle: '3 upcoming events',
                type    : 'basic',
                icon    : 'today',
                link    : '/apps/calendar'
            },
            {
                id   : 'applications.mailbox',
                title: 'Mailbox',
                type : 'basic',
                icon : 'email',
                link : '/apps/mailbox',
                badge: {
                    title     : '27',
                    style     : 'rounded',
                    background: '#E91E63',
                    color     : '#FFFFFF'
                }
            },
            {
                id   : 'applications.tasks',
                title: 'Tasks',
                type : 'basic',
                icon : 'check_box',
                link : '/apps/tasks'
            },
            {
                id   : 'applications.contacts',
                title: 'Contacts',
                type : 'basic',
                icon : 'account_box',
                link : '/apps/contacts',
                badge: {
                    title     : 'NEW',
                    style     : 'rounded',
                    background: '#304FFE',
                    color     : '#FFFFFF'
                }
            }
        ]
    },
    {
        id      : 'pages',
        title   : 'Pages',
        subtitle: 'Custom made page designs',
        type    : 'group',
        icon    : 'pages',
        children: [
            {
                id      : 'pages.authentication',
                title   : 'Authentication',
                type    : 'collapsable',
                icon    : 'lock',
                children: [
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Sign in',
                        type    : 'collapsable',
                        children: [
                            {
                                id   : 'pages.authentication.sign-in.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/classic'
                            },
                            {
                                id   : 'pages.authentication.sign-in.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/modern'
                            },
                            {
                                id   : 'pages.authentication.sign-in.modern-alt',
                                title: 'Modern Alt.',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/modern-alt'
                            },
                            {
                                id   : 'pages.authentication.sign-in.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.sign-in.fullscreen-alt',
                                title: 'Fullscreen Alt.',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/fullscreen-alt'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.sign-up',
                        title   : 'Sign up',
                        type    : 'collapsable',
                        link    : '/pages/authentication/sign-up',
                        children: [
                            {
                                id   : 'pages.authentication.sign-up.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/classic'
                            },
                            {
                                id   : 'pages.authentication.sign-up.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/modern'
                            },
                            {
                                id   : 'pages.authentication.sign-up.modern-alt',
                                title: 'Modern Alt.',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/modern-alt'
                            },
                            {
                                id   : 'pages.authentication.sign-up.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.sign-up.fullscreen-alt',
                                title: 'Fullscreen Alt.',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/fullscreen-alt'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.sign-out',
                        title   : 'Sign out',
                        type    : 'collapsable',
                        link    : '/pages/authentication/sign-out',
                        children: [
                            {
                                id   : 'pages.authentication.sign-out.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/classic'
                            },
                            {
                                id   : 'pages.authentication.sign-out.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/modern'
                            },
                            {
                                id   : 'pages.authentication.sign-out.modern-alt',
                                title: 'Modern Alt.',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/modern-alt'
                            },
                            {
                                id   : 'pages.authentication.sign-out.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.sign-out.fullscreen-alt',
                                title: 'Fullscreen Alt.',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/fullscreen-alt'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.forgot-password',
                        title   : 'Forgot password',
                        type    : 'collapsable',
                        link    : '/pages/authentication/forgot-password',
                        children: [
                            {
                                id   : 'pages.authentication.forgot-password.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/classic'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/modern'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.modern-alt',
                                title: 'Modern Alt.',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/modern-alt'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.fullscreen-alt',
                                title: 'Fullscreen Alt.',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/fullscreen-alt'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.reset-password',
                        title   : 'Reset password',
                        type    : 'collapsable',
                        link    : '/pages/authentication/reset-password',
                        children: [
                            {
                                id   : 'pages.authentication.reset-password.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/classic'
                            },
                            {
                                id   : 'pages.authentication.reset-password.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/modern'
                            },
                            {
                                id   : 'pages.authentication.reset-password.modern-alt',
                                title: 'Modern Alt.',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/modern-alt'
                            },
                            {
                                id   : 'pages.authentication.reset-password.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.reset-password.fullscreen-alt',
                                title: 'Fullscreen Alt.',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/fullscreen-alt'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.unlock-session',
                        title   : 'Unlock session',
                        type    : 'collapsable',
                        link    : '/pages/authentication/unlock-session',
                        children: [
                            {
                                id   : 'pages.authentication.unlock-session.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/classic'
                            },
                            {
                                id   : 'pages.authentication.unlock-session.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/modern'
                            },
                            {
                                id   : 'pages.authentication.unlock-session.modern-alt',
                                title: 'Modern Alt.',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/modern-alt'
                            },
                            {
                                id   : 'pages.authentication.unlock-session.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.unlock-session.fullscreen-alt',
                                title: 'Fullscreen Alt.',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/fullscreen-alt'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.confirmation-required',
                        title   : 'Confirmation required',
                        type    : 'collapsable',
                        link    : '/pages/authentication/confirmation-required',
                        children: [
                            {
                                id   : 'pages.authentication.confirmation-required.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/classic'
                            },
                            {
                                id   : 'pages.authentication.confirmation-required.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/modern'
                            },
                            {
                                id   : 'pages.authentication.confirmation-required.modern-alt',
                                title: 'Modern Alt.',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/modern-alt'
                            },
                            {
                                id   : 'pages.authentication.confirmation-required.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.confirmation-required.fullscreen-alt',
                                title: 'Fullscreen Alt.',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/fullscreen-alt'
                            }
                        ]
                    }
                ]
            },
            {
                id      : 'pages.coming-soon',
                title   : 'Coming soon',
                type    : 'collapsable',
                icon    : 'hourglass_empty',
                link    : '/pages/coming-soon',
                children: [
                    {
                        id   : 'pages.coming-soon.classic',
                        title: 'Classic',
                        type : 'basic',
                        link : '/pages/coming-soon/classic'
                    },
                    {
                        id   : 'pages.coming-soon.modern',
                        title: 'Modern',
                        type : 'basic',
                        link : '/pages/coming-soon/modern'
                    },
                    {
                        id   : 'pages.coming-soon.modern-alt',
                        title: 'Modern Alt.',
                        type : 'basic',
                        link : '/pages/coming-soon/modern-alt'
                    },
                    {
                        id   : 'pages.coming-soon.fullscreen',
                        title: 'Fullscreen',
                        type : 'basic',
                        link : '/pages/coming-soon/fullscreen'
                    },
                    {
                        id   : 'pages.coming-soon.fullscreen-alt',
                        title: 'Fullscreen Alt.',
                        type : 'basic',
                        link : '/pages/coming-soon/fullscreen-alt'
                    }
                ]
            },
            {
                id      : 'pages.errors',
                title   : 'Errors',
                type    : 'collapsable',
                icon    : 'error_outline',
                children: [
                    {
                        id   : 'pages.errors.404',
                        title: '404',
                        type : 'basic',
                        link : '/pages/errors/404'
                    },
                    {
                        id   : 'pages.errors.500',
                        title: '500',
                        type : 'basic',
                        link : '/pages/errors/500'
                    }
                ]
            },
            {
                id      : 'pages.help-center',
                title   : 'Help center',
                type    : 'collapsable',
                icon    : 'help_outline',
                link    : '/pages/help-center',
                children: [
                    {
                        id        : 'pages.help-center.home',
                        title     : 'Home',
                        type      : 'basic',
                        link      : '/pages/help-center',
                        exactMatch: true
                    },
                    {
                        id   : 'pages.help-center.faqs',
                        title: 'FAQs',
                        type : 'basic',
                        link : '/pages/help-center/faqs'
                    },
                    {
                        id   : 'pages.help-center.guides',
                        title: 'Guides',
                        type : 'basic',
                        link : '/pages/help-center/guides'
                    },
                    {
                        id   : 'pages.help-center.support',
                        title: 'Support',
                        type : 'basic',
                        link : '/pages/help-center/support'
                    }
                ]
            },
            {
                id   : 'pages.maintenance',
                title: 'Maintenance',
                type : 'basic',
                icon : 'warning',
                link : '/pages/maintenance'
            },
            {
                id      : 'pages.pricing',
                title   : 'Pricing',
                type    : 'collapsable',
                icon    : 'monetization_on',
                children: [
                    {
                        id   : 'pages.pricing.modern',
                        title: 'Modern',
                        type : 'basic',
                        link : '/pages/pricing/modern'
                    },
                    {
                        id   : 'pages.pricing.simple',
                        title: 'Simple',
                        type : 'basic',
                        link : '/pages/pricing/simple'
                    },
                    {
                        id   : 'pages.pricing.single',
                        title: 'Single',
                        type : 'basic',
                        link : '/pages/pricing/single'
                    },
                    {
                        id   : 'pages.pricing.table',
                        title: 'Table',
                        type : 'basic',
                        link : '/pages/pricing/table'
                    }
                ]
            },
            {
                id   : 'pages.profile',
                title: 'Profile',
                type : 'basic',
                icon : 'account_circle',
                link : '/pages/profile'
            }
        ]
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        subtitle: 'Building blocks of the UI & UX',
        type    : 'group',
        icon    : 'web',
        children: [
            {
                id   : 'user-interface.angular-material',
                title: 'Angular Material',
                type : 'basic',
                icon : 'layers',
                link : '/ui/angular-material'
            },
            {
                id   : 'user-interface.tailwindcss',
                title: 'TailwindCSS',
                type : 'basic',
                icon : 'assistant',
                link : '/ui/tailwindcss'
            },
            {
                id   : 'user-interface.cards',
                title: 'Cards',
                type : 'basic',
                icon : 'web_asset',
                link : '/ui/cards'
            },
            {
                id   : 'user-interface.colors',
                title: 'Colors',
                type : 'basic',
                icon : 'color_lens',
                link : '/ui/colors'
            },
            {
                id      : 'user-interface.content-layouts',
                title   : 'Content layouts',
                type    : 'collapsable',
                icon    : 'view_compact',
                children: [
                    {
                        id   : 'user-interface.content-layouts.overview',
                        title: 'Overview',
                        type : 'basic',
                        link : '/ui/content-layouts/overview'
                    },
                    {
                        id      : 'user-interface.content-layouts.fullwidth',
                        title   : 'Fullwidth',
                        type    : 'collapsable',
                        children: [
                            {
                                id   : 'user-interface.content-layouts.fullwidth.basic',
                                title: 'Basic',
                                type : 'basic',
                                link : '/ui/content-layouts/fullwidth/basic'
                            },
                            {
                                id   : 'user-interface.content-layouts.fullwidth.standard',
                                title: 'Standard',
                                type : 'basic',
                                link : '/ui/content-layouts/fullwidth/standard'
                            },
                            {
                                id   : 'user-interface.content-layouts.fullwidth.tabs',
                                title: 'Tabs',
                                type : 'basic',
                                link : '/ui/content-layouts/fullwidth/tabs'
                            },
                            {
                                id   : 'user-interface.content-layouts.fullwidth.tabs-navigation',
                                title: 'Tabs navigation',
                                type : 'basic',
                                link : '/ui/content-layouts/fullwidth/tabs-navigation'
                            }
                        ]
                    },
                    {
                        id      : 'user-interface.content-layouts.left-sidebar',
                        title   : 'Left Sidebar',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'user-interface.content-layouts.left-sidebar.fullheight',
                                title   : 'Fullheight',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id   : 'user-interface.content-layouts.left-sidebar.fullheight.basic',
                                        title: 'Basic',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/fullheight/basic'
                                    },
                                    {
                                        id   : 'user-interface.content-layouts.left-sidebar.fullheight.standard',
                                        title: 'Standard',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/fullheight/standard'
                                    },
                                    {
                                        id   : 'user-interface.content-layouts.left-sidebar.fullheight.tabs',
                                        title: 'Tabs',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/fullheight/tabs'
                                    },
                                    {
                                        id   : 'user-interface.content-layouts.left-sidebar.fullheight.tabs-navigation',
                                        title: 'Tabs navigation',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/fullheight/tabs-navigation'
                                    }
                                ]
                            },
                            {
                                id      : 'user-interface.content-layouts.left-sidebar.content',
                                title   : 'Content',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id   : 'user-interface.content-layouts.left-sidebar.content.standard',
                                        title: 'Standard',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/content/standard'
                                    },
                                    {
                                        id   : 'user-interface.content-layouts.left-sidebar.content.tabs',
                                        title: 'Tabs',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/content/tabs'
                                    },
                                    {
                                        id   : 'user-interface.content-layouts.left-sidebar.content.tabs-navigation',
                                        title: 'Tabs navigation',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/content/tabs-navigation'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id      : 'content-layouts.right-sidebar',
                        title   : 'Right Sidebar',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'user-interface.content-layouts.right-sidebar.fullheight',
                                title   : 'Fullheight',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id   : 'user-interface.content-layouts.right-sidebar.fullheight.basic',
                                        title: 'Basic',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/fullheight/basic'
                                    },
                                    {
                                        id   : 'user-interface.content-layouts.right-sidebar.fullheight.standard',
                                        title: 'Standard',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/fullheight/standard'
                                    },
                                    {
                                        id   : 'user-interface.content-layouts.right-sidebar.fullheight.tabs',
                                        title: 'Tabs',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/fullheight/tabs'
                                    },
                                    {
                                        id   : 'user-interface.content-layouts.right-sidebar.fullheight.tabs-navigation',
                                        title: 'Tabs navigation',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/fullheight/tabs-navigation'
                                    }
                                ]
                            },
                            {
                                id      : 'user-interface.content-layouts.right-sidebar.content',
                                title   : 'Content',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id   : 'user-interface.content-layouts.right-sidebar.content.standard',
                                        title: 'Standard',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/content/standard'
                                    },
                                    {
                                        id   : 'user-interface.content-layouts.right-sidebar.content.tabs',
                                        title: 'Tabs',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/content/tabs'
                                    },
                                    {
                                        id   : 'user-interface.content-layouts.right-sidebar.content.tabs-navigation',
                                        title: 'Tabs navigation',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/content/tabs-navigation'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id   : 'user-interface.datatable',
                title: 'Datatable',
                type : 'basic',
                icon : 'table_chart',
                link : '/ui/datatable'
            },
            {
                id      : 'user-interface.forms',
                title   : 'Forms',
                type    : 'collapsable',
                icon    : 'ballot',
                children: [
                    {
                        id   : 'user-interface.forms.fields',
                        title: 'Fields',
                        type : 'basic',
                        link : '/ui/forms/fields'
                    },
                    {
                        id   : 'user-interface.forms.layouts',
                        title: 'Layouts',
                        type : 'basic',
                        link : '/ui/forms/layouts'
                    },
                    {
                        id   : 'user-interface.forms.wizards',
                        title: 'Wizards',
                        type : 'basic',
                        link : '/ui/forms/wizards'
                    }
                ]
            },
            {
                id      : 'user-interface.icons',
                title   : 'Icons',
                type    : 'collapsable',
                icon    : 'category',
                children: [
                    {
                        id   : 'user-interface.icons.dripicons',
                        title: 'Dripicons',
                        type : 'basic',
                        link : '/ui/icons/dripicons'
                    },
                    {
                        id   : 'user-interface.icons.feather',
                        title: 'Feather',
                        type : 'basic',
                        link : '/ui/icons/feather'
                    },
                    {
                        id   : 'user-interface.icons.iconsmind',
                        title: 'Iconsmind',
                        type : 'basic',
                        link : '/ui/icons/iconsmind'
                    },
                    {
                        id   : 'user-interface.icons.material-outline',
                        title: 'Material Outline',
                        type : 'basic',
                        link : '/ui/icons/material-outline'
                    },
                    {
                        id   : 'user-interface.icons.material-twotone',
                        title: 'Material Twotone',
                        type : 'basic',
                        link : '/ui/icons/material-twotone'
                    }
                ]
            },
            {
                id   : 'user-interface.typography',
                title: 'Typography',
                type : 'basic',
                icon : 'text_fields',
                link : '/ui/typography'
            }
        ]
    },
    {
        id      : 'assembly',
        title   : 'Assembly',
        subtitle: 'Components, services and more',
        type    : 'group',
        icon    : 'change_history',
        children: [
            {
                id   : 'assembly.animations',
                title: 'Animations',
                type : 'basic',
                icon : 'movie_creation',
                link : '/assembly/animations'
            },
            {
                id   : 'assembly.helpers',
                title: 'Helpers',
                type : 'basic',
                icon : 'assistant',
                link : '/assembly/helpers'
            },
            {
                id   : 'assembly.mock-api',
                title: 'MockAPI',
                type : 'basic',
                icon : 'http',
                link : '/assembly/mock-api'
            },
            {
                id   : 'assembly.validators',
                title: 'Validators',
                type : 'basic',
                icon : 'check_circle',
                link : '/assembly/validators'
            },
            {
                id      : 'assembly.components',
                title   : 'Components',
                icon    : 'memory',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'assembly.components.card',
                        title: 'Card',
                        type : 'basic',
                        link : '/assembly/components/card'
                    },
                    {
                        id   : 'assembly.components.date-range',
                        title: 'DateRange',
                        type : 'basic',
                        link : '/assembly/components/date-range'
                    },
                    {
                        id   : 'assembly.components.drawer',
                        title: 'Drawer',
                        type : 'basic',
                        link : '/assembly/components/drawer'
                    },
                    {
                        id   : 'assembly.components.highlight',
                        title: 'Highlight',
                        type : 'basic',
                        link : '/assembly/components/highlight'
                    },
                    {
                        id   : 'assembly.components.message',
                        title: 'Message',
                        type : 'basic',
                        link : '/assembly/components/message'
                    },
                    {
                        id   : 'assembly.components.navigation',
                        title: 'Navigation',
                        type : 'basic',
                        link : '/assembly/components/navigation'
                    },
                    {
                        id   : 'assembly.components.spinner',
                        title: 'Spinner',
                        type : 'basic',
                        link : '/assembly/components/spinner'
                    }
                ]
            },
            {
                id      : 'assembly.directives',
                title   : 'Directives',
                icon    : 'memory',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'assembly.directives.autogrow',
                        title: 'Autogrow',
                        type : 'basic',
                        link : '/assembly/directives/autogrow'
                    },
                    {
                        id   : 'assembly.directives..scrollbar',
                        title: 'Scrollbar',
                        type : 'basic',
                        link : '/assembly/directives/scrollbar'
                    }
                ]
            },
            {
                id      : 'assembly.services',
                title   : 'Services',
                icon    : 'memory',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'assembly.services.config',
                        title: 'Config',
                        type : 'basic',
                        link : '/assembly/services/config'
                    },
                    {
                        id   : 'assembly.services.splash-screen',
                        title: 'SplashScreen',
                        type : 'basic',
                        link : '/assembly/services/splash-screen'
                    },
                    {
                        id   : 'assembly.services.media-watcher',
                        title: 'MediaWatcher',
                        type : 'basic',
                        link : '/assembly/services/media-watcher'
                    }
                ]
            },
            {
                id      : 'assembly.pipes',
                title   : 'Pipes',
                icon    : 'memory',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'assembly.pipes.find-by-key',
                        title: 'FindByKey',
                        type : 'basic',
                        link : '/assembly/pipes/find-by-key'
                    }
                ]
            }
        ]
    },
    {
        id      : 'custom-components',
        title   : 'Custom components',
        subtitle: 'To help you build your app quickly',
        type    : 'group',
        icon    : 'memory',
        children: [
            {
                id   : 'custom-components.overview',
                title: 'Overview',
                type : 'basic',
                icon : 'info',
                link : '/custom-components/overview'
            },
            {
                id   : 'custom-components.messages',
                title: 'Messages',
                type : 'basic',
                icon : 'message',
                link : '/custom-components/messages'
            },
            {
                id   : 'custom-components.notifications',
                title: 'Notifications',
                type : 'basic',
                icon : 'notifications',
                link : '/custom-components/notifications'
            },
            {
                id   : 'custom-components.search',
                title: 'Search',
                type : 'basic',
                icon : 'search',
                link : '/custom-components/search'
            },
            {
                id   : 'custom-components.shortcuts',
                title: 'Shortcuts',
                type : 'basic',
                icon : 'bookmarks',
                link : '/custom-components/shortcuts'
            },
            {
                id   : 'custom-components.user',
                title: 'User',
                type : 'basic',
                icon : 'account_circle',
                link : '/custom-components/user'
            }
        ]
    },
    {
        id      : 'supported-components',
        title   : 'Supported components',
        subtitle: 'Compatible third party components',
        type    : 'group',
        icon    : 'memory',
        children: [
            {
                id   : 'supported-components.apex-charts',
                title: 'ApexCharts',
                type : 'basic',
                icon : 'insert_chart',
                link : '/supported-components/apex-charts'
            },
            {
                id   : 'supported-components.full-calendar',
                title: 'FullCalendar',
                type : 'basic',
                icon : 'today',
                link : '/supported-components/full-calendar'
            },
            {
                id   : 'supported-components.google-maps',
                title: 'Google Maps',
                type : 'basic',
                icon : 'map',
                link : '/supported-components/google-maps'
            },
            {
                id   : 'supported-components.ngx-markdown',
                title: 'ngx-markdown',
                type : 'basic',
                icon : 'text_format',
                link : '/supported-components/ngx-markdown'
            },
            {
                id   : 'supported-components.quill-editor',
                title: 'Quill editor',
                type : 'basic',
                icon : 'font_download',
                link : '/supported-components/quill-editor'
            },
            {
                id   : 'supported-components.youtube-player',
                title: 'Youtube player',
                type : 'basic',
                icon : 'play_circle_filled',
                link : '/supported-components/youtube-player'
            }
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'guides',
        title   : 'Guides',
        subtitle: 'Everything you need to get started',
        type    : 'group',
        icon    : 'import_contacts',
        children: [
            {
                id   : 'guides.changelog',
                title: 'Changelog',
                type : 'basic',
                icon : 'update',
                link : '/guides/changelog',
                badge: {
                    title     : '1.0.0',
                    style     : 'rounded',
                    background: '#FFEB3B',
                    color     : '#000000'
                }
            },
            {
                id      : 'guides.getting-started',
                title   : 'Getting started',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'guides.getting-started.introduction',
                        title: 'Introduction',
                        type : 'basic',
                        link : '/guides/getting-started/introduction'
                    },
                    {
                        id   : 'guides.getting-started.libraries',
                        title: 'Libraries',
                        type : 'basic',
                        link : '/guides/getting-started/libraries'
                    },
                    {
                        id   : 'guides.getting-started.prerequisites',
                        title: 'Prerequisites',
                        type : 'basic',
                        link : '/guides/getting-started/prerequisites'
                    },
                    {
                        id   : 'guides.getting-started.installation',
                        title: 'Installation',
                        type : 'basic',
                        link : '/guides/getting-started/installation'
                    },
                    {
                        id   : 'guides.getting-started.serving',
                        title: 'Serving',
                        type : 'basic',
                        link : '/guides/getting-started/serving'
                    }
                ]
            },
            {
                id      : 'guides.development',
                title   : 'Development',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'guides.development.structure',
                        title: 'Structure',
                        type : 'basic',
                        link : '/guides/development/structure'
                    },
                    {
                        id   : 'guides.development.starter-kit',
                        title: 'Starter kit',
                        type : 'basic',
                        link : '/guides/development/starter-kit'
                    },
                    {
                        id   : 'guides.development.deployment',
                        title: 'Deployment',
                        type : 'basic',
                        link : '/guides/development/deployment'
                    },
                    {
                        id   : 'guides.development.updating',
                        title: 'Updating',
                        type : 'basic',
                        link : '/guides/development/updating'
                    }
                ]
            },
            {
                id      : 'guides.customization',
                title   : 'Customization',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'guides.customization.pre-made-layouts',
                        title: 'Pre-made layouts',
                        type : 'basic',
                        link : '/guides/customization/pre-made-layouts'
                    },
                    {
                        id   : 'guides.customization.theming',
                        title: 'Theming',
                        type : 'basic',
                        link : '/guides/customization/theming'
                    }
                ]
            },
            {
                id      : 'guides.authentication',
                title   : 'Authentication',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'guides.authentication.jwt',
                        title: 'JWT',
                        type : 'basic',
                        link : '/guides/authentication/jwt'
                    }
                ]
            }
        ]
    },
    {
        id  : 'divider-2',
        type: 'divider'
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation features',
        subtitle: 'Collapsable levels & badge styles',
        type    : 'group',
        icon    : 'menu_open',
        children: [
            {
                id      : 'navigation-features.levels.0',
                title   : 'Level 0',
                icon    : 'menu',
                type    : 'collapsable',
                children: [
                    {
                        id      : 'navigation-features.levels.0.1',
                        title   : 'Level 1',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'navigation-features.levels.0.1.2',
                                title   : 'Level 2',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id      : 'navigation-features.levels.0.1.2.3',
                                        title   : 'Level 3',
                                        type    : 'collapsable',
                                        children: [
                                            {
                                                id      : 'navigation-features.levels.0.1.2.3.4',
                                                title   : 'Level 4',
                                                type    : 'collapsable',
                                                children: [
                                                    {
                                                        id      : 'navigation-features.levels.0.1.2.3.4.5',
                                                        title   : 'Level 5',
                                                        type    : 'collapsable',
                                                        children: [
                                                            {
                                                                id   : 'navigation-features.levels.0.1.2.3.4.5.6',
                                                                title: 'Level 6',
                                                                type : 'basic'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id      : 'navigation-features.disabled-collapsable',
                title   : 'Disabled collapsable',
                icon    : 'menu',
                type    : 'collapsable',
                disabled: true,
                children: [
                    {
                        id   : 'navigation-features.disabled-collapsable.child',
                        title: 'You shouldn\'t be able to see this child',
                        type : 'basic',
                        link : '#'
                    }
                ]
            },
            {
                id      : 'navigation-features.disabled-basic',
                title   : 'Disabled basic',
                icon    : 'menu',
                type    : 'basic',
                link    : '#',
                disabled: true
            },
            {
                id   : 'navigation-features.badge-style-oval',
                title: 'Oval badge',
                icon : 'label',
                type : 'basic',
                link : '#',
                badge: {
                    title     : '8',
                    background: '#17FEFF',
                    color     : '#000000'
                }
            },
            {
                id   : 'navigation-features.badge-style-rectangle',
                title: 'Rectangle badge',
                icon : 'label',
                type : 'basic',
                link : '#',
                badge: {
                    title     : 'Updated!',
                    style     : 'rectangle',
                    background: '#17FEFF',
                    color     : '#000000'
                }
            },
            {
                id   : 'navigation-features.badge-style-rounded',
                title: 'Rounded badge',
                icon : 'label',
                type : 'basic',
                link : '#',
                badge: {
                    title     : 'NEW',
                    style     : 'rounded',
                    background: '#17FEFF',
                    color     : '#000000'
                }
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Simple badge',
                icon : 'label',
                type : 'basic',
                link : '#',
                badge: {
                    title: '87 Unread',
                    style: 'simple',
                    color: '#17FEFF'
                }
            },
            {
                id   : 'navigation-features.multi-line',
                title: 'A multi line navigation item title example which works just fine',
                icon : 'menu',
                type : 'basic',
                link : '#'
            }
        ]
    }
];
export const compactNavigation: AsmNavigationItem[] = [
    {
        id      : 'applications',
        title   : 'Apps',
        type    : 'aside',
        icon    : 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'description',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'ui-elements',
        title   : 'UI',
        type    : 'aside',
        icon    : 'list_alt',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'assembly',
        title   : 'Assembly',
        type    : 'aside',
        icon    : 'change_history',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'guides',
        title   : 'Guides',
        type    : 'aside',
        icon    : 'help',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation',
        type    : 'aside',
        icon    : 'menu_open',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: AsmNavigationItem[] = [
    {
        id      : 'applications',
        title   : 'Apps',
        type    : 'group',
        icon    : 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'description',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'ui-elements',
        title   : 'UI',
        type    : 'group',
        icon    : 'list_alt',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'assembly',
        title   : 'Assembly',
        type    : 'group',
        icon    : 'change_history',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'guides',
        title   : 'Guides',
        type    : 'group',
        icon    : 'help',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Misc',
        type    : 'group',
        icon    : 'menu_open',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];

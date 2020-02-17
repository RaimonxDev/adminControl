
/* tslint:disable:max-line-length */
import { AsmNavigationItem } from '@assembly/components/navigation';

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
        subtitle: 'Example & ready to use apps',
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
        subtitle: 'Example & ready to use pages',
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
                icon : 'build',
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
        id      : 'ui-elements',
        title   : 'UI Elements',
        subtitle: 'User interface elements',
        type    : 'group',
        icon    : 'web',
        children: [
            {
                id   : 'ui-elements.angular-material',
                title: 'Angular Material',
                type : 'basic',
                icon : 'layers',
                link : '/ui/angular-material'
            },
            {
                id      : 'ui-elements.third-party-components',
                title   : 'Third party components',
                type    : 'collapsable',
                icon    : 'settings_input_component',
                children: [
                    {
                        id   : 'ui-elements.third-party-components.quill-editor',
                        title: 'Quill editor',
                        type : 'basic',
                        link : '/ui/third-party/quill-editor'
                    }
                ]
            },
            {
                id   : 'ui-elements.cards',
                title: 'Cards',
                type : 'basic',
                icon : 'web_asset',
                link : '/ui/cards'
            },
            {
                id   : 'ui-elements.colors',
                title: 'Colors',
                type : 'basic',
                icon : 'color_lens',
                link : '/ui/colors'
            },
            {
                id      : 'ui-elements.content-layouts',
                title   : 'Content layouts',
                subtitle: '18 unique layout styles',
                type    : 'collapsable',
                icon    : 'view_quilt',
                children: [
                    {
                        id   : 'ui-elements.content-layouts.overview',
                        title: 'Overview',
                        type : 'basic',
                        link : '/ui/content-layouts/overview'
                    },
                    {
                        id      : 'ui-elements.content-layouts.fullwidth',
                        title   : 'Fullwidth',
                        type    : 'collapsable',
                        children: [
                            {
                                id   : 'ui-elements.content-layouts.fullwidth.basic',
                                title: 'Basic',
                                type : 'basic',
                                link : '/ui/content-layouts/fullwidth/basic'
                            },
                            {
                                id   : 'ui-elements.content-layouts.fullwidth.standard',
                                title: 'Standard',
                                type : 'basic',
                                link : '/ui/content-layouts/fullwidth/standard'
                            },
                            {
                                id   : 'ui-elements.content-layouts.fullwidth.tabs',
                                title: 'Tabs',
                                type : 'basic',
                                link : '/ui/content-layouts/fullwidth/tabs'
                            },
                            {
                                id   : 'ui-elements.content-layouts.fullwidth.tabs-navigation',
                                title: 'Tabs navigation',
                                type : 'basic',
                                link : '/ui/content-layouts/fullwidth/tabs-navigation'
                            }
                        ]
                    },
                    {
                        id      : 'ui-elements.content-layouts.left-sidebar',
                        title   : 'Left Sidebar',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'ui-elements.content-layouts.left-sidebar.fullheight',
                                title   : 'Fullheight',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id   : 'ui-elements.content-layouts.left-sidebar.fullheight.basic',
                                        title: 'Basic',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/fullheight/basic'
                                    },
                                    {
                                        id   : 'ui-elements.content-layouts.left-sidebar.fullheight.standard',
                                        title: 'Standard',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/fullheight/standard'
                                    },
                                    {
                                        id   : 'ui-elements.content-layouts.left-sidebar.fullheight.tabs',
                                        title: 'Tabs',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/fullheight/tabs'
                                    },
                                    {
                                        id   : 'ui-elements.content-layouts.left-sidebar.fullheight.tabs-navigation',
                                        title: 'Tabs navigation',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/fullheight/tabs-navigation'
                                    }
                                ]
                            },
                            {
                                id      : 'ui-elements.content-layouts.left-sidebar.content',
                                title   : 'Content',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id   : 'ui-elements.content-layouts.left-sidebar.content.standard',
                                        title: 'Standard',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/content/standard'
                                    },
                                    {
                                        id   : 'ui-elements.content-layouts.left-sidebar.content.tabs',
                                        title: 'Tabs',
                                        type : 'basic',
                                        link : '/ui/content-layouts/left-sidebar/content/tabs'
                                    },
                                    {
                                        id   : 'ui-elements.content-layouts.left-sidebar.content.tabs-navigation',
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
                                id      : 'ui-elements.content-layouts.right-sidebar.fullheight',
                                title   : 'Fullheight',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id   : 'ui-elements.content-layouts.right-sidebar.fullheight.basic',
                                        title: 'Basic',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/fullheight/basic'
                                    },
                                    {
                                        id   : 'ui-elements.content-layouts.right-sidebar.fullheight.standard',
                                        title: 'Standard',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/fullheight/standard'
                                    },
                                    {
                                        id   : 'ui-elements.content-layouts.right-sidebar.fullheight.tabs',
                                        title: 'Tabs',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/fullheight/tabs'
                                    },
                                    {
                                        id   : 'ui-elements.content-layouts.right-sidebar.fullheight.tabs-navigation',
                                        title: 'Tabs navigation',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/fullheight/tabs-navigation'
                                    }
                                ]
                            },
                            {
                                id      : 'ui-elements.content-layouts.right-sidebar.content',
                                title   : 'Content',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id   : 'ui-elements.content-layouts.right-sidebar.content.standard',
                                        title: 'Standard',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/content/standard'
                                    },
                                    {
                                        id   : 'ui-elements.content-layouts.right-sidebar.content.tabs',
                                        title: 'Tabs',
                                        type : 'basic',
                                        link : '/ui/content-layouts/right-sidebar/content/tabs'
                                    },
                                    {
                                        id   : 'ui-elements.content-layouts.right-sidebar.content.tabs-navigation',
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
                id      : 'ui-elements.forms',
                title   : 'Forms',
                type    : 'collapsable',
                icon    : 'ballot',
                children: [
                    {
                        id   : 'ui-elements.forms.fields',
                        title: 'Fields',
                        type : 'basic',
                        link : '/ui/forms/fields'
                    },
                    {
                        id   : 'ui-elements.forms.layouts',
                        title: 'Layouts',
                        type : 'basic',
                        link : '/ui/forms/layouts'
                    },
                    {
                        id   : 'ui-elements.forms.wizards',
                        title: 'Wizards',
                        type : 'basic',
                        link : '/ui/forms/wizards'
                    }
                ]
            },
            {
                id      : 'ui-elements.helpers',
                title   : 'Helpers',
                type    : 'collapsable',
                icon    : 'help_outline',
                children: [
                    {
                        id   : 'ui-elements.helpers.assembly',
                        title: 'Assembly',
                        type : 'basic',
                        link : '/ui/helpers/assembly'
                    },
                    {
                        id   : 'ui-elements.helpers.tailwindcss',
                        title: 'TailwindCSS',
                        type : 'basic',
                        link : '/ui/helpers/tailwindcss'
                    }
                ]
            },
            {
                id      : 'ui-elements.icons',
                title   : 'Icons',
                type    : 'collapsable',
                icon    : 'photo',
                children: [
                    {
                        id   : 'ui-elements.icons.dripicons',
                        title: 'Dripicons',
                        type : 'basic',
                        link : '/ui/icons/dripicons'
                    },
                    {
                        id   : 'ui-elements.icons.iconsmind',
                        title: 'Iconsmind',
                        type : 'basic',
                        link : '/ui/icons/iconsmind'
                    },
                    {
                        id   : 'ui-elements.icons.material-outline',
                        title: 'Material Outline',
                        type : 'basic',
                        link : '/ui/icons/material-outline'
                    },
                    {
                        id   : 'ui-elements.icons.material-twotone',
                        title: 'Material Twotone',
                        type : 'basic',
                        link : '/ui/icons/material-twotone'
                    }
                ]
            },
            {
                id   : 'ui-elements.typography',
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
        subtitle: 'Built-in components and more',
        type    : 'group',
        icon    : 'change_history',
        children: [
            {
                id   : 'assembly.animations',
                title: 'Animations',
                type : 'basic',
                icon : 'movie_creation',
                link : '/assembly/components/animations'
            },
            {
                id   : 'assembly.messages',
                title: 'Messages',
                type : 'basic',
                icon : 'info',
                link : '/assembly/components/messages'
            },
            {
                id   : 'assembly.navigation',
                title: 'Navigation',
                type : 'basic',
                icon : 'menu',
                link : '/assembly/components/navigation'
            },
            {
                id      : 'assembly.directives',
                title   : 'Directives',
                icon    : 'memory',
                type    : 'collapsable',
                children: []
            },
            {
                id      : 'assembly.services',
                title   : 'Services',
                icon    : 'memory',
                type    : 'collapsable',
                children: []
            },
            {
                id      : 'assembly.pipes',
                title   : 'Pipes',
                icon    : 'memory',
                type    : 'collapsable',
                children: []
            }
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'documentation',
        title   : 'Documentation',
        subtitle: 'Everything you need to get started',
        type    : 'group',
        icon    : 'import_contacts',
        children: [
            {
                id   : 'documentation.changelog',
                title: 'Changelog',
                type : 'basic',
                icon : 'update',
                link : '/docs/changelog',
                badge: {
                    title     : '1.0.0',
                    style     : 'rounded',
                    background: '#FFEB3B',
                    color     : '#000000'
                }
            },
            {
                id   : 'documentation.getting-started',
                title: 'Getting started',
                type : 'basic',
                icon : 'import_contacts',
                link : '/docs/getting-started'
            },
            {
                id   : 'documentation.building-and-serving',
                title: 'Building and serving',
                type : 'basic',
                icon : 'import_contacts',
                link : '/docs/building-and-serving'
            },
            {
                id   : 'documentation.directory-structure',
                title: 'Directory structure',
                icon : 'import_contacts',
                type : 'basic',
                link : '/docs/fundamentals/directory-structure'
            },
            {
                id   : 'documentation.updating-assembly',
                title: 'Updating Assembly',
                icon : 'import_contacts',
                type : 'basic',
                link : '/docs/fundamentals/updating-assmebly'
            },
            {
                id   : 'documentation.multi-language',
                title: 'Multi language',
                icon : 'import_contacts',
                type : 'basic',
                link : '/docs/fundamentals/multi-language'
            },
            {
                id   : 'documentation.material-theming',
                title: 'Material theming',
                icon : 'import_contacts',
                type : 'basic',
                link : '/docs/fundamentals/material-theming'
            },
            {
                id   : 'documentation.theme-layouts',
                title: 'Theme layouts',
                icon : 'import_contacts',
                type : 'basic',
                link : '/docs/fundamentals/theme-layouts'
            },
            {
                id   : 'documentation.content-layouts',
                title: 'Content layouts',
                icon : 'import_contacts',
                type : 'basic',
                link : '/docs/fundamentals/page-layouts'
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
                                                                type : 'collapsable'
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
        id      : 'documentation',
        title   : 'Docs',
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
        id      : 'documentation',
        title   : 'Docs',
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

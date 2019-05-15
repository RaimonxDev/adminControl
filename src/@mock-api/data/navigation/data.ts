/* tslint:disable:max-line-length */
import { AsmNavigationItem } from '@assembly';

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
        type    : 'subheader',
        icon    : 'apps'
    },
    {
        id   : 'applications.dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'dashboards',
        link : '/apps/dashboard'
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
            title     : '25',
            style     : 'rounded',
            background: '#E91E63',
            color     : '#FFFFFF'
        }
    },
    {
        id      : 'applications.tasks',
        title   : 'Tasks',
        subtitle: '7 overdue tasks',
        type    : 'basic',
        icon    : 'check_box',
        link    : '/apps/tasks'
    },
    {
        id   : 'applications.notes',
        title: 'Notes',
        type : 'basic',
        icon : 'note',
        link : '/apps/notes'
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
    },
    {
        id      : 'applications.help-center',
        title   : 'Help center',
        subtitle: 'Faqs, knowledge base & guides',
        type    : 'basic',
        icon    : 'help_outline',
        link    : '/apps/help-center'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        subtitle: 'Example & ready to use pages',
        type    : 'subheader',
        icon    : 'pages'
    },
    {
        id      : 'pages.authentication',
        title   : 'Authentication',
        type    : 'collapsable',
        icon    : 'lock',
        children: [
            {
                id   : 'pages.authentication.login',
                title: 'Login',
                type : 'basic',
                link : '/pages/authentication/login'
            },
            {
                id   : 'pages.authentication.signup',
                title: 'Sign up',
                type : 'basic',
                link : '/pages/authentication/signup'
            },
            {
                id   : 'pages.authentication.forgot-password',
                title: 'Forgot password',
                type : 'basic',
                link : '/pages/authentication/forgot-password'
            },
            {
                id   : 'pages.authentication.reset-password',
                title: 'Reset password',
                type : 'basic',
                link : '/pages/authentication/reset-password'
            },
            {
                id   : 'pages.authentication.logout',
                title: 'Logout',
                type : 'basic',
                link : '/pages/authentication/logout'
            },
            {
                id   : 'pages.authentication.unlock-session',
                title: 'Unlock session',
                type : 'basic',
                link : '/pages/authentication/unlock-session'
            },
            {
                id   : 'pages.authentication.confirmation-required',
                title: 'Confirmation required',
                type : 'basic',
                link : '/pages/authentication/confirmation-required'
            }
        ]
    },
    {
        id   : 'pages.coming-soon',
        title: 'Coming soon',
        type : 'basic',
        icon : 'hourglass_empty',
        link : '/pages/coming-soon'
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
            }
        ]
    },
    {
        id   : 'pages.profile',
        title: 'Profile',
        type : 'basic',
        icon : 'account_circle',
        link : '/pages/profile'
    },
    {
        id      : 'ui-elements',
        title   : 'UI Elements',
        subtitle: 'User interface elements',
        type    : 'subheader',
        icon    : 'web'
    },
    {
        id   : 'ui-elements.angular-material',
        title: 'Angular Material',
        type : 'basic',
        icon : 'layers',
        link : '/ui/angular-material'
    },
    {
        id   : 'ui-elements.colors',
        title: 'Colors',
        type : 'basic',
        icon : 'color_lens',
        link : '/ui/colors'
    },
    {
        id   : 'ui-elements.forms',
        title: 'Forms',
        type : 'basic',
        icon : 'ballot',
        link : '/ui/forms'
    },
    {
        id   : 'ui-elements.helper-classes',
        title: 'Helper classes',
        type : 'basic',
        icon : 'help_outline',
        link : '/ui/helper-classes'
    },
    {
        id      : 'ui-elements.icons',
        title   : 'Icons',
        type    : 'collapsable',
        icon    : 'photo',
        children: [
            {
                id   : 'ui-elements.icons.material-baseline',
                title: 'Material baseline',
                type : 'basic',
                link : '/ui/icons/material-baseline'
            },
            {
                id   : 'ui-elements.icons.material-outline',
                title: 'Material outline',
                type : 'basic',
                link : '/ui/icons/material-outline'
            },
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
            }
        ]
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
                id   : 'content-layouts.right-sidebar',
                title: 'Right Sidebar',
                type : 'collapsable',
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
        id   : 'ui-elements.typography',
        title: 'Typography',
        type : 'basic',
        icon : 'text_fields',
        link : '/ui/typography'
    },
    {
        id      : 'assembly',
        title   : 'Assembly',
        subtitle: 'Built-in components and more',
        type    : 'subheader'
    },
    {
        id   : 'assembly.animations',
        title: 'Animations',
        type : 'basic',
        icon : 'movie_creation',
        link : '/assembly/components/animations'
    },
    {
        id      : 'assembly.cards',
        title   : 'Cards',
        type    : 'collapsable',
        icon    : 'web_asset',
        children: [
            {
                id   : 'assembly.cards.content',
                title: 'Content',
                type : 'basic',
                link : '/assembly/components/cards/content'
            }
        ]
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
    },
    {
        type: 'divider'
    },
    {
        id   : 'documentation',
        title: 'Documentation',
        icon : 'import_contacts',
        type : 'subheader'
    },
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
    },
    {
        type: 'divider'
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation features',
        subtitle: 'Collapsable levels & Badge styles',
        type    : 'subheader'
    },
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
];
export const compactNavigation: AsmNavigationItem[] = [
    {
        id         : 'dashboards-aside',
        title      : 'Dashboards',
        type       : 'aside',
        icon       : 'line_optimization',
        iconFontSet: 'iconsmind',
        children   : [
            {
                id   : 'dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'dashboards',
                link : 'apps/dashboard'
            }
        ]
    },
    {
        id         : 'applications-aside',
        title      : 'Applications',
        type       : 'aside',
        icon       : 'windows_2',
        iconFontSet: 'iconsmind',
        badge      : {
            title     : '10',
            background: '#607D8B',
            color     : '#FFFFFF'
        },
        children   : [
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
                    title     : '13',
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
                    background: '#09D261',
                    color     : '#FFFFFF'
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
                    title     : '3',
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
        id         : 'pages-aside',
        title      : 'Pages',
        type       : 'aside',
        icon       : 'files',
        iconFontSet: 'iconsmind',
        children   : [
            {
                id      : 'authentication',
                title   : 'Authentication',
                type    : 'collapsable',
                icon    : 'lock',
                badge   : {
                    title     : '10',
                    background: '#525E8A',
                    color     : '#FFFFFF'
                },
                children: [
                    {
                        id   : 'login',
                        title: 'Login',
                        type : 'basic',
                        link : '/pages/auth/login'
                    },
                    {
                        id   : 'login-v2',
                        title: 'Login v2',
                        type : 'basic',
                        link : '/pages/auth/login-2'
                    },
                    {
                        id   : 'register',
                        title: 'Register',
                        type : 'basic',
                        link : '/pages/auth/register'
                    },
                    {
                        id   : 'register-v2',
                        title: 'Register v2',
                        type : 'basic',
                        link : '/pages/auth/register-2'
                    },
                    {
                        id   : 'forgot-password',
                        title: 'Forgot Password',
                        type : 'basic',
                        link : '/pages/auth/forgot-password'
                    },
                    {
                        id   : 'forgot-password-v2',
                        title: 'Forgot Password v2',
                        type : 'basic',
                        link : '/pages/auth/forgot-password-2'
                    },
                    {
                        id   : 'reset-password',
                        title: 'Reset Password',
                        type : 'basic',
                        link : '/pages/auth/reset-password'
                    },
                    {
                        id   : 'reset-password-v2',
                        title: 'Reset Password v2',
                        type : 'basic',
                        link : '/pages/auth/reset-password-2'
                    },
                    {
                        id   : 'lock-screen',
                        title: 'Lock Screen',
                        type : 'basic',
                        link : '/pages/auth/lock'
                    },
                    {
                        id   : 'mail-confirmation',
                        title: 'Mail Confirmation',
                        type : 'basic',
                        link : '/pages/auth/mail-confirm'
                    }
                ]
            },
            {
                id   : 'coming-soon',
                title: 'Coming Soon',
                type : 'basic',
                icon : 'alarm',
                link : '/pages/coming-soon'
            },
            {
                id      : 'errors',
                title   : 'Errors',
                type    : 'collapsable',
                icon    : 'error_outline',
                children: [
                    {
                        id   : '404',
                        title: '404',
                        type : 'basic',
                        link : '/pages/errors/error-404'
                    },
                    {
                        id   : '500',
                        title: '500',
                        type : 'basic',
                        link : '/pages/errors/error-500'
                    }
                ]
            },
            {
                id      : 'invoice',
                title   : 'Invoice',
                type    : 'collapsable',
                icon    : 'receipt',
                children: [
                    {
                        id   : 'modern',
                        title: 'Modern',
                        type : 'basic',
                        link : '/pages/invoices/modern'
                    },
                    {
                        id   : 'compact',
                        title: 'Compact',
                        type : 'basic',
                        link : '/pages/invoices/compact'
                    }
                ]
            },
            {
                id   : 'maintenance',
                title: 'Maintenance',
                type : 'basic',
                icon : 'build',
                link : '/pages/maintenance'
            },
            {
                id      : 'pricing',
                title   : 'Pricing',
                type    : 'collapsable',
                icon    : 'monetization_on',
                children: [
                    {
                        id   : 'style-1',
                        title: 'Style 1',
                        type : 'basic',
                        link : '/pages/pricing/style-1'
                    },
                    {
                        id   : 'style-2',
                        title: 'Style 2',
                        type : 'basic',
                        link : '/pages/pricing/style-2'
                    },
                    {
                        id   : 'style-3',
                        title: 'Style 3',
                        type : 'basic',
                        link : '/pages/pricing/style-3'
                    }
                ]
            },
            {
                id   : 'profile',
                title: 'Profile',
                type : 'basic',
                icon : 'person',
                link : '/pages/profile'
            },
            {
                id   : 'search',
                title: 'Search',
                type : 'basic',
                icon : 'search',
                link : '/pages/search'
            },
            {
                id   : 'faq',
                title: 'Faq',
                type : 'basic',
                icon : 'help_outline',
                link : '/pages/faq'
            },
            {
                id   : 'knowledge-base',
                title: 'Knowledge Base',
                type : 'basic',
                icon : 'import_contacts',
                link : '/pages/knowledge-base'
            }
        ]
    },
    {
        id         : 'user-interface-aside',
        title      : 'User Interface',
        type       : 'aside',
        icon       : 'check',
        iconFontSet: 'iconsmind',
        children   : [
            {
                id   : 'angular-material',
                title: 'Angular Material',
                type : 'basic',
                icon : 'layers',
                link : '/ui/angular-material'
            },
            {
                id   : 'forms',
                title: 'Forms',
                type : 'basic',
                icon : 'web_asset',
                link : '/ui/forms'
            },
            {
                id   : 'icons',
                title: 'Icons',
                type : 'basic',
                icon : 'photo',
                link : '/ui/icons'
            },
            {
                id   : 'typography',
                title: 'Typography',
                type : 'basic',
                icon : 'text_fields',
                link : '/ui/typography'
            },
            {
                id   : 'helper-classes',
                title: 'Helper Classes',
                type : 'basic',
                icon : 'help',
                link : '/ui/helper-classes'
            },
            {
                id      : 'page-layouts',
                title   : 'Page Layouts',
                type    : 'collapsable',
                icon    : 'view_quilt',
                children: [
                    {
                        id      : 'carded',
                        title   : 'Carded',
                        type    : 'collapsable',
                        badge   : {
                            title     : '12',
                            background: '#525E8A',
                            color     : '#FFFFFF'
                        },
                        children: [
                            {
                                id   : 'full-width-1',
                                title: 'Full Width #1',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/full-width-1'
                            },
                            {
                                id   : 'full-width-2',
                                title: 'Full Width #2',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/full-width-2'
                            },
                            {
                                id   : 'full-width-tabbed-1',
                                title: 'Full Width Tabbed #1',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/full-width-tabbed-1'
                            },
                            {
                                id   : 'full-width-tabbed-2',
                                title: 'Full Width Tabbed #2',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/full-width-tabbed-2'
                            },
                            {
                                id   : 'left-sidebar-1',
                                title: 'Left Sidebar #1',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/left-sidebar-1'
                            },
                            {
                                id   : 'left-sidebar-2',
                                title: 'Left Sidebar #2',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/left-sidebar-2'
                            },
                            {
                                id   : 'left-sidebar-tabbed-1',
                                title: 'Left Sidebar Tabbed #1',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/left-sidebar-tabbed-1'
                            },
                            {
                                id   : 'left-sidebar-tabbed-2',
                                title: 'Left Sidebar Tabbed #2',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/left-sidebar-tabbed-2'
                            },
                            {
                                id   : 'right-sidebar-1',
                                title: 'Right Sidebar #1',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/right-sidebar-1'
                            },
                            {
                                id   : 'right-sidebar-2',
                                title: 'Right Sidebar #2',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/right-sidebar-2'
                            },
                            {
                                id   : 'right-sidebar-tabbed-1',
                                title: 'Right Sidebar Tabbed #1',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/right-sidebar-tabbed-1'
                            },
                            {
                                id   : 'right-sidebar-tabbed-2',
                                title: 'Right Sidebar Tabbed #2',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/right-sidebar-tabbed-2'
                            }
                        ]
                    },
                    {
                        id      : 'simple',
                        title   : 'Simple',
                        type    : 'collapsable',
                        badge   : {
                            title     : '10',
                            background: '#525E8A',
                            color     : '#FFFFFF'
                        },
                        children: [
                            {
                                id   : 'full-width-1',
                                title: 'Full Width #1',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/full-width-1'
                            },
                            {
                                id   : 'full-width-tabbed-1',
                                title: 'Full Width Tabbed #1',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/full-width-tabbed-1'
                            },
                            {
                                id   : 'left-sidebar-1',
                                title: 'Left Sidebar #1',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/left-sidebar-1'
                            },
                            {
                                id   : 'left-sidebar-2',
                                title: 'Left Sidebar #2',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/left-sidebar-2'
                            },
                            {
                                id   : 'left-sidebar-3',
                                title: 'Left Sidebar #3',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/left-sidebar-3'
                            },
                            {
                                id   : 'left-sidebar-4',
                                title: 'Left Sidebar #4',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/left-sidebar-4'
                            },
                            {
                                id   : 'right-sidebar-1',
                                title: 'Right Sidebar #1',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/right-sidebar-1'
                            },
                            {
                                id   : 'right-sidebar-2',
                                title: 'Right Sidebar #2',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/right-sidebar-2'
                            },
                            {
                                id   : 'right-sidebar-3',
                                title: 'Right Sidebar #3',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/right-sidebar-3'
                            },
                            {
                                id   : 'right-sidebar-4',
                                title: 'Right Sidebar #4',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/right-sidebar-4'
                            }
                        ]
                    },
                    {
                        id   : 'blank',
                        title: 'Blank',
                        type : 'basic',
                        link : '/ui/page-layouts/blank'
                    }
                ]
            },
            {
                id   : 'colors',
                title: 'Colors',
                type : 'basic',
                icon : 'color_lens',
                link : '/ui/colors'
            }
        ]
    },
    {
        id         : 'documentation-aside',
        title      : 'Documentation',
        type       : 'aside',
        icon       : 'book',
        iconFontSet: 'iconsmind',
        children   : [
            {
                id   : 'changelog',
                title: 'Changelog',
                type : 'basic',
                icon : 'update',
                link : '/docs/changelog',
                badge: {
                    title     : '6.3.1',
                    style     : 'rounded',
                    background: '#EC0C8E',
                    color     : '#FFFFFF'
                }
            },
            {
                id      : 'getting-started',
                title   : 'Getting Started',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'introduction',
                        title: 'Introduction',
                        type : 'basic',
                        link : '/docs/getting-started/introduction'
                    },
                    {
                        id   : 'installation',
                        title: 'Installation',
                        type : 'basic',
                        link : '/docs/getting-started/installation'
                    }
                ]
            },
            {
                id      : 'working-with-fuse',
                title   : 'Working with Fuse',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'server',
                        title: 'Server',
                        type : 'basic',
                        link : '/docs/working-with-fuse/server'
                    },
                    {
                        id   : 'production',
                        title: 'Production',
                        type : 'basic',
                        link : '/docs/working-with-fuse/production'
                    },
                    {
                        id   : 'directory-structure',
                        title: 'Directory Structure',
                        type : 'basic',
                        link : '/docs/working-with-fuse/directory-structure'
                    },
                    {
                        id   : 'updating-fuse',
                        title: 'Updating Fuse',
                        type : 'basic',
                        link : '/docs/working-with-fuse/updating-fuse'
                    },
                    {
                        id   : 'multi-language',
                        title: 'Multi Language',
                        type : 'basic',
                        link : '/docs/working-with-fuse/multi-language'
                    },
                    {
                        id   : 'material-theming',
                        title: 'Material Theming',
                        type : 'basic',
                        link : '/docs/working-with-fuse/material-theming'
                    },
                    {
                        id   : 'theme-layouts',
                        title: 'Theme Layouts',
                        type : 'basic',
                        link : '/docs/working-with-fuse/theme-layouts'
                    },
                    {
                        id   : 'page-layouts',
                        title: 'Page Layouts',
                        type : 'basic',
                        link : '/docs/working-with-fuse/page-layouts'
                    }
                ]
            },
            {
                id      : 'components',
                title   : 'Components',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'cards',
                        title: 'Cards',
                        type : 'basic',
                        link : '/docs/components/cards'
                    },
                    {
                        id   : 'countdown',
                        title: 'Countdown',
                        type : 'basic',
                        link : '/docs/components/countdown'
                    },
                    {
                        id   : 'highlight',
                        title: 'Highlight',
                        type : 'basic',
                        link : '/docs/components/highlight'
                    },
                    {
                        id   : 'material-color-picker',
                        title: 'Material Color Picker',
                        type : 'basic',
                        link : '/docs/components/material-color-picker'
                    },
                    {
                        id   : 'navigation',
                        title: 'Navigation',
                        type : 'basic',
                        link : '/docs/components/navigation'
                    },
                    {
                        id   : 'progress-bar',
                        title: 'Progress Bar',
                        type : 'basic',
                        link : '/docs/components/progress-bar'
                    },
                    {
                        id   : 'search-bar',
                        title: 'Search Bar',
                        type : 'basic',
                        link : '/docs/components/search-bar'
                    },
                    {
                        id   : 'sidebar',
                        title: 'Sidebar',
                        type : 'basic',
                        link : '/docs/components/sidebar'
                    },
                    {
                        id   : 'shortcuts',
                        title: 'Shortcuts',
                        type : 'basic',
                        link : '/docs/components/shortcuts'
                    },
                    {
                        id   : 'widget',
                        title: 'Widget',
                        type : 'basic',
                        link : '/docs/components/widget'
                    }
                ]
            },
            {
                id      : '3rd-party-components',
                title   : '3rd Party Components',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id      : 'datatables',
                        title   : 'Datatables',
                        type    : 'collapsable',
                        children: [
                            {
                                id   : 'ngxdatatable',
                                title: 'ngx-datatable',
                                type : 'basic',
                                link : '/docs/components-third-party/datatables/ngx-datatable'
                            }
                        ]
                    },
                    {
                        id   : 'google-maps',
                        title: 'Google Maps',
                        type : 'basic',
                        link : '/docs/components-third-party/google-maps'
                    }
                ]
            },
            {
                id      : 'directives',
                title   : 'Directives',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'fuse-if-on-dom',
                        title: 'fuseIfOnDom',
                        type : 'basic',
                        link : '/docs/directives/fuse-if-on-dom'
                    },
                    {
                        id   : 'fuse-inner-scroll',
                        title: 'fuseInnerScroll',
                        type : 'basic',
                        link : '/docs/directives/fuse-inner-scroll'
                    },
                    {
                        id   : 'fuse-mat-sidenav',
                        title: 'fuseMatSidenav',
                        type : 'basic',
                        link : '/docs/directives/fuse-mat-sidenav'
                    },
                    {
                        id   : 'fuse-perfect-scrollbar',
                        title: 'fusePerfectScrollbar',
                        type : 'basic',
                        link : '/docs/directives/fuse-perfect-scrollbar'
                    }
                ]
            },
            {
                id      : 'services',
                title   : 'Services',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'fuse-config',
                        title: 'Fuse Config',
                        type : 'basic',
                        link : '/docs/services/fuse-config'
                    },
                    {
                        id   : 'fuse-splash-screen',
                        title: 'Fuse Splash Screen',
                        type : 'basic',
                        link : '/docs/services/fuse-splash-screen'
                    }
                ]
            }
        ]
    }
];

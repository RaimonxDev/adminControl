import { AsmNavigationItem } from '@assembly';

/* tslint:disable:max-line-length */
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
        icon : 'dashboard',
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
        id   : 'applications.tasks',
        title: 'Tasks',
        type : 'basic',
        icon : 'check_box',
        link : '/apps/tasks'
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
                id      : 'pages.authentication.login',
                title   : 'Login',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'pages.authentication.login.classic',
                        title: 'Classic',
                        type : 'basic',
                        link : '/pages/authentication/login/classic'
                    },
                    {
                        id   : 'pages.authentication.login.modern',
                        title: 'Modern',
                        type : 'basic',
                        link : '/pages/authentication/login/modern'
                    },
                    {
                        id   : 'pages.authentication.login.modern-alt',
                        title: 'Modern Alt.',
                        type : 'basic',
                        link : '/pages/authentication/login/modern-alt'
                    },
                    {
                        id   : 'pages.authentication.login.fullscreen',
                        title: 'Fullscreen',
                        type : 'basic',
                        link : '/pages/authentication/login/fullscreen'
                    },
                    {
                        id   : 'pages.authentication.login.fullscreen-alt',
                        title: 'Fullscreen Alt.',
                        type : 'basic',
                        link : '/pages/authentication/login/fullscreen-alt'
                    }
                ]
            },
            {
                id      : 'pages.authentication.signup',
                title   : 'Sign up',
                type    : 'collapsable',
                link    : '/pages/authentication/signup',
                children: [
                    {
                        id   : 'pages.authentication.signup.classic',
                        title: 'Classic',
                        type : 'basic',
                        link : '/pages/authentication/signup/classic'
                    },
                    {
                        id   : 'pages.authentication.signup.modern',
                        title: 'Modern',
                        type : 'basic',
                        link : '/pages/authentication/signup/modern'
                    },
                    {
                        id   : 'pages.authentication.signup.modern-alt',
                        title: 'Modern Alt.',
                        type : 'basic',
                        link : '/pages/authentication/signup/modern-alt'
                    },
                    {
                        id   : 'pages.authentication.signup.fullscreen',
                        title: 'Fullscreen',
                        type : 'basic',
                        link : '/pages/authentication/signup/fullscreen'
                    },
                    {
                        id   : 'pages.authentication.signup.fullscreen-alt',
                        title: 'Fullscreen Alt.',
                        type : 'basic',
                        link : '/pages/authentication/signup/fullscreen-alt'
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
                id      : 'pages.authentication.logout',
                title   : 'Logout',
                type    : 'collapsable',
                link    : '/pages/authentication/logout',
                children: [
                    {
                        id   : 'pages.authentication.logout.classic',
                        title: 'Classic',
                        type : 'basic',
                        link : '/pages/authentication/logout/classic'
                    },
                    {
                        id   : 'pages.authentication.logout.modern',
                        title: 'Modern',
                        type : 'basic',
                        link : '/pages/authentication/logout/modern'
                    },
                    {
                        id   : 'pages.authentication.logout.modern-alt',
                        title: 'Modern Alt.',
                        type : 'basic',
                        link : '/pages/authentication/logout/modern-alt'
                    },
                    {
                        id   : 'pages.authentication.logout.fullscreen',
                        title: 'Fullscreen',
                        type : 'basic',
                        link : '/pages/authentication/logout/fullscreen'
                    },
                    {
                        id   : 'pages.authentication.logout.fullscreen-alt',
                        title: 'Fullscreen Alt.',
                        type : 'basic',
                        link : '/pages/authentication/logout/fullscreen-alt'
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
    },
    {
        id      : 'ui-elements',
        title   : 'UI Elements',
        subtitle: 'User interface elements',
        type    : 'subheader',
        icon    : 'web'
    },
    {
        id      : 'ui-elements.material-components',
        title   : 'Material components',
        type    : 'collapsable',
        icon    : 'layers',
        children: [
            {
                id   : 'ui-element.material-components.overview',
                title: 'Overview',
                type : 'basic',
                link : '/ui/material-components/overview'
            },
            {
                id      : 'ui-element.material-components.components',
                title   : 'Components',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'ui-element.material-components.components.form-controls.autocomplete',
                        title: 'Autocomplete',
                        type : 'basic',
                        link : '/ui/material-components/components/autocomplete'
                    },
                    {
                        id   : 'ui-element.material-components.components.layout.badge',
                        title: 'Badge',
                        type : 'basic',
                        link : '/ui/material-components/components/badge'
                    },
                    {
                        id   : 'ui-element.material-components.components.layout.bottom-sheet',
                        title: 'Bottom sheet',
                        type : 'basic',
                        link : '/ui/material-components/components/bottom-sheet'
                    },
                    {
                        id   : 'ui-element.material-components.components.buttons-indicators.button',
                        title: 'Button',
                        type : 'basic',
                        link : '/ui/material-components/components/button'
                    },
                    {
                        id   : 'ui-element.material-components.components.buttons-indicators.button-toggle',
                        title: 'Button toggle',
                        type : 'basic',
                        link : '/ui/material-components/components/button-toggle'
                    },
                    {
                        id   : 'ui-element.material-components.components.layout.card',
                        title: 'Card',
                        type : 'basic',
                        link : '/ui/material-components/components/card'
                    },
                    {
                        id   : 'ui-element.material-components.components.form-controls.checkbox',
                        title: 'Checkbox',
                        type : 'basic',
                        link : '/ui/material-components/components/checkbox'
                    },
                    {
                        id   : 'ui-element.material-components.components.buttons-indicators.chips',
                        title: 'Chips',
                        type : 'basic',
                        link : '/ui/material-components/components/chips'
                    },
                    {
                        id   : 'ui-element.material-components.components.form-controls.datepicker',
                        title: 'Datepicker',
                        type : 'basic',
                        link : '/ui/material-components/components/datepicker'
                    },
                    {
                        id   : 'ui-element.material-components.components.popups-modals.dialog',
                        title: 'Dialog',
                        type : 'basic',
                        link : '/ui/material-components/components/dialog'
                    },
                    {
                        id   : 'ui-element.material-components.components.layout.divider',
                        title: 'Divider',
                        type : 'basic',
                        link : '/ui/material-components/components/divider'
                    },
                    /*{
                        id   : 'ui-element.material-components.components.layout.elevation',
                        title: 'Elevation',
                        type : 'basic',
                        link : '/ui/material-components/components/elevation'
                    },*/
                    {
                        id   : 'ui-element.material-components.components.layout.expansion-panel',
                        title: 'Expansion panel',
                        type : 'basic',
                        link : '/ui/material-components/components/expansion'
                    },
                    {
                        id   : 'ui-element.material-components.components.form-controls.form-field',
                        title: 'Form field',
                        type : 'basic',
                        link : '/ui/material-components/components/form-field'
                    },
                    {
                        id   : 'ui-element.material-components.components.layout.grid-list',
                        title: 'Grid list',
                        type : 'basic',
                        link : '/ui/material-components/components/grid-list'
                    },
                    {
                        id   : 'ui-element.material-components.components.buttons-indicators.icon',
                        title: 'Icon',
                        type : 'basic',
                        link : '/ui/material-components/components/icon'
                    },
                    {
                        id   : 'ui-element.material-components.components.form-controls.input',
                        title: 'Input',
                        type : 'basic',
                        link : '/ui/material-components/components/input'
                    },
                    {
                        id   : 'ui-element.material-components.components.layout.list',
                        title: 'List',
                        type : 'basic',
                        link : '/ui/material-components/components/list'
                    },
                    {
                        id   : 'ui-element.material-components.components.navigation.menu',
                        title: 'Menu',
                        type : 'basic',
                        link : '/ui/material-components/components/menu'
                    },
                    {
                        id   : 'ui-element.material-components.components.buttons-indicators.progress-bar',
                        title: 'Progress bar',
                        type : 'basic',
                        link : '/ui/material-components/components/progress-bar'
                    },
                    {
                        id   : 'ui-element.material-components.components.buttons-indicators.progress-spinner',
                        title: 'Progress spinner',
                        type : 'basic',
                        link : '/ui/material-components/components/progress-spinner'
                    },
                    {
                        id   : 'ui-element.material-components.components.form-controls.radio-button',
                        title: 'Radio button',
                        type : 'basic',
                        link : '/ui/material-components/components/radio'
                    },
                    {
                        id   : 'ui-element.material-components.components.buttons-indicators.ripples',
                        title: 'Ripples',
                        type : 'basic',
                        link : '/ui/material-components/components/ripple'
                    },
                    {
                        id   : 'ui-element.material-components.components.form-controls.select',
                        title: 'Select',
                        type : 'basic',
                        link : '/ui/material-components/components/select'
                    },
                    {
                        id   : 'ui-element.material-components.components.navigation.sidenav',
                        title: 'Sidebar',
                        type : 'basic',
                        link : '/ui/material-components/components/sidenav'
                    },
                    {
                        id   : 'ui-element.material-components.components.form-controls.slider',
                        title: 'Slider',
                        type : 'basic',
                        link : '/ui/material-components/components/slider'
                    },
                    {
                        id   : 'ui-element.material-components.components.form-controls.slide-toggle',
                        title: 'Slide toggle',
                        type : 'basic',
                        link : '/ui/material-components/components/slide-toggle'
                    },
                    {
                        id   : 'ui-element.material-components.components.popups-modals.snackbar',
                        title: 'Snackbar',
                        type : 'basic',
                        link : '/ui/material-components/components/snack-bar'
                    },
                    {
                        id   : 'ui-element.material-components.components.layout.stepper',
                        title: 'Stepper',
                        type : 'basic',
                        link : '/ui/material-components/components/stepper'
                    },
                    {
                        id   : 'ui-element.material-components.components.data-table.table',
                        title: 'Table',
                        type : 'basic',
                        link : '/ui/material-components/components/table'
                    },
                    {
                        id   : 'ui-element.material-components.components.data-table.paginator',
                        title: 'Table - Paginator',
                        type : 'basic',
                        link : '/ui/material-components/components/paginator'
                    },
                    {
                        id   : 'ui-element.material-components.components.data-table.sort-header',
                        title: 'Table - Sort header',
                        type : 'basic',
                        link : '/ui/material-components/components/sort'
                    },
                    {
                        id   : 'ui-element.material-components.components.layout.tabs',
                        title: 'Tabs',
                        type : 'basic',
                        link : '/ui/material-components/components/tabs'
                    },
                    {
                        id   : 'ui-element.material-components.components.navigation.toolbar',
                        title: 'Toolbar',
                        type : 'basic',
                        link : '/ui/material-components/components/toolbar'
                    },
                    {
                        id   : 'ui-element.material-components.components.popups-modals.tooltip',
                        title: 'Tooltip',
                        type : 'basic',
                        link : '/ui/material-components/components/tooltip'
                    },
                    {
                        id   : 'ui-element.material-components.components.layout.tree',
                        title: 'Tree',
                        type : 'basic',
                        link : '/ui/material-components/components/tree'
                    }
                ]
            }
        ]
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
        id  : 'divider-1',
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
        id  : 'divider-2',
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

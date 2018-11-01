import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';
import { mockWithAuth } from 'app/core/mock-api/with-auth';

import { AsmNavigationItem } from '@assembly/types';

@Injectable({
    providedIn: 'root'
})
export class MockNavigationData
{
    // Data
    private _defaultNavigation: AsmNavigationItem[] = [
        {
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
                        background: '#09d261',
                        color     : '#09d261'
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
                        background: '#09d261',
                        color     : '#09d261'
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
        },
        {
            id   : 'applications',
            title: 'Applications',
            type : 'subheader',
            icon : 'apps'
        },
        {
            id      : 'dashboard',
            title   : 'Dashboard',
            subtitle: 'Health tracking',
            type    : 'basic',
            icon    : 'dashboards',
            link    : 'apps/dashboard/'
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
                background: '#09d261',
                color     : '#09d261'
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
        },
        {
            id   : 'pages',
            title: 'Pages',
            type : 'subheader',
            icon : 'pages'
        },
        {
            id      : 'authentication',
            title   : 'Authentication',
            type    : 'collapsable',
            icon    : 'lock',
            badge   : {
                title     : '10',
                background: '#525e8a',
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
            icon    : 'error',
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
            icon    : 'attach_money',
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
            icon : 'help',
            link : '/pages/faq'
        },
        {
            id   : 'knowledge-base',
            title: 'Knowledge Base',
            type : 'basic',
            icon : 'import_contacts',
            link : '/pages/knowledge-base'
        },
        {
            id   : 'user-interface',
            title: 'User Interface',
            type : 'subheader',
            icon : 'web'
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
                        background: '#525e8a',
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
                        background: '#525e8a',
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
        },
        {
            id   : 'angular-material-elements',
            title: 'Angular Material Elements',
            type : 'subheader',
            icon : 'layers'
        },
        {
            id      : 'form-controls',
            title   : 'Form Controls',
            type    : 'collapsable',
            icon    : 'layers',
            children: [
                {
                    id   : 'autocomplete',
                    title: 'Autocomplete',
                    type : 'basic',
                    link : '/angular-material-elements/autocomplete'
                },
                {
                    id   : 'checkbox',
                    title: 'Checkbox',
                    type : 'basic',
                    link : '/angular-material-elements/checkbox'
                },
                {
                    id   : 'datepicker',
                    title: 'Datepicker',
                    type : 'basic',
                    link : '/angular-material-elements/datepicker'
                },
                {
                    id   : 'form-field',
                    title: 'Form field',
                    type : 'basic',
                    link : '/angular-material-elements/form-field'
                },
                {
                    id   : 'input',
                    title: 'Input',
                    type : 'basic',
                    link : '/angular-material-elements/input'
                },
                {
                    id   : 'radio-button',
                    title: 'Radio button',
                    type : 'basic',
                    link : '/angular-material-elements/radio-button'
                },
                {
                    id   : 'select',
                    title: 'Select',
                    type : 'basic',
                    link : '/angular-material-elements/select'
                },
                {
                    id   : 'slider',
                    title: 'Slider',
                    type : 'basic',
                    link : '/angular-material-elements/slider'
                },
                {
                    id   : 'slide-toggle',
                    title: 'Slide toggle',
                    type : 'basic',
                    link : '/angular-material-elements/slide-toggle'
                }
            ]
        },
        {
            id      : 'navigation',
            title   : 'Navigation',
            type    : 'collapsable',
            icon    : 'layers',
            children: [
                {
                    id   : 'menu',
                    title: 'Menu',
                    type : 'basic',
                    link : '/angular-material-elements/menu'
                },
                {
                    id   : 'sidenav',
                    title: 'Sidebar',
                    type : 'basic',
                    link : '/angular-material-elements/sidenav'
                },
                {
                    id   : 'toolbar',
                    title: 'Toolbar',
                    type : 'basic',
                    link : '/angular-material-elements/toolbar'
                }
            ]
        },
        {
            id      : 'layout',
            title   : 'Layout',
            type    : 'collapsable',
            icon    : 'layers',
            children: [
                {
                    id   : 'badge',
                    title: 'Badge',
                    type : 'basic',
                    link : '/angular-material-elements/badge'
                },
                {
                    id   : 'bottom-sheet',
                    title: 'Bottom Sheet',
                    type : 'basic',
                    link : '/angular-material-elements/bottom-sheet'
                },
                {
                    id   : 'card',
                    title: 'Card',
                    type : 'basic',
                    link : '/angular-material-elements/card'
                },
                {
                    id   : 'divider',
                    title: 'Divider',
                    type : 'basic',
                    link : '/angular-material-elements/divider'
                },
                {
                    id   : 'elevation',
                    title: 'Elevation',
                    type : 'basic',
                    link : '/angular-material-elements/elevation'
                },
                {
                    id   : 'expansion-panel',
                    title: 'Expansion Panel',
                    type : 'basic',
                    link : '/angular-material-elements/expansion-panel'
                },
                {
                    id   : 'grid-list',
                    title: 'Grid list',
                    type : 'basic',
                    link : '/angular-material-elements/grid-list'
                },
                {
                    id   : 'list',
                    title: 'List',
                    type : 'basic',
                    link : '/angular-material-elements/list'
                },
                {
                    id   : 'stepper',
                    title: 'Stepper',
                    type : 'basic',
                    link : '/angular-material-elements/stepper'
                },
                {
                    id   : 'tabs',
                    title: 'Tabs',
                    type : 'basic',
                    link : '/angular-material-elements/tabs'
                },
                {
                    id   : 'tree',
                    title: 'Tree',
                    type : 'basic',
                    link : '/angular-material-elements/tree'
                }
            ]
        },
        {
            id      : 'buttons-indicators',
            title   : 'Buttons & Indicators',
            type    : 'collapsable',
            icon    : 'layers',
            children: [
                {
                    id   : 'button',
                    title: 'Button',
                    type : 'basic',
                    link : '/angular-material-elements/button'
                },
                {
                    id   : 'button-toggle',
                    title: 'Button toggle',
                    type : 'basic',
                    link : '/angular-material-elements/button-toggle'
                },
                {
                    id   : 'chips',
                    title: 'Chips',
                    type : 'basic',
                    link : '/angular-material-elements/chips'
                },
                {
                    id   : 'icon',
                    title: 'icon',
                    type : 'basic',
                    link : '/angular-material-elements/icon'
                },
                {
                    id   : 'progress-spinner',
                    title: 'Progress spinner',
                    type : 'basic',
                    link : '/angular-material-elements/progress-spinner'
                },
                {
                    id   : 'progress-bar',
                    title: 'Progress bar',
                    type : 'basic',
                    link : '/angular-material-elements/progress-bar'
                }
            ]
        },
        {
            id      : 'popups-modals',
            title   : 'Popups & Modals',
            type    : 'collapsable',
            icon    : 'layers',
            children: [
                {
                    id   : 'dialog',
                    title: 'Dialog',
                    type : 'basic',
                    link : '/angular-material-elements/dialog'
                },
                {
                    id   : 'snackbar',
                    title: 'Snackbar',
                    type : 'basic',
                    link : '/angular-material-elements/snackbar'
                },
                {
                    id   : 'tooltip',
                    title: 'Tooltip',
                    type : 'basic',
                    link : '/angular-material-elements/tooltip'
                }
            ]
        },
        {
            id      : 'data-table',
            title   : 'Data table',
            type    : 'collapsable',
            icon    : 'layers',
            children: [
                {
                    id   : 'paginator',
                    title: 'Paginator',
                    type : 'basic',
                    link : '/angular-material-elements/paginator'
                },
                {
                    id   : 'sort-header',
                    title: 'Sort header',
                    type : 'basic',
                    link : '/angular-material-elements/sort-header'
                },
                {
                    id   : 'table',
                    title: 'Table',
                    type : 'basic',
                    link : '/angular-material-elements/table'
                }
            ]
        },
        {
            id   : 'documentation',
            title: 'Documentation',
            icon : 'import_contacts',
            type : 'subheader'
        },
        {
            id   : 'changelog',
            title: 'Changelog',
            type : 'basic',
            icon : 'update',
            link : '/documentation/changelog',
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
                    link : '/documentation/getting-started/introduction'
                },
                {
                    id   : 'installation',
                    title: 'Installation',
                    type : 'basic',
                    link : '/documentation/getting-started/installation'
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
                    link : '/documentation/working-with-fuse/server'
                },
                {
                    id   : 'production',
                    title: 'Production',
                    type : 'basic',
                    link : '/documentation/working-with-fuse/production'
                },
                {
                    id   : 'directory-structure',
                    title: 'Directory Structure',
                    type : 'basic',
                    link : '/documentation/working-with-fuse/directory-structure'
                },
                {
                    id   : 'updating-fuse',
                    title: 'Updating Fuse',
                    type : 'basic',
                    link : '/documentation/working-with-fuse/updating-fuse'
                },
                {
                    id   : 'multi-language',
                    title: 'Multi Language',
                    type : 'basic',
                    link : '/documentation/working-with-fuse/multi-language'
                },
                {
                    id   : 'material-theming',
                    title: 'Material Theming',
                    type : 'basic',
                    link : '/documentation/working-with-fuse/material-theming'
                },
                {
                    id   : 'theme-layouts',
                    title: 'Theme Layouts',
                    type : 'basic',
                    link : '/documentation/working-with-fuse/theme-layouts'
                },
                {
                    id   : 'page-layouts',
                    title: 'Page Layouts',
                    type : 'basic',
                    link : '/documentation/working-with-fuse/page-layouts'
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
                    link : '/documentation/components/cards'
                },
                {
                    id   : 'countdown',
                    title: 'Countdown',
                    type : 'basic',
                    link : '/documentation/components/countdown'
                },
                {
                    id   : 'highlight',
                    title: 'Highlight',
                    type : 'basic',
                    link : '/documentation/components/highlight'
                },
                {
                    id   : 'material-color-picker',
                    title: 'Material Color Picker',
                    type : 'basic',
                    link : '/documentation/components/material-color-picker'
                },
                {
                    id   : 'navigation',
                    title: 'Navigation',
                    type : 'basic',
                    link : '/documentation/components/navigation'
                },
                {
                    id   : 'progress-bar',
                    title: 'Progress Bar',
                    type : 'basic',
                    link : '/documentation/components/progress-bar'
                },
                {
                    id   : 'search-bar',
                    title: 'Search Bar',
                    type : 'basic',
                    link : '/documentation/components/search-bar'
                },
                {
                    id   : 'sidebar',
                    title: 'Sidebar',
                    type : 'basic',
                    link : '/documentation/components/sidebar'
                },
                {
                    id   : 'shortcuts',
                    title: 'Shortcuts',
                    type : 'basic',
                    link : '/documentation/components/shortcuts'
                },
                {
                    id   : 'widget',
                    title: 'Widget',
                    type : 'basic',
                    link : '/documentation/components/widget'
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
                            link : '/documentation/components-third-party/datatables/ngx-datatable'
                        }
                    ]
                },
                {
                    id   : 'google-maps',
                    title: 'Google Maps',
                    type : 'basic',
                    link : '/documentation/components-third-party/google-maps'
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
                    link : '/documentation/directives/fuse-if-on-dom'
                },
                {
                    id   : 'fuse-inner-scroll',
                    title: 'fuseInnerScroll',
                    type : 'basic',
                    link : '/documentation/directives/fuse-inner-scroll'
                },
                {
                    id   : 'fuse-mat-sidenav',
                    title: 'fuseMatSidenav',
                    type : 'basic',
                    link : '/documentation/directives/fuse-mat-sidenav'
                },
                {
                    id   : 'fuse-perfect-scrollbar',
                    title: 'fusePerfectScrollbar',
                    type : 'basic',
                    link : '/documentation/directives/fuse-perfect-scrollbar'
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
                    link : '/documentation/services/fuse-config'
                },
                {
                    id   : 'fuse-splash-screen',
                    title: 'Fuse Splash Screen',
                    type : 'basic',
                    link : '/documentation/services/fuse-splash-screen'
                }
            ]
        }
    ];
    private _compactNavigation: AsmNavigationItem[] = [
        {
            id         : 'dashboards-aside',
            title      : 'Dashboards',
            type       : 'aside',
            icon       : 'Line-Optimization',
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
            icon       : 'Windows-2',
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
                        background: '#09d261',
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
            icon       : 'Files',
            iconFontSet: 'iconsmind',
            children   : [
                {
                    id      : 'authentication',
                    title   : 'Authentication',
                    type    : 'collapsable',
                    icon    : 'lock',
                    badge   : {
                        title     : '10',
                        background: '#525e8a',
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
                    icon    : 'error',
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
                    icon    : 'attach_money',
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
                    icon : 'help',
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
            icon       : 'Check',
            iconFontSet: 'iconsmind',
            children   : [
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
                                background: '#525e8a',
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
                                background: '#525e8a',
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
            icon       : 'Book',
            iconFontSet: 'iconsmind',
            children   : [
                {
                    id   : 'changelog',
                    title: 'Changelog',
                    type : 'basic',
                    icon : 'update',
                    link : '/documentation/changelog',
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
                            link : '/documentation/getting-started/introduction'
                        },
                        {
                            id   : 'installation',
                            title: 'Installation',
                            type : 'basic',
                            link : '/documentation/getting-started/installation'
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
                            link : '/documentation/working-with-fuse/server'
                        },
                        {
                            id   : 'production',
                            title: 'Production',
                            type : 'basic',
                            link : '/documentation/working-with-fuse/production'
                        },
                        {
                            id   : 'directory-structure',
                            title: 'Directory Structure',
                            type : 'basic',
                            link : '/documentation/working-with-fuse/directory-structure'
                        },
                        {
                            id   : 'updating-fuse',
                            title: 'Updating Fuse',
                            type : 'basic',
                            link : '/documentation/working-with-fuse/updating-fuse'
                        },
                        {
                            id   : 'multi-language',
                            title: 'Multi Language',
                            type : 'basic',
                            link : '/documentation/working-with-fuse/multi-language'
                        },
                        {
                            id   : 'material-theming',
                            title: 'Material Theming',
                            type : 'basic',
                            link : '/documentation/working-with-fuse/material-theming'
                        },
                        {
                            id   : 'theme-layouts',
                            title: 'Theme Layouts',
                            type : 'basic',
                            link : '/documentation/working-with-fuse/theme-layouts'
                        },
                        {
                            id   : 'page-layouts',
                            title: 'Page Layouts',
                            type : 'basic',
                            link : '/documentation/working-with-fuse/page-layouts'
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
                            link : '/documentation/components/cards'
                        },
                        {
                            id   : 'countdown',
                            title: 'Countdown',
                            type : 'basic',
                            link : '/documentation/components/countdown'
                        },
                        {
                            id   : 'highlight',
                            title: 'Highlight',
                            type : 'basic',
                            link : '/documentation/components/highlight'
                        },
                        {
                            id   : 'material-color-picker',
                            title: 'Material Color Picker',
                            type : 'basic',
                            link : '/documentation/components/material-color-picker'
                        },
                        {
                            id   : 'navigation',
                            title: 'Navigation',
                            type : 'basic',
                            link : '/documentation/components/navigation'
                        },
                        {
                            id   : 'progress-bar',
                            title: 'Progress Bar',
                            type : 'basic',
                            link : '/documentation/components/progress-bar'
                        },
                        {
                            id   : 'search-bar',
                            title: 'Search Bar',
                            type : 'basic',
                            link : '/documentation/components/search-bar'
                        },
                        {
                            id   : 'sidebar',
                            title: 'Sidebar',
                            type : 'basic',
                            link : '/documentation/components/sidebar'
                        },
                        {
                            id   : 'shortcuts',
                            title: 'Shortcuts',
                            type : 'basic',
                            link : '/documentation/components/shortcuts'
                        },
                        {
                            id   : 'widget',
                            title: 'Widget',
                            type : 'basic',
                            link : '/documentation/components/widget'
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
                                    link : '/documentation/components-third-party/datatables/ngx-datatable'
                                }
                            ]
                        },
                        {
                            id   : 'google-maps',
                            title: 'Google Maps',
                            type : 'basic',
                            link : '/documentation/components-third-party/google-maps'
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
                            link : '/documentation/directives/fuse-if-on-dom'
                        },
                        {
                            id   : 'fuse-inner-scroll',
                            title: 'fuseInnerScroll',
                            type : 'basic',
                            link : '/documentation/directives/fuse-inner-scroll'
                        },
                        {
                            id   : 'fuse-mat-sidenav',
                            title: 'fuseMatSidenav',
                            type : 'basic',
                            link : '/documentation/directives/fuse-mat-sidenav'
                        },
                        {
                            id   : 'fuse-perfect-scrollbar',
                            title: 'fusePerfectScrollbar',
                            type : 'basic',
                            link : '/documentation/directives/fuse-perfect-scrollbar'
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
                            link : '/documentation/services/fuse-config'
                        },
                        {
                            id   : 'fuse-splash-screen',
                            title: 'Fuse Splash Screen',
                            type : 'basic',
                            link : '/documentation/services/fuse-splash-screen'
                        }
                    ]
                }
            ]
        }
    ];

    /**
     * constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @param mock
     */
    init(mock: MockAdapter): void
    {
        // GET - Default navigation
        mock.onGet('api/navigation/default')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    {
                        navigation: this._defaultNavigation
                    }
                ];
            }));

        // GET - Compact navigation
        mock.onGet('api/navigation/compact')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    {
                        navigation: this._compactNavigation
                    }
                ];
            }));
    }
}

/* tslint:disable:max-line-length */
import { AsmNavigationItem } from '@assembly/components/navigation';

export const defaultNavigation: AsmNavigationItem[] = [
    {
        id      : 'applications',
        title   : 'Applications',
        subtitle: 'Custom made application designs',
        type    : 'group',
        icon    : 'apps',
        children: [
            {
                id   : 'applications.analytics-dashboard',
                title: 'Analytics Dashboard',
                type : 'basic',
                icon : 'bar_chart',
                link : '/apps/analytics-dashboard'
            },
            {
                id   : 'applications.cryptocurrency-dashboard',
                title: 'Cryptocurrency Dashboard',
                type : 'basic',
                icon : 'monetization_on',
                link : '/apps/cryptocurrency-dashboard'
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
                id      : 'applications.ecommerce',
                title   : 'ECommerce',
                type    : 'collapsable',
                icon    : 'shopping_cart',
                children: [
                    {
                        id   : 'applications.ecommerce.inventory',
                        title: 'Inventory',
                        type : 'basic',
                        link : '/apps/ecommerce/inventory'
                    }
                ]
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
                        id   : 'user-interface.icons.heroicons',
                        title: 'Heroicons',
                        type : 'basic',
                        link : '/ui/icons/heroicons'
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
        id  : 'divider-1',
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
        icon    : 'heroicons:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        type    : 'aside',
        icon    : 'heroicons:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation',
        type    : 'aside',
        icon    : 'heroicons:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: AsmNavigationItem[] = [
    {
        id   : 'applications.analytics-dashboard',
        title: 'Analytics Dashboard',
        type : 'basic',
        icon : 'heroicons:chart-pie',
        link : '/apps/analytics-dashboard'
    },
    {
        id   : 'applications.cryptocurrency-dashboard',
        title: 'Cryptocurrency Dashboard',
        type : 'basic',
        icon : 'heroicons:currency-dollar',
        link : '/apps/cryptocurrency-dashboard'
    },
    {
        id      : 'applications.calendar',
        title   : 'Calendar',
        type    : 'basic',
        icon    : 'heroicons:calendar',
        link    : '/apps/calendar'
    },
    {
        id   : 'applications.contacts',
        title: 'Contacts',
        type : 'basic',
        icon : 'heroicons:user-group',
        link : '/apps/contacts',
        badge: {
            title     : 'NEW',
            style     : 'rounded',
            background: 'rgba(0, 0, 0, 0.24)',
            color     : '#FFFFFF'
        }
    },
    {
        id      : 'applications.ecommerce',
        title   : 'ECommerce',
        type    : 'collapsable',
        icon    : 'heroicons:shopping-cart',
        children: [
            {
                id   : 'applications.ecommerce.inventory',
                title: 'Inventory',
                type : 'basic',
                link : '/apps/ecommerce/inventory'
            }
        ]
    },
    {
        id   : 'applications.mailbox',
        title: 'Mailbox',
        type : 'basic',
        icon : 'heroicons:mail',
        link : '/apps/mailbox',
        badge: {
            title     : '27',
            style     : 'rounded',
            background: 'rgba(0, 0, 0, 0.24)',
            color     : '#FFFFFF'
        }
    },
    {
        id   : 'applications.tasks',
        title: 'Tasks',
        type : 'basic',
        icon : 'heroicons:check-circle',
        link : '/apps/tasks'
    },
    {
        id  : 'spacer-1',
        type: 'spacer'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: AsmNavigationItem[] = [
    {
        id      : 'applications',
        title   : 'Apps',
        type    : 'group',
        icon    : 'heroicons:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        type    : 'group',
        icon    : 'heroicons:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Misc',
        type    : 'group',
        icon    : 'heroicons:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'app/shared/shared.module';
import { DemoPlaceholderModule } from 'app/modules/admin/ui/page-layouts/common/demo-placeholder/demo-placeholder.module';
import { DemoPlaceholderComponent } from 'app/modules/admin/ui/page-layouts/common/demo-placeholder/demo-placeholder.component';
import { DemoSidebarModule } from 'app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.module';
import { LayoutOverviewModule } from 'app/modules/admin/ui/page-layouts/common/layout-overview/layout-overview.module';
import { LayoutOverviewComponent } from 'app/modules/admin/ui/page-layouts/common/layout-overview/layout-overview.component';

import { OverviewComponent } from 'app/modules/admin/ui/page-layouts/overview/overview.component';

import { FullwidthEmptyNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/empty/normal-scroll/empty.component';
import { FullwidthEmptyPageScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/empty/page-scroll/empty.component';

import { FullwidthStandardNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/standard/normal-scroll/standard.component';
import { FullwidthStandardPageScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/standard/page-scroll/standard.component';
import { FullwidthStandardContentScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/standard/content-scroll/standard.component';

import { FullwidthTabsNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/tabs/normal-scroll/tabs.component';
import { FullwidthTabsPageScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/tabs/page-scroll/tabs.component';
import { FullwidthTabsContentScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/tabs/content-scroll/tabs.component';

import { FullwidthNavNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/nav/normal-scroll/nav.component';
import { FullwidthNavPageScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/nav/page-scroll/nav.component';
import { FullwidthNavContentScrollComponent } from 'app/modules/admin/ui/page-layouts/fullwidth/nav/content-scroll/nav.component';

import { LeftSidebarFullheightBasicNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/basic/normal-scroll/basic.component';
import { LeftSidebarFullheightBasicPageScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/basic/page-scroll/basic.component';
import { LeftSidebarFullheightBasicContentScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/basic/content-scroll/basic.component';

import { LeftSidebarFullheightStandardNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/standard/normal-scroll/standard.component';
import { LeftSidebarFullheightStandardPageScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/standard/page-scroll/standard.component';
import { LeftSidebarFullheightStandardContentScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/standard/content-scroll/standard.component';
import { LeftSidebarFullheightStandardInnerScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/standard/inner-scroll/standard.component';

import { LeftSidebarFullheightTabsNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/tabs/normal-scroll/tabs.component';
import { LeftSidebarFullheightTabsPageScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/tabs/page-scroll/tabs.component';
import { LeftSidebarFullheightTabsContentScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/tabs/content-scroll/tabs.component';
import { LeftSidebarFullheightTabsInnerScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/tabs/inner-scroll/tabs.component';

import { LeftSidebarFullheightNavNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/nav/normal-scroll/nav.component';
import { LeftSidebarFullheightNavPageScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/nav/page-scroll/nav.component';
import { LeftSidebarFullheightNavContentScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/nav/content-scroll/nav.component';
import { LeftSidebarFullheightNavInnerScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/fullheight/nav/inner-scroll/nav.component';

import { LeftSidebarContentStandardNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/content/standard/normal-scroll/standard.component';
import { LeftSidebarContentStandardPageScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/content/standard/page-scroll/standard.component';
import { LeftSidebarContentStandardContentScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/content/standard/content-scroll/standard.component';

import { LeftSidebarContentTabsNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/content/tabs/normal-scroll/tabs.component';
import { LeftSidebarContentTabsPageScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/content/tabs/page-scroll/tabs.component';
import { LeftSidebarContentTabsContentScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/content/tabs/content-scroll/tabs.component';

import { LeftSidebarContentNavNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/content/nav/normal-scroll/nav.component';
import { LeftSidebarContentNavPageScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/content/nav/page-scroll/nav.component';
import { LeftSidebarContentNavContentScrollComponent } from 'app/modules/admin/ui/page-layouts/left-sidebar/content/nav/content-scroll/nav.component';

import { RightSidebarFullheightBasicNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/basic/normal-scroll/basic.component';
import { RightSidebarFullheightBasicPageScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/basic/page-scroll/basic.component';
import { RightSidebarFullheightBasicContentScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/basic/content-scroll/basic.component';

import { RightSidebarFullheightStandardNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/standard/normal-scroll/standard.component';
import { RightSidebarFullheightStandardPageScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/standard/page-scroll/standard.component';
import { RightSidebarFullheightStandardContentScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/standard/content-scroll/standard.component';
import { RightSidebarFullheightStandardInnerScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/standard/inner-scroll/standard.component';

import { RightSidebarFullheightTabsNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/tabs/normal-scroll/tabs.component';
import { RightSidebarFullheightTabsPageScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/tabs/page-scroll/tabs.component';
import { RightSidebarFullheightTabsContentScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/tabs/content-scroll/tabs.component';
import { RightSidebarFullheightTabsInnerScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/tabs/inner-scroll/tabs.component';

import { RightSidebarFullheightNavNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/nav/normal-scroll/nav.component';
import { RightSidebarFullheightNavPageScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/nav/page-scroll/nav.component';
import { RightSidebarFullheightNavContentScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/nav/content-scroll/nav.component';
import { RightSidebarFullheightNavInnerScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/fullheight/nav/inner-scroll/nav.component';

import { RightSidebarContentStandardNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/content/standard/normal-scroll/standard.component';
import { RightSidebarContentStandardPageScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/content/standard/page-scroll/standard.component';
import { RightSidebarContentStandardContentScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/content/standard/content-scroll/standard.component';

import { RightSidebarContentTabsNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/content/tabs/normal-scroll/tabs.component';
import { RightSidebarContentTabsPageScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/content/tabs/page-scroll/tabs.component';
import { RightSidebarContentTabsContentScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/content/tabs/content-scroll/tabs.component';

import { RightSidebarContentNavNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/content/nav/normal-scroll/nav.component';
import { RightSidebarContentNavPageScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/content/nav/page-scroll/nav.component';
import { RightSidebarContentNavContentScrollComponent } from 'app/modules/admin/ui/page-layouts/right-sidebar/content/nav/content-scroll/nav.component';

export const overviews = {
    fullwidth   : {
        empty   : {
            title           : 'Empty Layout',
            description     : 'Layout that spans the entire width of the content area with 2 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll: {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/fullwidth/empty/normal-scroll',
                    component  : FullwidthEmptyNormalScrollComponent
                },
                pageScroll  : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/fullwidth/empty/page-scroll',
                    component  : FullwidthEmptyPageScrollComponent
                }
            }
        },
        standard: {
            title           : 'Standard Layout',
            description     : 'Layout that spans the entire width of the content area with a dedicated header and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/fullwidth/standard/normal-scroll',
                    component  : FullwidthStandardNormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/fullwidth/standard/page-scroll',
                    component  : FullwidthStandardPageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/fullwidth/standard/content-scroll',
                    component  : FullwidthStandardContentScrollComponent
                }
            }
        },
        tabs    : {
            title           : 'Tabs Layout',
            description     : 'Layout that span the entire width of the content area with a dedicated header, tabs and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/fullwidth/tabs/normal-scroll',
                    component  : FullwidthTabsNormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/fullwidth/tabs/page-scroll',
                    component  : FullwidthTabsPageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/fullwidth/tabs/content-scroll',
                    component  : FullwidthTabsContentScrollComponent
                }
            }
        },
        nav     : {
            title           : 'Nav Layout',
            description     : 'Layout that span the entire width of the content area with a dedicated header, navigation and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/fullwidth/nav/normal-scroll',
                    component  : FullwidthNavNormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/fullwidth/nav/page-scroll',
                    component  : FullwidthNavPageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/fullwidth/nav/content-scroll',
                    component  : FullwidthNavContentScrollComponent
                }
            }
        }
    },
    leftsidebar : {
        fullheight: {
            basic   : {
                title           : 'Basic Layout',
                description     : 'Layout with a left sidebar and 3 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/basic/normal-scroll',
                        component  : LeftSidebarFullheightBasicNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/basic/page-scroll',
                        component  : LeftSidebarFullheightBasicPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/basic/content-scroll',
                        component  : LeftSidebarFullheightBasicContentScrollComponent
                    }
                }
            },
            standard: {
                title           : 'Standard Layout',
                description     : 'Layout with a left sidebar, a dedicated header and 4 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    },
                    {
                        value: 'innerScroll',
                        title: 'Inner Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/standard/normal-scroll',
                        component  : LeftSidebarFullheightStandardNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/standard/page-scroll',
                        component  : LeftSidebarFullheightStandardPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/standard/content-scroll',
                        component  : LeftSidebarFullheightStandardContentScrollComponent
                    },
                    innerScroll  : {
                        description: 'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/standard/inner-scroll',
                        component  : LeftSidebarFullheightStandardInnerScrollComponent
                    }
                }
            },
            tabs    : {
                title           : 'Tabs Layout',
                description     : 'Layout with a left sidebar, a dedicated header, tabs and 4 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    },
                    {
                        value: 'innerScroll',
                        title: 'Inner Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/tabs/normal-scroll',
                        component  : LeftSidebarFullheightTabsNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/tabs/page-scroll',
                        component  : LeftSidebarFullheightTabsPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/tabs/content-scroll',
                        component  : LeftSidebarFullheightTabsContentScrollComponent
                    },
                    innerScroll  : {
                        description: 'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/tabs/inner-scroll',
                        component  : LeftSidebarFullheightTabsInnerScrollComponent
                    }
                }
            },
            nav     : {
                title           : 'Nav Layout',
                description     : 'Layout with a left sidebar, a dedicated header, navigation and 4 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    },
                    {
                        value: 'innerScroll',
                        title: 'Inner Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/nav/normal-scroll',
                        component  : LeftSidebarFullheightNavNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/nav/page-scroll',
                        component  : LeftSidebarFullheightNavPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/nav/content-scroll',
                        component  : LeftSidebarFullheightNavContentScrollComponent
                    },
                    innerScroll  : {
                        description: 'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
                        link       : '/ui/page-layouts/left-sidebar/fullheight/nav/inner-scroll',
                        component  : LeftSidebarFullheightNavInnerScrollComponent
                    }
                }
            }
        },
        content   : {
            standard: {
                title           : 'Standard Layout',
                description     : 'Layout with left sidebar, a fullwidth dedicated header and 3 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/left-sidebar/content/standard/normal-scroll',
                        component  : LeftSidebarContentStandardNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/left-sidebar/content/standard/page-scroll',
                        component  : LeftSidebarContentStandardPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/left-sidebar/content/standard/content-scroll',
                        component  : LeftSidebarContentStandardContentScrollComponent
                    }
                }
            },
            tabs    : {
                title           : 'Tabs Layout',
                description     : 'Layout with a left sidebar, a fullwidth dedicated header, tabs and 3 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/left-sidebar/content/tabs/normal-scroll',
                        component  : LeftSidebarContentTabsNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/left-sidebar/content/tabs/page-scroll',
                        component  : LeftSidebarContentTabsPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/left-sidebar/content/tabs/content-scroll',
                        component  : LeftSidebarContentTabsContentScrollComponent
                    }
                }
            },
            nav     : {
                title           : 'Nav Layout',
                description     : 'Layout with a left sidebar, a fullwidth dedicated header, navigation and 3 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/left-sidebar/content/nav/normal-scroll',
                        component  : LeftSidebarContentNavNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/left-sidebar/content/nav/page-scroll',
                        component  : LeftSidebarContentNavPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/left-sidebar/content/nav/content-scroll',
                        component  : LeftSidebarContentNavContentScrollComponent
                    }
                }
            }
        }
    },
    rightsidebar: {
        fullheight: {
            basic   : {
                title           : 'Basic Layout',
                description     : 'Layout with a right sidebar and 3 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/basic/normal-scroll',
                        component  : RightSidebarFullheightBasicNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/basic/page-scroll',
                        component  : RightSidebarFullheightBasicPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/basic/content-scroll',
                        component  : RightSidebarFullheightBasicContentScrollComponent
                    }
                }
            },
            standard: {
                title           : 'Standard Layout',
                description     : 'Layout with a right sidebar, a dedicated header and 4 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    },
                    {
                        value: 'innerScroll',
                        title: 'Inner Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/standard/normal-scroll',
                        component  : RightSidebarFullheightStandardNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/standard/page-scroll',
                        component  : RightSidebarFullheightStandardPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/standard/content-scroll',
                        component  : RightSidebarFullheightStandardContentScrollComponent
                    },
                    innerScroll  : {
                        description: 'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/standard/inner-scroll',
                        component  : RightSidebarFullheightStandardInnerScrollComponent
                    }
                }
            },
            tabs    : {
                title           : 'Tabs Layout',
                description     : 'Layout with a right sidebar, a dedicated header, tabs and 4 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    },
                    {
                        value: 'innerScroll',
                        title: 'Inner Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/tabs/normal-scroll',
                        component  : RightSidebarFullheightTabsNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/tabs/page-scroll',
                        component  : RightSidebarFullheightTabsPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/tabs/content-scroll',
                        component  : RightSidebarFullheightTabsContentScrollComponent
                    },
                    innerScroll  : {
                        description: 'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/tabs/inner-scroll',
                        component  : RightSidebarFullheightTabsInnerScrollComponent
                    }
                }
            },
            nav     : {
                title           : 'Nav Layout',
                description     : 'Layout with a right sidebar, a dedicated header, navigation and 4 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    },
                    {
                        value: 'innerScroll',
                        title: 'Inner Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/nav/normal-scroll',
                        component  : RightSidebarFullheightNavNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/nav/page-scroll',
                        component  : RightSidebarFullheightNavPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/nav/content-scroll',
                        component  : RightSidebarFullheightNavContentScrollComponent
                    },
                    innerScroll  : {
                        description: 'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
                        link       : '/ui/page-layouts/right-sidebar/fullheight/nav/inner-scroll',
                        component  : RightSidebarFullheightNavInnerScrollComponent
                    }
                }
            }
        },
        content   : {
            standard: {
                title           : 'Standard Layout',
                description     : 'Layout with right sidebar, a fullwidth dedicated header and 3 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/right-sidebar/content/standard/normal-scroll',
                        component  : RightSidebarContentStandardNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/right-sidebar/content/standard/page-scroll',
                        component  : RightSidebarContentStandardPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/right-sidebar/content/standard/content-scroll',
                        component  : RightSidebarContentStandardContentScrollComponent
                    }
                }
            },
            tabs    : {
                title           : 'Tabs Layout',
                description     : 'Layout with a right sidebar, a fullwidth dedicated header, tabs and 3 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/right-sidebar/content/tabs/normal-scroll',
                        component  : RightSidebarContentTabsNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/right-sidebar/content/tabs/page-scroll',
                        component  : RightSidebarContentTabsPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/right-sidebar/content/tabs/content-scroll',
                        component  : RightSidebarContentTabsContentScrollComponent
                    }
                }
            },
            nav     : {
                title           : 'Nav Layout',
                description     : 'Layout with a right sidebar, a fullwidth dedicated header, navigation and 3 different scroll modes.',
                availableOptions: [
                    {
                        value: 'normalScroll',
                        title: 'Normal Scroll'
                    },
                    {
                        value: 'pageScroll',
                        title: 'Page Scroll'
                    },
                    {
                        value: 'contentScroll',
                        title: 'Content Scroll'
                    }
                ],
                selectedOption  : 'normalScroll',
                options         : {
                    normalScroll : {
                        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                        link       : '/ui/page-layouts/right-sidebar/content/nav/normal-scroll',
                        component  : RightSidebarContentNavNormalScrollComponent
                    },
                    pageScroll   : {
                        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                        link       : '/ui/page-layouts/right-sidebar/content/nav/page-scroll',
                        component  : RightSidebarContentNavPageScrollComponent
                    },
                    contentScroll: {
                        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                        link       : '/ui/page-layouts/right-sidebar/content/nav/content-scroll',
                        component  : RightSidebarContentNavContentScrollComponent
                    }
                }
            }
        }
    }
};

export const routes: Route[] = [
    // Overview
    {
        path     : 'overview',
        component: OverviewComponent
    },

    // Fullwidth
    {
        path    : 'fullwidth',
        children: [
            {
                path    : 'empty',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.fullwidth.empty
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: FullwidthEmptyNormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: FullwidthEmptyPageScrollComponent
                    }
                ]
            },
            {
                path    : 'standard',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.fullwidth.standard
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: FullwidthStandardNormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: FullwidthStandardPageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: FullwidthStandardContentScrollComponent
                    }
                ]
            },
            {
                path    : 'tabs',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.fullwidth.tabs
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: FullwidthTabsNormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: FullwidthTabsPageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: FullwidthTabsContentScrollComponent
                    }
                ]
            },
            {
                path    : 'nav',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.fullwidth.nav
                        },
                        children : [
                            {
                                path     : '**',
                                component: DemoPlaceholderComponent
                            }
                        ]
                    },
                    {
                        path     : 'normal-scroll',
                        component: FullwidthNavNormalScrollComponent,
                        children : [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'section-1'
                            },
                            {
                                path     : '**',
                                component: DemoPlaceholderComponent
                            }
                        ]
                    },
                    {
                        path     : 'page-scroll',
                        component: FullwidthNavPageScrollComponent,
                        children : [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'section-1'
                            },
                            {
                                path     : '**',
                                component: DemoPlaceholderComponent
                            }
                        ]
                    },
                    {
                        path     : 'content-scroll',
                        component: FullwidthNavContentScrollComponent,
                        children : [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'section-1'
                            },
                            {
                                path     : '**',
                                component: DemoPlaceholderComponent
                            }
                        ]
                    }
                ]
            }
        ]
    },

    // Left sidebar
    {
        path    : 'left-sidebar',
        children: [

            {
                path    : 'fullheight',
                children: [
                    {
                        path    : 'basic',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.leftsidebar.fullheight.basic
                                }
                            },
                            {
                                path     : 'normal-scroll',
                                component: LeftSidebarFullheightBasicNormalScrollComponent
                            },
                            {
                                path     : 'page-scroll',
                                component: LeftSidebarFullheightBasicPageScrollComponent
                            },
                            {
                                path     : 'content-scroll',
                                component: LeftSidebarFullheightBasicContentScrollComponent
                            }
                        ]
                    },
                    {
                        path    : 'standard',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.leftsidebar.fullheight.standard
                                }
                            },
                            {
                                path     : 'normal-scroll',
                                component: LeftSidebarFullheightStandardNormalScrollComponent
                            },
                            {
                                path     : 'page-scroll',
                                component: LeftSidebarFullheightStandardPageScrollComponent
                            },
                            {
                                path     : 'content-scroll',
                                component: LeftSidebarFullheightStandardContentScrollComponent
                            },
                            {
                                path     : 'inner-scroll',
                                component: LeftSidebarFullheightStandardInnerScrollComponent
                            }
                        ]
                    },
                    {
                        path    : 'tabs',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.leftsidebar.fullheight.tabs
                                }
                            },
                            {
                                path     : 'normal-scroll',
                                component: LeftSidebarFullheightTabsNormalScrollComponent
                            },
                            {
                                path     : 'page-scroll',
                                component: LeftSidebarFullheightTabsPageScrollComponent
                            },
                            {
                                path     : 'content-scroll',
                                component: LeftSidebarFullheightTabsContentScrollComponent
                            },
                            {
                                path     : 'inner-scroll',
                                component: LeftSidebarFullheightTabsInnerScrollComponent
                            }
                        ]
                    },
                    {
                        path    : 'nav',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.leftsidebar.fullheight.nav
                                },
                                children : [
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'normal-scroll',
                                component: LeftSidebarFullheightNavNormalScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'page-scroll',
                                component: LeftSidebarFullheightNavPageScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'content-scroll',
                                component: LeftSidebarFullheightNavContentScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'inner-scroll',
                                component: LeftSidebarFullheightNavInnerScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path    : 'content',
                children: [
                    {
                        path    : 'standard',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.leftsidebar.content.standard
                                }
                            },
                            {
                                path     : 'normal-scroll',
                                component: LeftSidebarContentStandardNormalScrollComponent
                            },
                            {
                                path     : 'page-scroll',
                                component: LeftSidebarContentStandardPageScrollComponent
                            },
                            {
                                path     : 'content-scroll',
                                component: LeftSidebarContentStandardContentScrollComponent
                            }
                        ]
                    },
                    {
                        path    : 'tabs',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.leftsidebar.content.tabs
                                }
                            },
                            {
                                path     : 'normal-scroll',
                                component: LeftSidebarContentTabsNormalScrollComponent
                            },
                            {
                                path     : 'page-scroll',
                                component: LeftSidebarContentTabsPageScrollComponent
                            },
                            {
                                path     : 'content-scroll',
                                component: LeftSidebarContentTabsContentScrollComponent
                            }
                        ]
                    },
                    {
                        path    : 'nav',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.leftsidebar.content.nav
                                },
                                children : [
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'normal-scroll',
                                component: LeftSidebarContentNavNormalScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'page-scroll',
                                component: LeftSidebarContentNavPageScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'content-scroll',
                                component: LeftSidebarContentNavContentScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    // Right sidebar
    {
        path    : 'right-sidebar',
        children: [

            {
                path    : 'fullheight',
                children: [
                    {
                        path    : 'basic',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.rightsidebar.fullheight.basic
                                }
                            },
                            {
                                path     : 'normal-scroll',
                                component: RightSidebarFullheightBasicNormalScrollComponent
                            },
                            {
                                path     : 'page-scroll',
                                component: RightSidebarFullheightBasicPageScrollComponent
                            },
                            {
                                path     : 'content-scroll',
                                component: RightSidebarFullheightBasicContentScrollComponent
                            }
                        ]
                    },
                    {
                        path    : 'standard',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.rightsidebar.fullheight.standard
                                }
                            },
                            {
                                path     : 'normal-scroll',
                                component: RightSidebarFullheightStandardNormalScrollComponent
                            },
                            {
                                path     : 'page-scroll',
                                component: RightSidebarFullheightStandardPageScrollComponent
                            },
                            {
                                path     : 'content-scroll',
                                component: RightSidebarFullheightStandardContentScrollComponent
                            },
                            {
                                path     : 'inner-scroll',
                                component: RightSidebarFullheightStandardInnerScrollComponent
                            }
                        ]
                    },
                    {
                        path    : 'tabs',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.rightsidebar.fullheight.tabs
                                }
                            },
                            {
                                path     : 'normal-scroll',
                                component: RightSidebarFullheightTabsNormalScrollComponent
                            },
                            {
                                path     : 'page-scroll',
                                component: RightSidebarFullheightTabsPageScrollComponent
                            },
                            {
                                path     : 'content-scroll',
                                component: RightSidebarFullheightTabsContentScrollComponent
                            },
                            {
                                path     : 'inner-scroll',
                                component: RightSidebarFullheightTabsInnerScrollComponent
                            }
                        ]
                    },
                    {
                        path    : 'nav',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.rightsidebar.fullheight.nav
                                },
                                children : [
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'normal-scroll',
                                component: RightSidebarFullheightNavNormalScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'page-scroll',
                                component: RightSidebarFullheightNavPageScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'content-scroll',
                                component: RightSidebarFullheightNavContentScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'inner-scroll',
                                component: RightSidebarFullheightNavInnerScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path    : 'content',
                children: [
                    {
                        path    : 'standard',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.rightsidebar.content.standard
                                }
                            },
                            {
                                path     : 'normal-scroll',
                                component: RightSidebarContentStandardNormalScrollComponent
                            },
                            {
                                path     : 'page-scroll',
                                component: RightSidebarContentStandardPageScrollComponent
                            },
                            {
                                path     : 'content-scroll',
                                component: RightSidebarContentStandardContentScrollComponent
                            }
                        ]
                    },
                    {
                        path    : 'tabs',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.rightsidebar.content.tabs
                                }
                            },
                            {
                                path     : 'normal-scroll',
                                component: RightSidebarContentTabsNormalScrollComponent
                            },
                            {
                                path     : 'page-scroll',
                                component: RightSidebarContentTabsPageScrollComponent
                            },
                            {
                                path     : 'content-scroll',
                                component: RightSidebarContentTabsContentScrollComponent
                            }
                        ]
                    },
                    {
                        path    : 'nav',
                        children: [
                            {
                                path      : '',
                                pathMatch : 'full',
                                redirectTo: 'overview'
                            },
                            {
                                path     : 'overview',
                                component: LayoutOverviewComponent,
                                data     : {
                                    overview: overviews.rightsidebar.content.nav
                                },
                                children : [
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'normal-scroll',
                                component: RightSidebarContentNavNormalScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'page-scroll',
                                component: RightSidebarContentNavPageScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            },
                            {
                                path     : 'content-scroll',
                                component: RightSidebarContentNavContentScrollComponent,
                                children : [
                                    {
                                        path      : '',
                                        pathMatch : 'full',
                                        redirectTo: 'section-1'
                                    },
                                    {
                                        path     : '**',
                                        component: DemoPlaceholderComponent
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

@NgModule({
    declarations: [
        OverviewComponent,

        // Fullwidth
        FullwidthEmptyNormalScrollComponent,
        FullwidthEmptyPageScrollComponent,

        FullwidthStandardNormalScrollComponent,
        FullwidthStandardPageScrollComponent,
        FullwidthStandardContentScrollComponent,

        FullwidthTabsNormalScrollComponent,
        FullwidthTabsPageScrollComponent,
        FullwidthTabsContentScrollComponent,

        FullwidthNavNormalScrollComponent,
        FullwidthNavPageScrollComponent,
        FullwidthNavContentScrollComponent,

        // Left sidebar
        LeftSidebarFullheightBasicNormalScrollComponent,
        LeftSidebarFullheightBasicPageScrollComponent,
        LeftSidebarFullheightBasicContentScrollComponent,

        LeftSidebarFullheightStandardNormalScrollComponent,
        LeftSidebarFullheightStandardPageScrollComponent,
        LeftSidebarFullheightStandardContentScrollComponent,
        LeftSidebarFullheightStandardInnerScrollComponent,

        LeftSidebarFullheightTabsNormalScrollComponent,
        LeftSidebarFullheightTabsPageScrollComponent,
        LeftSidebarFullheightTabsContentScrollComponent,
        LeftSidebarFullheightTabsInnerScrollComponent,

        LeftSidebarFullheightNavNormalScrollComponent,
        LeftSidebarFullheightNavPageScrollComponent,
        LeftSidebarFullheightNavContentScrollComponent,
        LeftSidebarFullheightNavInnerScrollComponent,

        LeftSidebarContentStandardNormalScrollComponent,
        LeftSidebarContentStandardPageScrollComponent,
        LeftSidebarContentStandardContentScrollComponent,

        LeftSidebarContentTabsNormalScrollComponent,
        LeftSidebarContentTabsPageScrollComponent,
        LeftSidebarContentTabsContentScrollComponent,

        LeftSidebarContentNavNormalScrollComponent,
        LeftSidebarContentNavPageScrollComponent,
        LeftSidebarContentNavContentScrollComponent,

        // Right sidebar
        RightSidebarFullheightBasicNormalScrollComponent,
        RightSidebarFullheightBasicPageScrollComponent,
        RightSidebarFullheightBasicContentScrollComponent,

        RightSidebarFullheightStandardNormalScrollComponent,
        RightSidebarFullheightStandardPageScrollComponent,
        RightSidebarFullheightStandardContentScrollComponent,
        RightSidebarFullheightStandardInnerScrollComponent,

        RightSidebarFullheightTabsNormalScrollComponent,
        RightSidebarFullheightTabsPageScrollComponent,
        RightSidebarFullheightTabsContentScrollComponent,
        RightSidebarFullheightTabsInnerScrollComponent,

        RightSidebarFullheightNavNormalScrollComponent,
        RightSidebarFullheightNavPageScrollComponent,
        RightSidebarFullheightNavContentScrollComponent,
        RightSidebarFullheightNavInnerScrollComponent,

        RightSidebarContentStandardNormalScrollComponent,
        RightSidebarContentStandardPageScrollComponent,
        RightSidebarContentStandardContentScrollComponent,

        RightSidebarContentTabsNormalScrollComponent,
        RightSidebarContentTabsPageScrollComponent,
        RightSidebarContentTabsContentScrollComponent,

        RightSidebarContentNavNormalScrollComponent,
        RightSidebarContentNavPageScrollComponent,
        RightSidebarContentNavContentScrollComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatTabsModule,
        SharedModule,
        DemoPlaceholderModule,
        DemoSidebarModule,
        LayoutOverviewModule
    ]
})
export class PageLayoutsModule
{
}

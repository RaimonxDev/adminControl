import { Route } from '@angular/router';
import { FullwidthTabbedNavInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabbed-nav-inner-scroll.component';
import { FullwidthTabbedNavInnerScrollTab1Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-1/tab-1.component';
import { FullwidthTabbedNavInnerScrollTab2Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-2/tab-2.component';
import { FullwidthTabbedNavInnerScrollTab3Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-3/tab-3.component';
import { FullwidthTabbedNavInnerScrollTab4Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-4/tab-4.component';
import { FullwidthTabbedNavInnerScrollTab5Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-5/tab-5.component';
import { FullwidthTabbedNavInnerScrollTab6Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-6/tab-6.component';

export const fullwidthTabbedNavInnerScrollRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'tab-1'
    },
    {
        path     : '',
        component: FullwidthTabbedNavInnerScrollComponent,
        children : [
            {
                path     : 'tab-1',
                component: FullwidthTabbedNavInnerScrollTab1Component
            },
            {
                path     : 'tab-2',
                component: FullwidthTabbedNavInnerScrollTab2Component
            },
            {
                path     : 'tab-3',
                component: FullwidthTabbedNavInnerScrollTab3Component
            },
            {
                path     : 'tab-4',
                component: FullwidthTabbedNavInnerScrollTab4Component
            },
            {
                path     : 'tab-5',
                component: FullwidthTabbedNavInnerScrollTab5Component
            },
            {
                path     : 'tab-6',
                component: FullwidthTabbedNavInnerScrollTab6Component
            }
        ]
    }
];

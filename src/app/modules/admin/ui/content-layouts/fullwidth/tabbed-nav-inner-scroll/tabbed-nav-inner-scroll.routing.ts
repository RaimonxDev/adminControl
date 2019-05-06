import { Route } from '@angular/router';
import { FullwidthTabbedNavInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabbed-nav-inner-scroll.component';
import { FullwidthTabbedNavInnerScrollTab1Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-1/tab-1.component';
import { FullwidthTabbedNavInnerScrollTab2Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-2/tab-2.component';
import { FullwidthTabbedNavInnerScrollTab3Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-3/tab-3.component';

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
            }
        ]
    }
];

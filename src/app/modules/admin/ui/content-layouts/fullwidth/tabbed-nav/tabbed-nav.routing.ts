import { Route } from '@angular/router';
import { FullwidthTabbedNavComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabbed-nav.component';
import { FullwidthTabbedNavTab1Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-1/tab-1.component';
import { FullwidthTabbedNavTab2Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-2/tab-2.component';
import { FullwidthTabbedNavTab3Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-3/tab-3.component';

export const fullwidthTabbedNavRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'tab-1'
    },
    {
        path     : '',
        component: FullwidthTabbedNavComponent,
        children : [
            {
                path     : 'tab-1',
                component: FullwidthTabbedNavTab1Component
            },
            {
                path     : 'tab-2',
                component: FullwidthTabbedNavTab2Component
            },
            {
                path     : 'tab-3',
                component: FullwidthTabbedNavTab3Component
            }
        ]
    }
];

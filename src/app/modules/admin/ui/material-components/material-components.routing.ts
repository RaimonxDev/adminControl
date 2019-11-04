import { Route } from '@angular/router';
import { MaterialComponentsComponent } from 'app/modules/admin/ui/material-components/material-components.component';
import { MaterialComponentsComponentApiComponent, MaterialComponentsComponentExamplesComponent, MaterialComponentsComponentOverviewComponent, MaterialComponentsComponentViewerComponent } from 'app/modules/admin/ui/material-components/component-viewer/component-viewer.component';

export const materialComponentsRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'overview'
    },
    {
        path     : 'overview',
        component: MaterialComponentsComponent
    },
    {
        path    : 'components',
        children: [
            {
                path     : ':id',
                component: MaterialComponentsComponentViewerComponent,
                children : [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: MaterialComponentsComponentOverviewComponent
                    },
                    {
                        path     : 'api',
                        component: MaterialComponentsComponentApiComponent
                    },
                    {
                        path     : 'examples',
                        component: MaterialComponentsComponentExamplesComponent
                    }
                ]
            }
        ]
    }
];

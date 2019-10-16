import { Route } from '@angular/router';
import { AngularMaterialComponent } from 'app/modules/admin/ui/angular-material/angular-material.component';
import { AngularMaterialComponentApiComponent, AngularMaterialComponentExamplesComponent, AngularMaterialComponentOverviewComponent, AngularMaterialComponentViewerComponent } from 'app/modules/admin/ui/angular-material/component-viewer/component-viewer.component';

export const angularMaterialRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'overview'
    },
    {
        path     : 'overview',
        component: AngularMaterialComponent
    },
    {
        path    : 'components',
        children: [
            {
                path     : ':id',
                component: AngularMaterialComponentViewerComponent,
                children : [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: AngularMaterialComponentOverviewComponent
                    },
                    {
                        path     : 'api',
                        component: AngularMaterialComponentApiComponent
                    },
                    {
                        path     : 'examples',
                        component: AngularMaterialComponentExamplesComponent
                    }
                ]
            }
        ]
    }
];

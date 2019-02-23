import { Route } from '@angular/router';
import { DocsComponent } from 'app/modules/admin/docs/docs.component';
import { DocsResolver } from 'app/modules/admin/docs/docs.resolvers';

export const docsRoutes: Route[] = [
    {
        // Redirect /docs to /docs/getting-started
        path      : '',
        redirectTo: 'getting-started',
        pathMatch : 'full'
    },
    {
        path     : '**',
        component: DocsComponent,
        resolve  : {
            documentation: DocsResolver
        }
    }
];

import { Route } from '@angular/router';
import { FormsFieldsComponent } from 'app/modules/admin/ui/forms/fields/fields.component';
import { FormsLayoutsComponent } from 'app/modules/admin/ui/forms/layouts/layouts.component';

export const formsRoutes: Route[] = [
    {
        path      : '',
        redirectTo: 'layouts'
    },
    {
        path     : 'fields',
        component: FormsFieldsComponent
    },
    {
        path     : 'layouts',
        component: FormsLayoutsComponent
    }
];

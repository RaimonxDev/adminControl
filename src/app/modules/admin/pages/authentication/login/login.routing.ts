import { Route } from '@angular/router';
import { LoginComponent } from 'app/modules/admin/pages/authentication/login/login.component';

export const loginRoutes: Route[] = [
    // Redirect empty route
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'classic'
    },
    // Use 'empty' layout on 'fullscreen' style
    {
        path     : 'fullscreen',
        component: LoginComponent,
        data     : {
            layout: 'empty'
        }
    },
    // Use 'empty' layout on 'fullscreen-alt' style
    {
        path     : 'fullscreen-alt',
        component: LoginComponent,
        data     : {
            layout: 'empty'
        }
    },
    // Use defaults on other styles
    {
        path     : '**',
        component: LoginComponent
    }
];

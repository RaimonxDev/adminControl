import { Route } from '@angular/router';
import { LogoutComponent } from 'app/modules/admin/pages/authentication/logout/logout.component';

export const logoutRoutes: Route[] = [
    // Redirect empty route
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'classic'
    },
    // Use 'empty' layout on 'fullscreen' style
    {
        path     : 'fullscreen',
        component: LogoutComponent,
        data     : {
            layout: 'empty'
        }
    },
    // Use 'empty' layout on 'fullscreen-alt' style
    {
        path     : 'fullscreen-alt',
        component: LogoutComponent,
        data     : {
            layout: 'empty'
        }
    },
    // Use defaults on other styles
    {
        path     : '**',
        component: LogoutComponent
    }
];

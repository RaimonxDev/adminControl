import { Route } from '@angular/router';
import { LogoutComponent } from 'app/modules/admin/pages/authentication/logout/logout.component';

export const logoutRoutes: Route[] = [
    {
        path     : '',
        component: LogoutComponent
    }
];

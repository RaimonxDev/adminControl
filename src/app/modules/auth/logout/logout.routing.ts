import { Route } from '@angular/router';
import { AuthLogoutComponent } from 'app/modules/auth/logout/logout.component';

export const authLogoutRoutes: Route[] = [
    {
        path     : '',
        component: AuthLogoutComponent
    }
];

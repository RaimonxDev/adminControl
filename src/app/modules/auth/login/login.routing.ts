import { Route } from '@angular/router';
import { AuthLoginComponent } from 'app/modules/auth/login/login.component';

export const authLoginRoutes: Route[] = [
    {
        path     : '',
        component: AuthLoginComponent
    }
];

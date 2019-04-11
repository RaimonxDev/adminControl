import { Route } from '@angular/router';
import { LoginComponent } from 'app/modules/admin/pages/authentication/login/login.component';

export const loginRoutes: Route[] = [
    {
        path     : '',
        component: LoginComponent
    }
];

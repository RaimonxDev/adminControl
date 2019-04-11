import { Route } from '@angular/router';
import { ForgotPasswordComponent } from 'app/modules/admin/pages/authentication/forgot-password/forgot-password.component';

export const forgotPasswordRoutes: Route[] = [
    {
        path     : '',
        component: ForgotPasswordComponent
    }
];

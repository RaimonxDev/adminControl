import { Route } from '@angular/router';
import { ResetPasswordComponent } from 'app/modules/admin/pages/authentication/reset-password/reset-password.component';

export const resetPasswordRoutes: Route[] = [
    {
        path     : '',
        component: ResetPasswordComponent
    }
];

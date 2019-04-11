import { Route } from '@angular/router';
import { ConfirmationRequiredComponent } from 'app/modules/admin/pages/authentication/confirmation-required/confirmation-required.component';

export const confirmationRequiredRoutes: Route[] = [
    {
        path     : '',
        component: ConfirmationRequiredComponent
    }
];

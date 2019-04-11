import { Route } from '@angular/router';
import { AuthSignupComponent } from 'app/modules/auth/signup/signup.component';

export const authSignupRoutes: Route[] = [
    {
        path     : '',
        component: AuthSignupComponent
    }
];

import { Route } from '@angular/router';
import { SignupComponent } from 'app/modules/admin/pages/authentication/signup/signup.component';

export const signupRoutes: Route[] = [
    // Redirect empty route
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'classic'
    },
    // Use 'empty' layout on 'fullscreen' style
    {
        path     : 'fullscreen',
        component: SignupComponent,
        data     : {
            layout: 'empty'
        }
    },
    // Use 'empty' layout on 'fullscreen-alt' style
    {
        path     : 'fullscreen-alt',
        component: SignupComponent,
        data     : {
            layout: 'empty'
        }
    },
    // Use defaults on other styles
    {
        path     : '**',
        component: SignupComponent
    }
];

import { Route } from '@angular/router';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { EmptyLayoutComponent } from 'app/core/layouts/empty/empty.component';

export const authRoutes: Route[] = [
    {
        path       : 'forgot-password',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'
            }
        ]
    },
    {
        path       : 'login',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: './login/login.module#LoginModule'
            }
        ]
    },
    {
        path       : 'logout',
        component  : EmptyLayoutComponent,
        canActivate: [AuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: './logout/logout.module#LogoutModule'
            }
        ]
    },
    {
        path       : 'signup',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: './signup/signup.module#SignupModule'
            }
        ]
    }
];

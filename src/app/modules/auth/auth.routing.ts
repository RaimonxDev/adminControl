import { Route } from '@angular/router';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { EmptyLayoutComponent } from 'app/core/layouts/empty/empty.component';

export const authRoutes: Route[] = [
    {
        path       : 'confirmation-required',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: './confirmation-required/confirmation-required.module#AuthConfirmationRequiredModule'
            }
        ]
    },
    {
        path       : 'forgot-password',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: './forgot-password/forgot-password.module#AuthForgotPasswordModule'
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
                loadChildren: './login/login.module#AuthLoginModule'
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
                loadChildren: './logout/logout.module#AuthLogoutModule'
            }
        ]
    },
    {
        path       : 'reset-password',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: './reset-password/reset-password.module#AuthResetPasswordModule'
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
                loadChildren: './signup/signup.module#AuthSignupModule'
            }
        ]
    },
    {
        path       : 'unlock-session',
        component  : EmptyLayoutComponent,
        canActivate: [AuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: './unlock-session/unlock-session.module#AuthUnlockSessionModule'
            }
        ]
    }
];

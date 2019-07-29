import { Route } from '@angular/router';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { EmptyLayoutComponent } from 'app/core/layouts/empty/empty.component';

export const authRoutes: Route[] = [
    // Confirmation required
    {
        path       : 'confirmation-required',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: () => import('./confirmation-required/confirmation-required.module')
                    .then(m => m.AuthConfirmationRequiredModule)
            }
        ]
    },
    // Forgot password
    {
        path       : 'forgot-password',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: () => import('./forgot-password/forgot-password.module')
                    .then(m => m.AuthForgotPasswordModule)
            }
        ]
    },
    // Login
    {
        path       : 'login',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: () => import('./login/login.module')
                    .then(m => m.AuthLoginModule)
            }
        ]
    },
    // Logout
    {
        path       : 'logout',
        component  : EmptyLayoutComponent,
        canActivate: [AuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: () => import('./logout/logout.module')
                    .then(m => m.AuthLogoutModule)
            }
        ]
    },
    // Reset password
    {
        path       : 'reset-password',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: () => import('./reset-password/reset-password.module')
                    .then(m => m.AuthResetPasswordModule)
            }
        ]
    },
    // Signup
    {
        path       : 'signup',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: () => import('./signup/signup.module')
                    .then(m => m.AuthSignupModule)
            }
        ]
    },
    // Unlock session
    {
        path       : 'unlock-session',
        component  : EmptyLayoutComponent,
        canActivate: [AuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: () => import('./unlock-session/unlock-session.module')
                    .then(m => m.AuthUnlockSessionModule)
            }
        ]
    }
];

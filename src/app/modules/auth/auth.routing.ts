import { Route } from '@angular/router';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { EmptyLayoutComponent } from 'app/layout/layouts/empty/empty.component';

export const authRoutes: Route[] = [
    // Confirmation required
    {
        path       : 'confirmation-required',
        canActivate: [NoAuthGuard],
        component  : EmptyLayoutComponent,
        children   : [
            {
                path        : '',
                loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module')
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
    // Sign in
    {
        path       : 'sign-in',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: () => import('./sign-in/sign-in.module')
                    .then(m => m.AuthSignInModule)
            }
        ]
    },
    // Sign out
    {
        path       : 'sign-out',
        component  : EmptyLayoutComponent,
        canActivate: [AuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: () => import('./sign-out/sign-out.module')
                    .then(m => m.AuthSignOutModule)
            }
        ]
    },
    // Sign up
    {
        path       : 'sign-up',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: () => import('./sign-up/sign-up.module')
                    .then(m => m.AuthSignUpModule)
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

import { Route } from '@angular/router';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';

export const authRoutes: Route[] = [
    {
        path        : 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate : [NoAuthGuard]
    }
];

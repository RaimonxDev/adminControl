import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutsComponent } from 'app/core/layouts/layouts.component';
import { EmptyLayoutComponent } from 'app/core/layouts/empty/empty.component';

export const appRoutes: Route[] = [
    {
        path       : '',
        component  : LayoutsComponent,
        canActivate: [AuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: './modules/admin/admin.module#AdminModule'
            }
        ]
    },
    {
        path       : 'auth',
        component  : EmptyLayoutComponent,
        canActivate: [NoAuthGuard],
        children   : [
            {
                path        : '',
                loadChildren: './modules/auth/auth.module#AuthModule'
            }
        ]
    }
];

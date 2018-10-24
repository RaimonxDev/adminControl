import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { GuestGuard } from 'app/core/auth/guards/guest.guard';

// Routes
const routes: Route[] = [
    // Redirect /pages to / ....
    // Redirect /pages/auth to /pages/auth/login
    /*{
        path      : 'pages/auth',
        redirectTo: 'pages/auth/login',
        pathMatch : 'full'
    },*/
    {
        path    : 'pages',
        children: [
            {
                path    : 'auth',
                children: [
                    {
                        path        : 'login',
                        loadChildren: './auth/login/login.module#LoginModule',
                        canActivate : [GuestGuard]
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class PagesModule
{
}

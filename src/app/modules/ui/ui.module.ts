import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { GuestGuard } from 'app/core/auth/guards/guest.guard';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';

// Routes
const routes: Route[] = [
    {
        path    : 'ui',
        children: [
            {
                path    : 'icons',
                loadChildren: './icons/icons.module#IconsModule',
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class UIModule
{
}

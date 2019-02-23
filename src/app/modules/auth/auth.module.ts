import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authRoutes } from 'app/modules/auth/auth.routing';

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ]
})
export class AuthModule
{
}

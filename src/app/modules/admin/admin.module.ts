import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { adminRoutes } from 'app/modules/admin/admin.routing';

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ]
})
export class AdminModule
{
}

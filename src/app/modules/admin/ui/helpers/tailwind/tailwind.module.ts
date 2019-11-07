import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TailwindComponent } from 'app/modules/admin/ui/helpers/tailwind/tailwind.component';
import { tailwindRoutes } from 'app/modules/admin/ui/helpers/tailwind/tailwind.routing';

@NgModule({
    declarations: [
        TailwindComponent
    ],
    imports     : [
        RouterModule.forChild(tailwindRoutes)
    ]
})
export class TailwindModule
{
}

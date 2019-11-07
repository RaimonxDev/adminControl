import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentLayoutsComponent } from 'app/modules/admin/ui/content-layouts/overview/overview.component';
import { contentLayoutsRoutes } from 'app/modules/admin/ui/content-layouts/overview/overview.routing';

@NgModule({
    declarations: [
        ContentLayoutsComponent
    ],
    imports     : [
        RouterModule.forChild(contentLayoutsRoutes)
    ]
})
export class ContentLayoutsModule
{
}

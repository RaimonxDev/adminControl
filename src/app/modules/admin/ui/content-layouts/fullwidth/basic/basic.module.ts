import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsmDemoContentModule } from '@assembly';
import { FullwidthBasicComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/basic/basic.component';
import { fullwidthBasicRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/basic/basic.routing';

@NgModule({
    declarations: [
        FullwidthBasicComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthBasicRoutes),
        AsmDemoContentModule
    ]
})
export class FullwidthBasicModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsmDemoContentModule } from '@assembly';
import { fullwidthBasicInnerScrollRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/basic-inner-scroll/basic-inner-scroll.routing';
import { FullwidthBasicInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/basic-inner-scroll/basic-inner-scroll.component';

@NgModule({
    declarations: [
        FullwidthBasicInnerScrollComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthBasicInnerScrollRoutes),
        AsmDemoContentModule
    ]
})
export class FullwidthBasicInnerScrollModule
{
}

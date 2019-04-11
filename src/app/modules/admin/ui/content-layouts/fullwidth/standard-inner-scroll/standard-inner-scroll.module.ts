import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsmDemoContentModule } from '@assembly';
import { fullwidthStandardInnerScrollRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/standard-inner-scroll/standard-inner-scroll.routing';
import { FullwidthStandardInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/standard-inner-scroll/standard-inner-scroll.component';

@NgModule({
    declarations: [
        FullwidthStandardInnerScrollComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthStandardInnerScrollRoutes),
        AsmDemoContentModule
    ]
})
export class FullwidthStandardInnerScrollModule
{
}

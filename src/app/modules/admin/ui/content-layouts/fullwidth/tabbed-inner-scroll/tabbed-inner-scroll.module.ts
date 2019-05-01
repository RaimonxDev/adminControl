import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule } from '@assembly';
import { FullwidthTabbedInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-inner-scroll/tabbed-inner-scroll.component';
import { fullwidthTabbedInnerScrollRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-inner-scroll/tabbed-inner-scroll.routing';

@NgModule({
    declarations: [
        FullwidthTabbedInnerScrollComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthTabbedInnerScrollRoutes),
        MatTabsModule,
        AsmDemoContentModule
    ]
})
export class FullwidthTabbedInnerScrollModule
{
}

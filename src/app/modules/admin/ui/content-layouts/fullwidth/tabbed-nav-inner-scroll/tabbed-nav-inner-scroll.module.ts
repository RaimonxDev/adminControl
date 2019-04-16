import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material';
import { AsmDemoContentModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { FullwidthTabbedNavInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabbed-nav-inner-scroll.component';
import { FullwidthTabbedNavInnerScrollTab5Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-5/tab-5.component';
import { FullwidthTabbedNavInnerScrollTab2Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-2/tab-2.component';
import { FullwidthTabbedNavInnerScrollTab1Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-1/tab-1.component';
import { FullwidthTabbedNavInnerScrollTab4Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-4/tab-4.component';
import { FullwidthTabbedNavInnerScrollTab3Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-3/tab-3.component';
import { FullwidthTabbedNavInnerScrollTab6Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-6/tab-6.component';
import { fullwidthTabbedNavInnerScrollRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabbed-nav-inner-scroll.routing';

@NgModule({
    declarations: [
        FullwidthTabbedNavInnerScrollComponent,
        FullwidthTabbedNavInnerScrollTab1Component,
        FullwidthTabbedNavInnerScrollTab2Component,
        FullwidthTabbedNavInnerScrollTab3Component,
        FullwidthTabbedNavInnerScrollTab4Component,
        FullwidthTabbedNavInnerScrollTab5Component,
        FullwidthTabbedNavInnerScrollTab6Component
    ],
    imports     : [
        RouterModule.forChild(fullwidthTabbedNavInnerScrollRoutes),
        MatTabsModule,
        AsmDemoContentModule,
        SharedModule
    ]
})
export class FullwidthTabbedNavInnerScrollModule
{
}

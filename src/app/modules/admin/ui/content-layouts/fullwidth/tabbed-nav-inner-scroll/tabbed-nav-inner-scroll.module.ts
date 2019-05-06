import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { FullwidthTabbedNavInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabbed-nav-inner-scroll.component';
import { FullwidthTabbedNavInnerScrollTab1Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-1/tab-1.component';
import { FullwidthTabbedNavInnerScrollTab2Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-2/tab-2.component';
import { FullwidthTabbedNavInnerScrollTab3Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabs/tab-3/tab-3.component';
import { fullwidthTabbedNavInnerScrollRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav-inner-scroll/tabbed-nav-inner-scroll.routing';

@NgModule({
    declarations: [
        FullwidthTabbedNavInnerScrollComponent,
        FullwidthTabbedNavInnerScrollTab1Component,
        FullwidthTabbedNavInnerScrollTab2Component,
        FullwidthTabbedNavInnerScrollTab3Component
    ],
    imports     : [
        RouterModule.forChild(fullwidthTabbedNavInnerScrollRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        AsmDemoContentModule,
        SharedModule
    ]
})
export class FullwidthTabbedNavInnerScrollModule
{
}

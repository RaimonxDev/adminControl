import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule } from '@assembly/demo-content';
import { AsmDemoSidebarContentModule } from '@assembly/demo-sidebar-content';
import { SharedModule } from 'app/core/shared/shared.module';
import { RightSidebarFullheightTabsNavigationComponent } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/tabs-navigation/tabs-navigation.component';
import { RightSidebarFullheightTabsNavigationTab1Component } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/tabs-navigation/tabs/tab-1/tab-1.component';
import { RightSidebarFullheightTabsNavigationTab2Component } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/tabs-navigation/tabs/tab-2/tab-2.component';
import { RightSidebarFullheightTabsNavigationTab3Component } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/tabs-navigation/tabs/tab-3/tab-3.component';
import { rightSidebarFullheightTabsNavigationRoutes } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/tabs-navigation/tabs-navigation.routing';

@NgModule({
    declarations: [
        RightSidebarFullheightTabsNavigationComponent,
        RightSidebarFullheightTabsNavigationTab1Component,
        RightSidebarFullheightTabsNavigationTab2Component,
        RightSidebarFullheightTabsNavigationTab3Component
    ],
    imports     : [
        RouterModule.forChild(rightSidebarFullheightTabsNavigationRoutes),
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule,
        SharedModule
    ]
})
export class RightSidebarFullheightTabsNavigationModule
{
}

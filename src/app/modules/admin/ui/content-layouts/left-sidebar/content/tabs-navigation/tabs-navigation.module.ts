import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { LeftSidebarContentTabsNavigationComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/content/tabs-navigation/tabs-navigation.component';
import { LeftSidebarContentTabsNavigationTab1Component } from 'app/modules/admin/ui/content-layouts/left-sidebar/content/tabs-navigation/tabs/tab-1/tab-1.component';
import { LeftSidebarContentTabsNavigationTab2Component } from 'app/modules/admin/ui/content-layouts/left-sidebar/content/tabs-navigation/tabs/tab-2/tab-2.component';
import { LeftSidebarContentTabsNavigationTab3Component } from 'app/modules/admin/ui/content-layouts/left-sidebar/content/tabs-navigation/tabs/tab-3/tab-3.component';
import { leftSidebarContentTabsNavigationRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/content/tabs-navigation/tabs-navigation.routing';

@NgModule({
    declarations: [
        LeftSidebarContentTabsNavigationComponent,
        LeftSidebarContentTabsNavigationTab1Component,
        LeftSidebarContentTabsNavigationTab2Component,
        LeftSidebarContentTabsNavigationTab3Component
    ],
    imports     : [
        RouterModule.forChild(leftSidebarContentTabsNavigationRoutes),
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
export class LeftSidebarContentTabsNavigationModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule } from '@assembly/components/demo-content';
import { AsmDemoSidebarContentModule } from '@assembly/components/demo-sidebar-content';
import { SharedModule } from 'app/core/shared/shared.module';
import { LeftSidebarContentTabsComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/content/tabs/tabs.component';
import { leftSidebarContentTabsRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/content/tabs/tabs.routing';

@NgModule({
    declarations: [
        LeftSidebarContentTabsComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarContentTabsRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatTabsModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule,
        SharedModule
    ]
})
export class LeftSidebarContentTabsModule
{
}

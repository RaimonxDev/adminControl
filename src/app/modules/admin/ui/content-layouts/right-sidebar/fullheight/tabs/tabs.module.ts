import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule } from '@assembly/demo-content';
import { AsmDemoSidebarContentModule } from '@assembly/demo-sidebar-content';
import { SharedModule } from 'app/core/shared/shared.module';
import { RightSidebarFullheightTabsComponent } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/tabs/tabs.component';
import { rightSidebarFullheightTabsRoutes } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/tabs/tabs.routing';

@NgModule({
    declarations: [
        RightSidebarFullheightTabsComponent
    ],
    imports     : [
        RouterModule.forChild(rightSidebarFullheightTabsRoutes),
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
export class RightSidebarFullheightTabsModule
{
}

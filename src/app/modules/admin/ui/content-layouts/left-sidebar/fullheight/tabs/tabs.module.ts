import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { SharedModule } from 'app/core/shared/shared.module';
import { LeftSidebarFullheightTabsComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/tabs/tabs.component';
import { leftSidebarFullheightTabsRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/tabs/tabs.routing';

@NgModule({
    declarations: [
        LeftSidebarFullheightTabsComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarFullheightTabsRoutes),
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
export class LeftSidebarFullheightTabsModule
{
}

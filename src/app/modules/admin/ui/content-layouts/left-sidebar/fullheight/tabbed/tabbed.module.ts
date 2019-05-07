import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { LeftSidebarFullheightTabbedComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/tabbed/tabbed.component';
import { leftSidebarFullheightTabbedRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/tabbed/tabbed.routing';

@NgModule({
    declarations: [
        LeftSidebarFullheightTabbedComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarFullheightTabbedRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatTabsModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule
    ]
})
export class LeftSidebarFullheightTabbedModule
{
}

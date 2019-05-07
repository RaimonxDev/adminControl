import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { LeftSidebarFullheightTabbedContentScrollComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/tabbed-content-scroll/tabbed-content-scroll.component';
import { leftSidebarFullheightTabbedContentScrollRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/tabbed-content-scroll/tabbed-content-scroll.routing';

@NgModule({
    declarations: [
        LeftSidebarFullheightTabbedContentScrollComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarFullheightTabbedContentScrollRoutes),
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
export class LeftSidebarFullheightTabbedContentScrollModule
{
}

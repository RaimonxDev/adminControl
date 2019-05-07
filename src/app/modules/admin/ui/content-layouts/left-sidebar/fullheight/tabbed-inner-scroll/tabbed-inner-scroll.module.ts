import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { LeftSidebarFullheightTabbedInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/tabbed-inner-scroll/tabbed-inner-scroll.component';
import { leftSidebarFullheightTabbedInnerScrollRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/tabbed-inner-scroll/tabbed-inner-scroll.routing';

@NgModule({
    declarations: [
        LeftSidebarFullheightTabbedInnerScrollComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarFullheightTabbedInnerScrollRoutes),
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
export class LeftSidebarFullheightTabbedInnerScrollModule
{
}

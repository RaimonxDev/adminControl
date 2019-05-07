import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { LeftSidebarFullheightStandardContentScrollComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/standard-content-scroll/standard-content-scroll.component';
import { leftSidebarFullheightStandardContentScrollRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/standard-content-scroll/standard-content-scroll.routing';

@NgModule({
    declarations: [
        LeftSidebarFullheightStandardContentScrollComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarFullheightStandardContentScrollRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule
    ]
})
export class LeftSidebarFullheightStandardContentScrollModule
{
}

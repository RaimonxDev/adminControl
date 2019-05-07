import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { LeftSidebarFullheightStandardInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/standard-inner-scroll/standard-inner-scroll.component';
import { leftSidebarFullheightStandardInnerScrollRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/standard-inner-scroll/standard-inner-scroll.routing';

@NgModule({
    declarations: [
        LeftSidebarFullheightStandardInnerScrollComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarFullheightStandardInnerScrollRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule
    ]
})
export class LeftSidebarFullheightStandardInnerScrollModule
{
}

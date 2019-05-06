import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { LeftSidebarFullheightBasicInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/basic-inner-scroll/basic-inner-scroll.component';
import { leftSidebarFullheightBasicInnerScrollRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/basic-inner-scroll/basic-inner-scroll.routing';

@NgModule({
    declarations: [
        LeftSidebarFullheightBasicInnerScrollComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarFullheightBasicInnerScrollRoutes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule
    ]
})
export class LeftSidebarFullheightBasicInnerScrollModule
{
}

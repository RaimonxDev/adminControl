import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { LeftSidebarFullheightBasicComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/basic/basic.component';
import { leftSidebarFullheightBasicRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/basic/basic.routing';

@NgModule({
    declarations: [
        LeftSidebarFullheightBasicComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarFullheightBasicRoutes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule
    ]
})
export class LeftSidebarFullheightBasicModule
{
}

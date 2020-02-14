import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { SharedModule } from 'app/core/shared/shared.module';
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
        MatMenuModule,
        MatSidenavModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule,
        SharedModule
    ]
})
export class LeftSidebarFullheightBasicModule
{
}

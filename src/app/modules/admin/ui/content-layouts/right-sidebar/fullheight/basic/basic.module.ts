import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { RightSidebarFullheightBasicComponent } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/basic/basic.component';
import { rightSidebarFullheightBasicRoutes } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/basic/basic.routing';

@NgModule({
    declarations: [
        RightSidebarFullheightBasicComponent
    ],
    imports     : [
        RouterModule.forChild(rightSidebarFullheightBasicRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule,
        SharedModule
    ]
})
export class RightSidebarFullheightBasicModule
{
}

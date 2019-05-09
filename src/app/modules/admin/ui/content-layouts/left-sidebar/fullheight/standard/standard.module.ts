import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { LeftSidebarFullheightStandardComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/standard/standard.component';
import { leftSidebarFullheightStandardRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/standard/standard.routing';

@NgModule({
    declarations: [
        LeftSidebarFullheightStandardComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarFullheightStandardRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule,
        SharedModule
    ]
})
export class LeftSidebarFullheightStandardModule
{
}

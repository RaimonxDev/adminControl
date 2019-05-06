import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { LeftSidebarFullheightStandardComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/standard/standard.component';
import { leftSidebarFullheightStandardRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/fullheight/standard/standard.routing';

@NgModule({
    declarations: [
        LeftSidebarFullheightStandardComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarFullheightStandardRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule
    ]
})
export class LeftSidebarFullheightStandardModule
{
}

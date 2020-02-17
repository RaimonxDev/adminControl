import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmDemoContentModule } from '@assembly/components/demo-content';
import { AsmDemoSidebarContentModule } from '@assembly/components/demo-sidebar-content';
import { SharedModule } from 'app/core/shared/shared.module';
import { LeftSidebarContentStandardComponent } from 'app/modules/admin/ui/content-layouts/left-sidebar/content/standard/standard.component';
import { leftSidebarContentStandardRoutes } from 'app/modules/admin/ui/content-layouts/left-sidebar/content/standard/standard.routing';

@NgModule({
    declarations: [
        LeftSidebarContentStandardComponent
    ],
    imports     : [
        RouterModule.forChild(leftSidebarContentStandardRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule,
        SharedModule
    ]
})
export class LeftSidebarContentStandardModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { RightSidebarFullheightStandardComponent } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/standard/standard.component';
import { rightSidebarFullheightStandardRoutes } from 'app/modules/admin/ui/content-layouts/right-sidebar/fullheight/standard/standard.routing';

@NgModule({
    declarations: [
        RightSidebarFullheightStandardComponent
    ],
    imports     : [
        RouterModule.forChild(rightSidebarFullheightStandardRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule,
        SharedModule
    ]
})
export class RightSidebarFullheightStandardModule
{
}

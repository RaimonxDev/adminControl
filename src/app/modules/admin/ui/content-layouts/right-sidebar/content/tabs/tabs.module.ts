import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule, AsmDemoSidebarContentModule } from '@assembly';
import { SharedModule } from 'app/core/shared/shared.module';
import { RightSidebarContentTabsComponent } from 'app/modules/admin/ui/content-layouts/right-sidebar/content/tabs/tabs.component';
import { rightSidebarContentTabsRoutes } from 'app/modules/admin/ui/content-layouts/right-sidebar/content/tabs/tabs.routing';

@NgModule({
    declarations: [
        RightSidebarContentTabsComponent
    ],
    imports     : [
        RouterModule.forChild(rightSidebarContentTabsRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatTabsModule,
        AsmDemoContentModule,
        AsmDemoSidebarContentModule,
        SharedModule
    ]
})
export class RightSidebarContentTabsModule
{
}

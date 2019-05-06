import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { FullwidthTabbedNavComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabbed-nav.component';
import { FullwidthTabbedNavTab1Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-1/tab-1.component';
import { FullwidthTabbedNavTab2Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-2/tab-2.component';
import { FullwidthTabbedNavTab3Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-3/tab-3.component';
import { fullwidthTabbedNavRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabbed-nav.routing';

@NgModule({
    declarations: [
        FullwidthTabbedNavComponent,
        FullwidthTabbedNavTab1Component,
        FullwidthTabbedNavTab2Component,
        FullwidthTabbedNavTab3Component
    ],
    imports     : [
        RouterModule.forChild(fullwidthTabbedNavRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        AsmDemoContentModule,
        SharedModule
    ]
})
export class FullwidthTabbedNavModule
{
}

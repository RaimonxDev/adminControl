import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material';
import { AsmDemoContentModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { FullwidthTabbedNavComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabbed-nav.component';
import { FullwidthTabbedNavTab1Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-1/tab-1.component';
import { FullwidthTabbedNavTab2Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-2/tab-2.component';
import { FullwidthTabbedNavTab3Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-3/tab-3.component';
import { FullwidthTabbedNavTab4Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-4/tab-4.component';
import { FullwidthTabbedNavTab5Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-5/tab-5.component';
import { FullwidthTabbedNavTab6Component } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabs/tab-6/tab-6.component';
import { fullwidthTabbedNavRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-nav/tabbed-nav.routing';

@NgModule({
    declarations: [
        FullwidthTabbedNavComponent,
        FullwidthTabbedNavTab1Component,
        FullwidthTabbedNavTab2Component,
        FullwidthTabbedNavTab3Component,
        FullwidthTabbedNavTab4Component,
        FullwidthTabbedNavTab5Component,
        FullwidthTabbedNavTab6Component,
    ],
    imports     : [
        RouterModule.forChild(fullwidthTabbedNavRoutes),
        MatTabsModule,
        AsmDemoContentModule,
        SharedModule
    ]
})
export class FullwidthTabbedNavModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material';
import { AsmDemoContentModule } from '@assembly';
import { FullwidthTabbedComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed/tabbed.component';
import { fullwidthTabbedRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed/tabbed.routing';

@NgModule({
    declarations: [
        FullwidthTabbedComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthTabbedRoutes),
        MatTabsModule,
        AsmDemoContentModule
    ]
})
export class FullwidthTabbedModule
{
}

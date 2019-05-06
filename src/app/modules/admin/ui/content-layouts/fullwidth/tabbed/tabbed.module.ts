import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule } from '@assembly';
import { FullwidthTabbedComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed/tabbed.component';
import { fullwidthTabbedRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed/tabbed.routing';

@NgModule({
    declarations: [
        FullwidthTabbedComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthTabbedRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        AsmDemoContentModule
    ]
})
export class FullwidthTabbedModule
{
}

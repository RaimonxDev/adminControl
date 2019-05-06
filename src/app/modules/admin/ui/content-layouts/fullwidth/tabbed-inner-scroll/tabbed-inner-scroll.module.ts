import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule } from '@assembly';
import { FullwidthTabbedInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-inner-scroll/tabbed-inner-scroll.component';
import { fullwidthTabbedInnerScrollRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/tabbed-inner-scroll/tabbed-inner-scroll.routing';

@NgModule({
    declarations: [
        FullwidthTabbedInnerScrollComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthTabbedInnerScrollRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        AsmDemoContentModule
    ]
})
export class FullwidthTabbedInnerScrollModule
{
}

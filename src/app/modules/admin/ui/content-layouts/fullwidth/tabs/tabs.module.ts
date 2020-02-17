import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmDemoContentModule } from '@assembly/demo-content';
import { SharedModule } from 'app/core/shared/shared.module';
import { FullwidthTabsComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/tabs/tabs.component';
import { fullwidthTabsRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/tabs/tabs.routing';

@NgModule({
    declarations: [
        FullwidthTabsComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthTabsRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        AsmDemoContentModule,
        SharedModule
    ]
})
export class FullwidthTabsModule
{
}

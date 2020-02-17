import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AsmDemoContentModule } from '@assembly/components/demo-content';
import { SharedModule } from 'app/core/shared/shared.module';
import { FullwidthBasicComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/basic/basic.component';
import { fullwidthBasicRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/basic/basic.routing';

@NgModule({
    declarations: [
        FullwidthBasicComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthBasicRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        AsmDemoContentModule,
        SharedModule
    ]
})
export class FullwidthBasicModule
{
}

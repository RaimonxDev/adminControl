import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AsmDemoContentModule } from '@assembly';
import { SharedModule } from 'app/core/shared/shared.module';
import { FullwidthStandardComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/standard/standard.component';
import { fullwidthStandardRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/standard/standard.routing';

@NgModule({
    declarations: [
        FullwidthStandardComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthStandardRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        AsmDemoContentModule,
        SharedModule
    ]
})
export class FullwidthStandardModule
{
}

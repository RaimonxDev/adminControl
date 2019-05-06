import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AsmDemoContentModule } from '@assembly';
import { FullwidthStandardInnerScrollComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/standard-inner-scroll/standard-inner-scroll.component';
import { fullwidthStandardInnerScrollRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/standard-inner-scroll/standard-inner-scroll.routing';

@NgModule({
    declarations: [
        FullwidthStandardInnerScrollComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthStandardInnerScrollRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        AsmDemoContentModule
    ]
})
export class FullwidthStandardInnerScrollModule
{
}

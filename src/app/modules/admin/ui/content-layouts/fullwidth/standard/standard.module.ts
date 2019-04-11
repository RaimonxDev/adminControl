import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsmDemoContentModule } from '@assembly';
import { FullwidthStandardComponent } from 'app/modules/admin/ui/content-layouts/fullwidth/standard/standard.component';
import { fullwidthStandardRoutes } from 'app/modules/admin/ui/content-layouts/fullwidth/standard/standard.routing';

@NgModule({
    declarations: [
        FullwidthStandardComponent
    ],
    imports     : [
        RouterModule.forChild(fullwidthStandardRoutes),
        AsmDemoContentModule
    ]
})
export class FullwidthStandardModule
{
}

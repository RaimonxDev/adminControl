import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AsmCardModule } from '@assembly';
import { SharedModule } from 'app/core/shared/shared.module';
import { PricingTableComponent } from 'app/modules/admin/pages/pricing/table/table.component';
import { pricingTableRoutes } from 'app/modules/admin/pages/pricing/table/table.routing';

@NgModule({
    declarations: [
        PricingTableComponent
    ],
    imports     : [
        RouterModule.forChild(pricingTableRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatSlideToggleModule,
        AsmCardModule,
        SharedModule
    ]
})
export class PricingTableModule
{
}

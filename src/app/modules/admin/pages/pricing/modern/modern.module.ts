import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatSlideToggleModule } from '@angular/material';
import { SharedModule } from 'app/shared/shared.module';
import { PricingModernComponent } from 'app/modules/admin/pages/pricing/modern/modern.component';
import { pricingModernRoutes } from 'app/modules/admin/pages/pricing/modern/modern.routing';

@NgModule({
    declarations: [
        PricingModernComponent
    ],
    imports     : [
        RouterModule.forChild(pricingModernRoutes),
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        SharedModule
    ]
})
export class PricingModernModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AsmCardModule } from '@assembly';
import { SharedModule } from 'app/core/shared/shared.module';
import { PricingSimpleComponent } from 'app/modules/admin/pages/pricing/simple/simple.component';
import { pricingSimpleRoutes } from 'app/modules/admin/pages/pricing/simple/simple.routing';

@NgModule({
    declarations: [
        PricingSimpleComponent
    ],
    imports     : [
        RouterModule.forChild(pricingSimpleRoutes),
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        AsmCardModule,
        SharedModule
    ]
})
export class PricingSimpleModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AsmCardModule } from '@assembly/components/card';
import { SharedModule } from 'app/core/shared/shared.module';
import { PricingSingleComponent } from 'app/modules/admin/pages/pricing/single/single.component';
import { pricingSingleRoutes } from 'app/modules/admin/pages/pricing/single/single.routing';

@NgModule({
    declarations: [
        PricingSingleComponent
    ],
    imports     : [
        RouterModule.forChild(pricingSingleRoutes),
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        AsmCardModule,
        SharedModule
    ]
})
export class PricingSingleModule
{
}

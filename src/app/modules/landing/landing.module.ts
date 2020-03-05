import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'app/shared/shared.module';
import { LandingComponent } from 'app/modules/landing/landing.component';
import { landingRoutes } from 'app/modules/landing/landing.routing';

@NgModule({
    declarations: [
        LandingComponent
    ],
    imports     : [
        RouterModule.forChild(landingRoutes),
        MatButtonModule,
        SharedModule
    ]
})
export class LandingModule
{
}

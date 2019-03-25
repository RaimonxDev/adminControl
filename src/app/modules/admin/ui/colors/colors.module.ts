import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';
import { SharedModule } from 'app/shared/shared.module';
import { ColorsComponent } from 'app/modules/admin/ui/colors/colors.component';
import { colorsRoutes } from 'app/modules/admin/ui/colors/colors.routing';

@NgModule({
    declarations: [
        ColorsComponent
    ],
    imports     : [
        RouterModule.forChild(colorsRoutes),
        MatIconModule,
        MatRippleModule,
        SharedModule
    ]
})
export class ColorsModule
{
}

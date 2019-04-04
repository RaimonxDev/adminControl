import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule, MatTabsModule } from '@angular/material';
import { AsmHighlightModule } from '@assembly';
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
        MatTabsModule,
        AsmHighlightModule,
        SharedModule
    ]
})
export class ColorsModule
{
}

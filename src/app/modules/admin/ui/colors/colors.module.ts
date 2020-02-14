import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmHighlightModule } from '@assembly';
import { SharedModule } from 'app/core/shared/shared.module';
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

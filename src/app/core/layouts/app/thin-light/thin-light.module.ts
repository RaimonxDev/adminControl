import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { AsmDrawerModule, AsmNavigationModule, AsmThemeConfiguratorModule } from '@assembly';

import { SharedModule } from 'app/core/shared.module';
import { ThinLightLayoutComponent } from 'app/core/layouts/app/thin-light/thin-light.component';

@NgModule({
    declarations: [
        ThinLightLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        AsmDrawerModule,
        AsmNavigationModule,
        AsmThemeConfiguratorModule,

        SharedModule
    ],
    exports     : [
        ThinLightLayoutComponent
    ]
})
export class ThinLightLayoutModule
{
}

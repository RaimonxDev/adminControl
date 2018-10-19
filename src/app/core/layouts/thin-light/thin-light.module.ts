import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AsmSharedModule } from '@assembly/shared.module';
import { AsmDrawerModule, AsmNavigationModule, AsmThemeConfiguratorModule } from '@assembly/components';

import { ThinLightLayoutComponent } from 'app/core/layouts/thin-light/thin-light.component';

@NgModule({
    declarations: [
        ThinLightLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,

        AsmSharedModule,
        AsmDrawerModule,
        AsmNavigationModule,
        AsmThemeConfiguratorModule
    ],
    exports     : [
        ThinLightLayoutComponent
    ]
})
export class ThinLightLayoutModule
{
}

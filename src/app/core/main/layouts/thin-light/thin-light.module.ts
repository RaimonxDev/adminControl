import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsmDrawerModule, AsmNavigationModule, AsmThemeConfiguratorModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { ThinLightVerticalLayoutComponent } from 'app/core/main/layouts/thin-light/thin-light.component';

@NgModule({
    declarations: [
        ThinLightVerticalLayoutComponent
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
        ThinLightVerticalLayoutComponent
    ]
})
export class ThinVerticalLightLayoutModule
{
}

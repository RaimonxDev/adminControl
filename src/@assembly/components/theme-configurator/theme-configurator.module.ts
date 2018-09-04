import { NgModule } from '@angular/core';

import { AsmSharedModule } from '@assembly/shared.module';

import { AsmThemeConfiguratorComponent } from '@assembly/components/theme-configurator/theme-configurator.component';

@NgModule({
    declarations: [
        AsmThemeConfiguratorComponent
    ],
    imports     : [
        AsmSharedModule
    ],
    exports     : [
        AsmThemeConfiguratorComponent
    ]
})
export class AsmThemeConfiguratorModule
{
}

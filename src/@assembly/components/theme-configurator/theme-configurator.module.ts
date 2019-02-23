import { NgModule } from '@angular/core';
import { AsmThemeConfiguratorComponent } from '@assembly/components/theme-configurator/theme-configurator.component';

@NgModule({
    declarations: [
        AsmThemeConfiguratorComponent
    ],
    exports     : [
        AsmThemeConfiguratorComponent
    ]
})
export class AsmThemeConfiguratorModule
{
}

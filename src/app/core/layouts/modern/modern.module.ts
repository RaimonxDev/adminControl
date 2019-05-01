import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsmDrawerModule, AsmNavigationModule, AsmThemeConfiguratorModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { ModernLayoutComponent } from 'app/core/layouts/modern/modern.component';

@NgModule({
    declarations: [
        ModernLayoutComponent
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
        ModernLayoutComponent
    ]
})
export class ModernLayoutModule
{
}

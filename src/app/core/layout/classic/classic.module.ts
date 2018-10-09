import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { AsmSharedModule } from '@assembly/shared.module';
import { AsmDrawerModule, AsmNavigationModule, AsmThemeConfiguratorModule } from '@assembly/components';

import { ContentModule } from 'app/core/layout/classic/components/content/content.module';
import { HeaderModule } from 'app/core/layout/classic/components/header/header.module';
import { FooterModule } from 'app/core/layout/classic/components/footer/footer.module';
import { NavigationModule } from 'app/core/layout/classic/components/navigation/navigation.module';

import { ClassicLayoutComponent } from 'app/core/layout/classic/classic.component';

@NgModule({
    declarations: [
        ClassicLayoutComponent
    ],
    imports     : [
        MatSidenavModule,

        AsmSharedModule,
        AsmDrawerModule,
        AsmNavigationModule,
        AsmThemeConfiguratorModule,

        ContentModule,
        HeaderModule,
        FooterModule,
        NavigationModule
    ],
    exports     : [
        ClassicLayoutComponent
    ]
})
export class ClassicLayoutModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AsmSharedModule } from '@assembly/shared.module';
import { AsmDrawerModule, AsmNavigationModule, AsmSearchModule, AsmThemeConfiguratorModule } from '@assembly/components';

import { ClassyLayoutComponent } from 'app/core/layouts/classy/classy.component';

@NgModule({
    declarations: [
        ClassyLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,

        AsmSharedModule,
        AsmDrawerModule,
        AsmNavigationModule,
        AsmSearchModule,
        AsmThemeConfiguratorModule
    ],
    exports     : [
        ClassyLayoutComponent
    ]
})
export class ClassyLayoutModule
{
}

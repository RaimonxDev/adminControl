import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AsmSharedModule } from '@assembly/shared.module';
import { AsmDrawerModule, AsmNavigationModule, AsmThemeConfiguratorModule } from '@assembly/components';

import { DenseLayoutComponent } from 'app/core/layout/dense/dense.component';

@NgModule({
    declarations: [
        DenseLayoutComponent
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
        DenseLayoutComponent
    ]
})
export class DenseLayoutModule
{
}

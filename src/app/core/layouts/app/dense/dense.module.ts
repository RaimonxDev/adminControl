import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { AsmDrawerModule, AsmNavigationModule, AsmThemeConfiguratorModule } from '@assembly';

import { SharedModule } from 'app/core/shared.module';
import { DenseLayoutComponent } from 'app/core/layouts/app/dense/dense.component';

@NgModule({
    declarations: [
        DenseLayoutComponent
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
        DenseLayoutComponent
    ]
})
export class DenseLayoutModule
{
}
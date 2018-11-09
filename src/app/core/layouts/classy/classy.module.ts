import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { AsmDrawerModule, AsmNavigationModule, AsmSearchModule, AsmThemeConfiguratorModule } from '@assembly';

import { SharedModule } from 'app/core/shared.module';
import { ClassyLayoutComponent } from 'app/core/layouts/classy/classy.component';

@NgModule({
    declarations: [
        ClassyLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        AsmDrawerModule,
        AsmNavigationModule,
        AsmSearchModule,
        AsmThemeConfiguratorModule,

        SharedModule
    ],
    exports     : [
        ClassyLayoutComponent
    ]
})
export class ClassyLayoutModule
{
}

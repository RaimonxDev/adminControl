import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AsmSharedModule } from '@assembly/shared.module';
import { AsmDrawerModule, AsmNavigationModule, AsmThemeConfiguratorModule } from '@assembly/components';

import { CompactLayoutComponent } from 'app/core/layouts/compact/compact.component';

@NgModule({
    declarations: [
        CompactLayoutComponent
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
        CompactLayoutComponent
    ]
})
export class CompactLayoutModule
{
}

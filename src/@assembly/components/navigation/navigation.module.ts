import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatTooltipModule } from '@angular/material';

import { AsmSharedModule } from '@assembly/shared.module';

import { AsmNavigationBasicItemComponent } from '@assembly/components/navigation/components/basic/basic.component';
import { AsmNavigationCollapsableItemComponent } from '@assembly/components/navigation/components/collapsable/collapsable.component';
import { AsmNavigationSubheaderItemComponent } from '@assembly/components/navigation/components/subheader/subheader.component';
import { AsmNavigationAsideItemComponent } from '@assembly/components/navigation/components/aside/aside.component';
import { AsmNavigationComponent } from '@assembly/components/navigation/navigation.component';
import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';

@NgModule({
    declarations: [
        AsmNavigationBasicItemComponent,
        AsmNavigationCollapsableItemComponent,
        AsmNavigationSubheaderItemComponent,
        AsmNavigationAsideItemComponent,
        AsmNavigationComponent
    ],
    providers   : [
        AsmNavigationService
    ],
    imports     : [
        RouterModule,

        AsmSharedModule,

        MatIconModule,
        MatTooltipModule
    ],
    exports     : [
        AsmNavigationComponent
    ]
})
export class AsmNavigationModule
{
}

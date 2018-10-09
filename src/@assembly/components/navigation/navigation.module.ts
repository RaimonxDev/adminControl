import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { AsmSharedModule } from '@assembly/shared.module';

import { AsmNavigationBasicItemComponent } from '@assembly/components/navigation/components/basic/basic.component';
import { AsmNavigationCollapsableItemComponent } from '@assembly/components/navigation/components/collapsable/collapsable.component';
import { AsmNavigationGroupItemComponent } from '@assembly/components/navigation/components/group/group.component';
import { AsmNavigationAsideItemComponent } from '@assembly/components/navigation/components/aside/aside.component';
import { AsmNavigationComponent } from '@assembly/components/navigation/navigation.component';
import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';

@NgModule({
    declarations: [
        AsmNavigationBasicItemComponent,
        AsmNavigationCollapsableItemComponent,
        AsmNavigationGroupItemComponent,
        AsmNavigationAsideItemComponent,
        AsmNavigationComponent
    ],
    imports     : [
        RouterModule,

        AsmSharedModule,

        MatIconModule
    ],
    exports     : [
        AsmNavigationComponent
    ],
    providers   : [
        AsmNavigationService
    ]
})
export class AsmNavigationModule
{
}

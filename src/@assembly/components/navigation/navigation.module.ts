import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsmScrollbarModule } from '@assembly/directives/scrollbar/public-api';
import { AsmNavigationAsideItemComponent } from '@assembly/components/navigation/components/aside/aside.component';
import { AsmNavigationBasicItemComponent } from '@assembly/components/navigation/components/basic/basic.component';
import { AsmNavigationCollapsableItemComponent } from '@assembly/components/navigation/components/collapsable/collapsable.component';
import { AsmNavigationDividerItemComponent } from '@assembly/components/navigation/components/divider/divider.component';
import { AsmNavigationGroupItemComponent } from '@assembly/components/navigation/components/group/group.component';
import { AsmNavigationSpacerItemComponent } from '@assembly/components/navigation/components/spacer/spacer.component';
import { AsmNavigationComponent } from '@assembly/components/navigation/navigation.component';

@NgModule({
    declarations: [
        AsmNavigationAsideItemComponent,
        AsmNavigationBasicItemComponent,
        AsmNavigationCollapsableItemComponent,
        AsmNavigationDividerItemComponent,
        AsmNavigationGroupItemComponent,
        AsmNavigationSpacerItemComponent,
        AsmNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatTooltipModule,
        AsmScrollbarModule
    ],
    exports     : [
        AsmNavigationComponent
    ]
})
export class AsmNavigationModule
{
}

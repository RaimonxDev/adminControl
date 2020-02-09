import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsmScrollbarModule } from '@assembly/directives/scrollbar/public-api';
import { AsmVerticalNavigationAsideItemComponent } from '@assembly/components/navigation/vertical/components/aside/aside.component';
import { AsmVerticalNavigationBasicItemComponent } from '@assembly/components/navigation/vertical/components/basic/basic.component';
import { AsmVerticalNavigationCollapsableItemComponent } from '@assembly/components/navigation/vertical/components/collapsable/collapsable.component';
import { AsmVerticalNavigationDividerItemComponent } from '@assembly/components/navigation/vertical/components/divider/divider.component';
import { AsmVerticalNavigationGroupItemComponent } from '@assembly/components/navigation/vertical/components/group/group.component';
import { AsmVerticalNavigationSpacerItemComponent } from '@assembly/components/navigation/vertical/components/spacer/spacer.component';
import { AsmVerticalNavigationComponent } from '@assembly/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        AsmVerticalNavigationAsideItemComponent,
        AsmVerticalNavigationBasicItemComponent,
        AsmVerticalNavigationCollapsableItemComponent,
        AsmVerticalNavigationDividerItemComponent,
        AsmVerticalNavigationGroupItemComponent,
        AsmVerticalNavigationSpacerItemComponent,
        AsmVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatTooltipModule,
        AsmScrollbarModule
    ],
    exports     : [
        AsmVerticalNavigationComponent
    ]
})
export class AsmNavigationModule
{
}

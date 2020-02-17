import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsmScrollbarModule } from '@assembly/scrollbar/public-api';
import { AsmHorizontalNavigationBasicItemComponent } from '@assembly/navigation/horizontal/components/basic/basic.component';
import { AsmHorizontalNavigationBranchItemComponent } from '@assembly/navigation/horizontal/components/branch/branch.component';
import { AsmHorizontalNavigationDividerItemComponent } from '@assembly/navigation/horizontal/components/divider/divider.component';
import { AsmHorizontalNavigationSpacerItemComponent } from '@assembly/navigation/horizontal/components/spacer/spacer.component';
import { AsmHorizontalNavigationComponent } from '@assembly/navigation/horizontal/horizontal.component';
import { AsmVerticalNavigationAsideItemComponent } from '@assembly/navigation/vertical/components/aside/aside.component';
import { AsmVerticalNavigationBasicItemComponent } from '@assembly/navigation/vertical/components/basic/basic.component';
import { AsmVerticalNavigationCollapsableItemComponent } from '@assembly/navigation/vertical/components/collapsable/collapsable.component';
import { AsmVerticalNavigationDividerItemComponent } from '@assembly/navigation/vertical/components/divider/divider.component';
import { AsmVerticalNavigationGroupItemComponent } from '@assembly/navigation/vertical/components/group/group.component';
import { AsmVerticalNavigationSpacerItemComponent } from '@assembly/navigation/vertical/components/spacer/spacer.component';
import { AsmVerticalNavigationComponent } from '@assembly/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        AsmHorizontalNavigationBasicItemComponent,
        AsmHorizontalNavigationBranchItemComponent,
        AsmHorizontalNavigationDividerItemComponent,
        AsmHorizontalNavigationSpacerItemComponent,
        AsmHorizontalNavigationComponent,
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
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        AsmScrollbarModule
    ],
    exports     : [
        AsmHorizontalNavigationComponent,
        AsmVerticalNavigationComponent
    ]
})
export class AsmNavigationModule
{
}

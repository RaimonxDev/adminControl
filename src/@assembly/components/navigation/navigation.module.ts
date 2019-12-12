import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsmScrollbarModule } from '@assembly/directives/scrollbar/public-api';
import { AsmNavigationBasicItemComponent } from '@assembly/components/navigation/components/basic/basic.component';
import { AsmNavigationCollapsableItemComponent } from '@assembly/components/navigation/components/collapsable/collapsable.component';
import { AsmNavigationDividerItemComponent } from '@assembly/components/navigation/components/divider/divider.component';
import { AsmNavigationSpacerItemComponent } from '@assembly/components/navigation/components/spacer/spacer.component';
import { AsmNavigationSubheaderItemComponent } from '@assembly/components/navigation/components/subheader/subheader.component';
import { AsmNavigationAsideItemComponent } from '@assembly/components/navigation/components/aside/aside.component';
import { AsmNavigationComponent } from '@assembly/components/navigation/navigation.component';

@NgModule({
    declarations: [
        AsmNavigationBasicItemComponent,
        AsmNavigationCollapsableItemComponent,
        AsmNavigationDividerItemComponent,
        AsmNavigationSpacerItemComponent,
        AsmNavigationSubheaderItemComponent,
        AsmNavigationAsideItemComponent,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AsmScrollbarModule } from '@assembly/directives/scrollbar/public-api';
import { AsmVerticalMenuCollapsableItemComponent } from '@assembly/components/menu/vertical-menu/components/collapsable/collapsable.component';
import { AsmVerticalMenuSubheaderItemComponent } from '@assembly/components/menu/vertical-menu/components/subheader/subheader.component';
import { AsmVerticalMenuDividerItemComponent } from '@assembly/components/menu/vertical-menu/components/divider/divider.component';
import { AsmVerticalMenuBasicItemComponent } from '@assembly/components/menu/vertical-menu/components/basic/basic.component';
import { AsmVerticalMenuComponent } from '@assembly/components/menu/vertical-menu/vertical-menu.component';
import { AsmVerticalMenuService } from '@assembly/components/menu/vertical-menu/vertical-menu.service';

@NgModule({
    declarations: [
        AsmVerticalMenuBasicItemComponent,
        AsmVerticalMenuCollapsableItemComponent,
        AsmVerticalMenuDividerItemComponent,
        AsmVerticalMenuSubheaderItemComponent,
        AsmVerticalMenuComponent
    ],
    providers   : [
        AsmVerticalMenuService
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatIconModule,
        AsmScrollbarModule
    ],
    exports     : [
        AsmVerticalMenuComponent
    ]
})
export class AsmVerticalMenuModule
{
}
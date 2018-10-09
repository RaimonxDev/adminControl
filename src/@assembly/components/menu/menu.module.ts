import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material';

import { AsmMenuComponent } from '@assembly/components/menu/menu.component';
import { AsmMenuService } from '@assembly/components/menu/menu.service';
import { AsmMenuVerticalBasicItemComponent } from '@assembly/components/menu/vertical/basic/basic.component';
import { AsmMenuVerticalCollapsableItemComponent } from '@assembly/components/menu/vertical/collapsable/collapsable.component';
import { AsmMenuVerticalGroupItemComponent } from '@assembly/components/menu/vertical/group/group.component';

@NgModule({
    declarations: [
        AsmMenuComponent,
        AsmMenuVerticalBasicItemComponent,
        AsmMenuVerticalCollapsableItemComponent,
        AsmMenuVerticalGroupItemComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule
    ],
    exports     : [
        AsmMenuComponent
    ],
    providers   : [
        AsmMenuService
    ]
})
export class AsmMenuModule
{
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AsmMenuComponent } from '@assembly/components/menu/menu.component';
import { AsmMenuService } from '@assembly/components/menu/menu.service';
import { AsmMenuVerticalBasicItemComponent } from '@assembly/components/menu/vertical/basic/basic.component';
import { AsmMenuVerticalCollapsableItemComponents } from '@assembly/components/menu/vertical/collapsable/collapsable.component';
import { AsmMenuVerticalGroupItemComponent } from '@assembly/components/menu/vertical/group/group.component';

@NgModule({
    declarations: [
        AsmMenuComponent,
        AsmMenuVerticalBasicItemComponent,
        AsmMenuVerticalCollapsableItemComponents,
        AsmMenuVerticalGroupItemComponent
    ],
    imports     : [
        CommonModule,
        RouterModule
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

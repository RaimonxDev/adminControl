import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsmDrawerComponent } from '@assembly/components/drawer/drawer.component';
import { AsmDrawerService } from '@assembly/components/drawer/drawer.service';

@NgModule({
    declarations: [
        AsmDrawerComponent
    ],
    providers   : [
        AsmDrawerService
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        AsmDrawerComponent
    ]
})
export class AsmDrawerModule
{
}

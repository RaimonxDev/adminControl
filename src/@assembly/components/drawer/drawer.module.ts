import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsmDrawerComponent } from '@assembly/components/drawer/drawer.component';
import { AsmDrawerService } from '@assembly/components/drawer/drawer.service';

@NgModule({
    declarations: [
        AsmDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        AsmDrawerComponent
    ],
    providers   : [
        AsmDrawerService
    ]
})
export class AsmDrawerModule
{
}

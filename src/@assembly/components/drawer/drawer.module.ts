import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsmDrawerComponent } from '@assembly/components/drawer/drawer.component';

@NgModule({
    declarations: [
        AsmDrawerComponent
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

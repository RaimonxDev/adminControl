import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsmCardComponent } from '@assembly/card/card.component';

@NgModule({
    declarations: [
        AsmCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        AsmCardComponent
    ]
})
export class AsmCardModule
{
}

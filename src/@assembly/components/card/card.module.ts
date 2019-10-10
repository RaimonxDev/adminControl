import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsmCardComponent } from '@assembly/components/card/card.component';

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

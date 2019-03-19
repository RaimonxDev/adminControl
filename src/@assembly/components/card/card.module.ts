import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsmCardComponent } from '@assembly/components/card/card.component';
import { AsmCardPanelComponent } from '@assembly/components/card/components/panel/panel.component';

@NgModule({
    declarations: [
        AsmCardComponent,
        AsmCardPanelComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        AsmCardComponent,
        AsmCardPanelComponent
    ]
})
export class AsmCardModule
{
}

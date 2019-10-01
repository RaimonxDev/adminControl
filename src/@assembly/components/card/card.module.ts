import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsmCardComponent } from '@assembly/components/card/card.component';
import { AsmCardExpansionPanelComponent } from '@assembly/components/card/components/expansion-panel/expansion-panel.component';

@NgModule({
    declarations: [
        AsmCardComponent,
        AsmCardExpansionPanelComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        AsmCardComponent,
        AsmCardExpansionPanelComponent
    ]
})
export class AsmCardModule
{
}

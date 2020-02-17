import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsmHighlightComponent } from '@assembly/highlight/highlight.component';

@NgModule({
    declarations   : [
        AsmHighlightComponent
    ],
    imports        : [
        CommonModule
    ],
    exports        : [
        AsmHighlightComponent
    ],
    entryComponents: [
        AsmHighlightComponent
    ]
})
export class AsmHighlightModule
{
}

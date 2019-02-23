import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsmHighlightComponent } from '@assembly/components/highlight/highlight.component';
import { AsmHighlightService } from '@assembly/components/highlight/highlight.service';

@NgModule({
    declarations   : [
        AsmHighlightComponent
    ],
    providers      : [
        AsmHighlightService
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

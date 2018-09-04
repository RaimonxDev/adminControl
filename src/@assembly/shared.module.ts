import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AsmMatSidenavDirective, AsmScrollbarDirective } from '@assembly/directives';

@NgModule({
    declarations: [
        AsmScrollbarDirective,
        AsmMatSidenavDirective
    ],
    imports     : [
        CommonModule,
        FormsModule
    ],
    exports     : [
        CommonModule,
        FormsModule,

        AsmScrollbarDirective,
        AsmMatSidenavDirective
    ]
})
export class AsmSharedModule
{
}

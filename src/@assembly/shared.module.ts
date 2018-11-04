import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AsmMatSidenavDirective, AsmScrollbarDirective } from '@assembly/directives';
import { AsmTimeAgoPipe } from '@assembly/pipes/time-ago.pipe';

@NgModule({
    declarations: [
        AsmScrollbarDirective,
        AsmMatSidenavDirective,
        AsmTimeAgoPipe
    ],
    imports     : [
        CommonModule,
        FormsModule
    ],
    exports     : [
        CommonModule,
        FormsModule,

        AsmScrollbarDirective,
        AsmMatSidenavDirective,
        AsmTimeAgoPipe
    ]
})
export class AsmSharedModule
{
}

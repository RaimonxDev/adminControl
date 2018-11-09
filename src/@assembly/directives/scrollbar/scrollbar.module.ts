import { NgModule } from '@angular/core';

import { AsmScrollbarDirective } from '@assembly/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        AsmScrollbarDirective
    ],
    exports     : [
        AsmScrollbarDirective
    ]
})
export class AsmScrollbarModule
{
}

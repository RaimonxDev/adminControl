import { NgModule } from '@angular/core';
import { AsmScrollbarDirective } from '@assembly/scrollbar/scrollbar.directive';

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

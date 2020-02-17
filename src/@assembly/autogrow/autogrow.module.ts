import { NgModule } from '@angular/core';
import { AsmAutogrowDirective } from '@assembly/autogrow/autogrow.directive';

@NgModule({
    declarations: [
        AsmAutogrowDirective
    ],
    exports     : [
        AsmAutogrowDirective
    ]
})
export class AsmAutogrowModule
{
}

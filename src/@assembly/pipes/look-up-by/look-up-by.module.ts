import { NgModule } from '@angular/core';
import { AsmLookUpByPipe } from '@assembly/pipes/look-up-by/look-up-by.pipe';

@NgModule({
    declarations: [
        AsmLookUpByPipe
    ],
    exports     : [
        AsmLookUpByPipe
    ]
})
export class AsmLookUpByPipeModule
{
}

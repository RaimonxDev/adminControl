import { NgModule } from '@angular/core';

import { AsmTimeAgoPipe } from '@assembly/pipes/time-ago/time-ago.pipe';

@NgModule({
    declarations: [
        AsmTimeAgoPipe
    ],
    exports     : [
        AsmTimeAgoPipe
    ]
})
export class AsmTimeAgoPipeModule
{
}

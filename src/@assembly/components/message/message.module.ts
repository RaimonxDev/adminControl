import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { AsmMessageComponent } from '@assembly/components/message/message.component';

@NgModule({
    declarations: [
        AsmMessageComponent
    ],
    imports     : [
        CommonModule,
        MatIconModule
    ],
    exports     : [
        AsmMessageComponent
    ]
})
export class AsmMessageModule
{
}

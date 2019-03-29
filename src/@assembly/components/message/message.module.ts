import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { AsmMessageComponent } from '@assembly/components/message/message.component';

@NgModule({
    declarations: [
        AsmMessageComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        AsmMessageComponent
    ]
})
export class AsmMessageModule
{
}

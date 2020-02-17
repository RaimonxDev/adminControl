import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsmMessageComponent } from '@assembly/message/message.component';

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

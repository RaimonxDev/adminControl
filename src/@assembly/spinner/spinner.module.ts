import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsmSpinnerComponent } from '@assembly/spinner/spinner.component';

@NgModule({
    declarations: [
        AsmSpinnerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        AsmSpinnerComponent
    ]
})
export class AsmSpinnerModule
{
}

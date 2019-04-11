import { NgModule } from '@angular/core';
import { AsmDemoContentComponent } from '@assembly/components/demo-content/demo-content.component';

@NgModule({
    declarations: [
        AsmDemoContentComponent
    ],
    exports     : [
        AsmDemoContentComponent
    ]
})
export class AsmDemoContentModule
{
}

import { NgModule } from '@angular/core';
import { AsmDemoSidebarContentComponent } from '@assembly/components/demo-sidebar-content/demo-sidebar-content.component';

@NgModule({
    declarations: [
        AsmDemoSidebarContentComponent
    ],
    exports     : [
        AsmDemoSidebarContentComponent
    ]
})
export class AsmDemoSidebarContentModule
{
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { AsmVerticalMenuModule } from '@assembly/components/menu/vertical-menu/vertical-menu.module';
import { AsmDemoSidebarContentComponent } from '@assembly/components/demo-sidebar-content/demo-sidebar-content.component';

@NgModule({
    declarations: [
        AsmDemoSidebarContentComponent
    ],
    imports     : [
        RouterModule.forChild([]),
        MatIconModule,
        AsmVerticalMenuModule
    ],
    exports     : [
        AsmDemoSidebarContentComponent
    ]
})
export class AsmDemoSidebarContentModule
{
}

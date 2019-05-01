import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AsmVerticalMenuModule } from '@assembly/components/menu/vertical-menu/vertical-menu.module';
import { AsmDemoSidebarContentComponent } from '@assembly/components/demo-sidebar-content/demo-sidebar-content.component';

@NgModule({
    declarations: [
        AsmDemoSidebarContentComponent
    ],
    imports     : [
        RouterModule.forChild([]),
        MatIconModule,
        MatProgressBarModule,
        AsmVerticalMenuModule
    ],
    exports     : [
        AsmDemoSidebarContentComponent
    ]
})
export class AsmDemoSidebarContentModule
{
}

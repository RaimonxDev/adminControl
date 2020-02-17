import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AsmNavigationModule } from '@assembly/navigation/navigation.module';
import { AsmDemoSidebarContentComponent } from '@assembly/demo-sidebar-content/demo-sidebar-content.component';

@NgModule({
    declarations: [
        AsmDemoSidebarContentComponent
    ],
    imports     : [
        RouterModule.forChild([]),
        MatIconModule,
        MatProgressBarModule,
        AsmNavigationModule
    ],
    exports     : [
        AsmDemoSidebarContentComponent
    ]
})
export class AsmDemoSidebarContentModule
{
}

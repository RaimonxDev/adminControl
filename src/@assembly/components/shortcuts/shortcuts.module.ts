import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { AsmShortcutsComponent } from '@assembly/components/shortcuts/shortcuts.component';

@NgModule({
    declarations: [
        AsmShortcutsComponent
    ],
    imports     : [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        OverlayModule,
        PortalModule
    ],
    exports     : [
        AsmShortcutsComponent
    ]
})
export class AsmShortcutsModule
{
}

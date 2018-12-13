import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule } from '@angular/material';

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
        MatMenuModule
    ],
    exports     : [
        AsmShortcutsComponent
    ]
})
export class AsmShortcutsModule
{
}

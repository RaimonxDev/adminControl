import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsmNavigationModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { CompactVerticalLayoutComponent } from 'app/core/main/layouts/compact/compact.component';

@NgModule({
    declarations: [
        CompactVerticalLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        AsmNavigationModule,
        SharedModule
    ],
    exports     : [
        CompactVerticalLayoutComponent
    ]
})
export class CompactVerticalLayoutModule
{
}

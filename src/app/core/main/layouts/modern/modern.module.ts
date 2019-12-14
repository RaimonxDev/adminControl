import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsmNavigationModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { ModernVerticalLayoutComponent } from 'app/core/main/layouts/modern/modern.component';

@NgModule({
    declarations: [
        ModernVerticalLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        AsmNavigationModule,
        SharedModule
    ],
    exports     : [
        ModernVerticalLayoutComponent
    ]
})
export class ModernVerticalLayoutModule
{
}

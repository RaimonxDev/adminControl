import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsmNavigationModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { ThinVerticalLayoutComponent } from 'app/core/main/layouts/thin/thin.component';

@NgModule({
    declarations: [
        ThinVerticalLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        AsmNavigationModule,
        SharedModule
    ],
    exports     : [
        ThinVerticalLayoutComponent
    ]
})
export class ThinVerticalLayoutModule
{
}

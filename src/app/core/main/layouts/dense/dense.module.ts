import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsmNavigationModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { DenseVerticalLayoutComponent } from 'app/core/main/layouts/dense/dense.component';

@NgModule({
    declarations: [
        DenseVerticalLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        AsmNavigationModule,
        SharedModule
    ],
    exports     : [
        DenseVerticalLayoutComponent
    ]
})
export class DenseVerticalLayoutModule
{
}

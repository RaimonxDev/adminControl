import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsmNavigationModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { ClassicVerticalLayoutComponent } from 'app/core/main/layouts/classic/classic.component';

@NgModule({
    declarations: [
        ClassicVerticalLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        AsmNavigationModule,
        SharedModule
    ],
    exports     : [
        ClassicVerticalLayoutComponent
    ]
})
export class ClassicVerticalLayoutModule
{
}

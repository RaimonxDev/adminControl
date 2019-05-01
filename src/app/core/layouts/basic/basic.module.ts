import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsmDrawerModule, AsmNavigationModule, AsmThemeConfiguratorModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { BasicLayoutComponent } from 'app/core/layouts/basic/basic.component';

@NgModule({
    declarations: [
        BasicLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        AsmDrawerModule,
        AsmNavigationModule,
        AsmThemeConfiguratorModule,

        SharedModule
    ],
    exports     : [
        BasicLayoutComponent
    ]
})
export class BasicLayoutModule
{
}

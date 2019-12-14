import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsmNavigationModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { ThinLightVerticalLayoutComponent } from 'app/core/main/layouts/thin-light/thin-light.component';

@NgModule({
    declarations: [
        ThinLightVerticalLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        AsmNavigationModule,
        SharedModule
    ],
    exports     : [
        ThinLightVerticalLayoutComponent
    ]
})
export class ThinVerticalLightLayoutModule
{
}

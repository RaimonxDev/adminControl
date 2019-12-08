import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsmThemeConfiguratorModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { EmptyLayoutComponent } from 'app/core/main/layouts/empty/empty.component';

@NgModule({
    declarations: [
        EmptyLayoutComponent
    ],
    imports     : [
        RouterModule,
        AsmThemeConfiguratorModule,
        SharedModule
    ],
    exports     : [
        EmptyLayoutComponent
    ]
})
export class EmptyLayoutModule
{
}

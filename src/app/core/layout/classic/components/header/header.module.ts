import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AsmSharedModule } from '@assembly/shared.module';

import { HeaderComponent } from 'app/core/layout/classic/components/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        AsmSharedModule
    ],
    exports     : [
        HeaderComponent
    ]
})
export class HeaderModule
{
}

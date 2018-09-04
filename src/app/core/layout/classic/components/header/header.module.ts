import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { AsmSharedModule } from '@assembly/shared.module';

import { HeaderComponent } from 'app/core/layout/classic/components/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        AsmSharedModule
    ],
    exports     : [
        HeaderComponent
    ]
})
export class HeaderModule
{
}

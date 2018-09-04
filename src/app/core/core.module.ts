import { NgModule } from '@angular/core';

import { LayoutModule } from 'app/core/layout/layout.module';

@NgModule({
    imports     : [
        LayoutModule
    ],
    exports     : [
        LayoutModule
    ]
})
export class CoreModule
{
}

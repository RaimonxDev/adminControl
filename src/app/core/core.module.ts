import { NgModule } from '@angular/core';

import { LayoutsModule } from 'app/core/layouts/layouts.module';

@NgModule({
    imports  : [
        LayoutsModule
    ],
    exports  : [
        LayoutsModule
    ]
})
export class CoreModule
{
}

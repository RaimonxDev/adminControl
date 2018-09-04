import { NgModule } from '@angular/core';

import { ClassicLayoutModule } from 'app/core/layout/classic/classic.module';

@NgModule({
    imports: [
        ClassicLayoutModule
    ],
    exports: [
        ClassicLayoutModule
    ]
})
export class LayoutModule
{
}

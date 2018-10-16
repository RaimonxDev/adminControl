import { NgModule } from '@angular/core';

import { ClassicLayoutModule } from 'app/core/layout/classic/classic.module';
import { CompactLayoutModule } from 'app/core/layout/compact/compact.module';

@NgModule({
    imports: [
        ClassicLayoutModule,
        CompactLayoutModule
    ],
    exports: [
        ClassicLayoutModule,
        CompactLayoutModule
    ]
})
export class LayoutModule
{
}

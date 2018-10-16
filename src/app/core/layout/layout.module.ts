import { NgModule } from '@angular/core';

import { ClassicLayoutModule } from 'app/core/layout/classic/classic.module';
import { CompactLayoutModule } from 'app/core/layout/compact/compact.module';
import { DenseLayoutModule } from 'app/core/layout/dense/dense.module';

@NgModule({
    imports: [
        ClassicLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule
    ],
    exports: [
        ClassicLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule
    ]
})
export class LayoutModule
{
}

import { NgModule } from '@angular/core';

import { ClassicLayoutModule } from 'app/core/layout/classic/classic.module';
import { CompactLayoutModule } from 'app/core/layout/compact/compact.module';
import { DenseLayoutModule } from 'app/core/layout/dense/dense.module';
import { ThinLayoutModule } from 'app/core/layout/thin/thin.module';

@NgModule({
    imports: [
        ClassicLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        ThinLayoutModule
    ],
    exports: [
        ClassicLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        ThinLayoutModule
    ]
})
export class LayoutModule
{
}

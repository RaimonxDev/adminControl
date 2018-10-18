import { NgModule } from '@angular/core';

import { ClassicLayoutModule } from 'app/core/layouts/classic/classic.module';
import { ClassyLayoutModule } from 'app/core/layouts/classy/classy.module';
import { CompactLayoutModule } from 'app/core/layouts/compact/compact.module';
import { DenseLayoutModule } from 'app/core/layouts/dense/dense.module';
import { ThinLayoutModule } from 'app/core/layouts/thin/thin.module';

@NgModule({
    imports: [
        ClassicLayoutModule,
        ClassyLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        ThinLayoutModule
    ],
    exports: [
        ClassicLayoutModule,
        ClassyLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        ThinLayoutModule
    ]
})
export class LayoutsModule
{
}

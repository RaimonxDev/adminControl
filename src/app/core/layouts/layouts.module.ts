import { NgModule } from '@angular/core';

import { BasicLayoutModule } from 'app/core/layouts/basic/basic.module';
import { ClassicLayoutModule } from 'app/core/layouts/classic/classic.module';
import { ClassyLayoutModule } from 'app/core/layouts/classy/classy.module';
import { CompactLayoutModule } from 'app/core/layouts/compact/compact.module';
import { DenseLayoutModule } from 'app/core/layouts/dense/dense.module';
import { ModernLayoutModule } from 'app/core/layouts/modern/modern.module';
import { ThinLayoutModule } from 'app/core/layouts/thin/thin.module';

@NgModule({
    imports: [
        BasicLayoutModule,
        ClassicLayoutModule,
        ClassyLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        ModernLayoutModule,
        ThinLayoutModule
    ],
    exports: [
        BasicLayoutModule,
        ClassicLayoutModule,
        ClassyLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        ModernLayoutModule,
        ThinLayoutModule
    ]
})
export class LayoutsModule
{
}

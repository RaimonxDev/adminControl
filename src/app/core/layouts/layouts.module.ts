import { NgModule } from '@angular/core';

import { BasicLayoutModule } from 'app/core/layouts/app/basic/basic.module';
import { ClassicLayoutModule } from 'app/core/layouts/app/classic/classic.module';
import { ClassyLayoutModule } from 'app/core/layouts/app/classy/classy.module';
import { CompactLayoutModule } from 'app/core/layouts/app/compact/compact.module';
import { DenseLayoutModule } from 'app/core/layouts/app/dense/dense.module';
import { ModernLayoutModule } from 'app/core/layouts/app/modern/modern.module';
import { ThinLayoutModule } from 'app/core/layouts/app/thin/thin.module';
import { ThinLightLayoutModule } from 'app/core/layouts/app/thin-light/thin-light.module';

@NgModule({
    imports: [
        BasicLayoutModule,
        ClassicLayoutModule,
        ClassyLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        ModernLayoutModule,
        ThinLayoutModule,
        ThinLightLayoutModule
    ],
    exports: [
        BasicLayoutModule,
        ClassicLayoutModule,
        ClassyLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        ModernLayoutModule,
        ThinLayoutModule,
        ThinLightLayoutModule
    ]
})
export class LayoutsModule
{
}

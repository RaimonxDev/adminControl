import { NgModule } from '@angular/core';
import { EmptyLayoutModule } from 'app/core/main/layouts/empty/empty.module';
import { BasicLayoutModule } from 'app/core/main/layouts/basic/basic.module';
import { ClassicLayoutModule } from 'app/core/main/layouts/classic/classic.module';
import { ClassyLayoutModule } from 'app/core/main/layouts/classy/classy.module';
import { CompactLayoutModule } from 'app/core/main/layouts/compact/compact.module';
import { DenseLayoutModule } from 'app/core/main/layouts/dense/dense.module';
import { ModernVerticalLayoutModule } from 'app/core/main/layouts/modern/modern.module';
import { ThinVerticalLayoutModule } from 'app/core/main/layouts/thin/thin.module';
import { ThinVerticalLightLayoutModule } from 'app/core/main/layouts/thin-light/thin-light.module';

@NgModule({
    imports: [
        EmptyLayoutModule,
        BasicLayoutModule,
        ClassicLayoutModule,
        ClassyLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        ModernVerticalLayoutModule,
        ThinVerticalLayoutModule,
        ThinVerticalLightLayoutModule
    ],
    exports: [
        EmptyLayoutModule,
        BasicLayoutModule,
        ClassicLayoutModule,
        ClassyLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        ModernVerticalLayoutModule,
        ThinVerticalLayoutModule,
        ThinVerticalLightLayoutModule
    ]
})
export class LayoutsModule
{
}

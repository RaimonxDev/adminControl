import { NgModule } from '@angular/core';
import { EmptyLayoutModule } from 'app/core/main/layouts/empty/empty.module';
import { BasicVerticalLayoutModule } from 'app/core/main/layouts/vertical/basic/basic.module';
import { ClassicVerticalLayoutModule } from 'app/core/main/layouts/vertical/classic/classic.module';
import { ClassyVerticalLayoutModule } from 'app/core/main/layouts/vertical/classy/classy.module';
import { CompactVerticalLayoutModule } from 'app/core/main/layouts/vertical/compact/compact.module';
import { DenseVerticalLayoutModule } from 'app/core/main/layouts/vertical/dense/dense.module';
import { ModernVerticalLayoutModule } from 'app/core/main/layouts/vertical/modern/modern.module';
import { ThinVerticalLayoutModule } from 'app/core/main/layouts/vertical/thin/thin.module';
import { ThinVerticalLightLayoutModule } from 'app/core/main/layouts/vertical/thin-light/thin-light.module';

@NgModule({
    imports: [
        EmptyLayoutModule,
        BasicVerticalLayoutModule,
        ClassicVerticalLayoutModule,
        ClassyVerticalLayoutModule,
        CompactVerticalLayoutModule,
        DenseVerticalLayoutModule,
        ModernVerticalLayoutModule,
        ThinVerticalLayoutModule,
        ThinVerticalLightLayoutModule
    ],
    exports: [
        EmptyLayoutModule,
        BasicVerticalLayoutModule,
        ClassicVerticalLayoutModule,
        ClassyVerticalLayoutModule,
        CompactVerticalLayoutModule,
        DenseVerticalLayoutModule,
        ModernVerticalLayoutModule,
        ThinVerticalLayoutModule,
        ThinVerticalLightLayoutModule
    ]
})
export class LayoutsModule
{
}

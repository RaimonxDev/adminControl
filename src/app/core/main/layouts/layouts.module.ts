import { NgModule } from '@angular/core';
import { EmptyLayoutModule } from 'app/core/main/layouts/empty/empty.module';
import { ModernLayoutModule } from 'app/core/main/layouts/horizontal/modern/modern.module';
import { BasicLayoutModule } from 'app/core/main/layouts/vertical/basic/basic.module';
import { ClassicLayoutModule } from 'app/core/main/layouts/vertical/classic/classic.module';
import { ClassyLayoutModule } from 'app/core/main/layouts/vertical/classy/classy.module';
import { CompactLayoutModule } from 'app/core/main/layouts/vertical/compact/compact.module';
import { DenseLayoutModule } from 'app/core/main/layouts/vertical/dense/dense.module';
import { ThinLayoutModule } from 'app/core/main/layouts/vertical/thin/thin.module';

const modules = [
    // Empty
    EmptyLayoutModule,

    // Horizontal navigation
    ModernLayoutModule,

    // Vertical navigation
    BasicLayoutModule,
    ClassicLayoutModule,
    ClassyLayoutModule,
    CompactLayoutModule,
    DenseLayoutModule,
    ThinLayoutModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class LayoutsModule
{
}

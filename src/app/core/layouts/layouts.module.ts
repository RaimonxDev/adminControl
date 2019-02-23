import { NgModule } from '@angular/core';
import { LayoutsComponent } from 'app/core/layouts/layouts.component';
import { BasicLayoutModule } from 'app/core/layouts/basic/basic.module';
import { ClassicLayoutModule } from 'app/core/layouts/classic/classic.module';
import { ClassyLayoutModule } from 'app/core/layouts/classy/classy.module';
import { CompactLayoutModule } from 'app/core/layouts/compact/compact.module';
import { DenseLayoutModule } from 'app/core/layouts/dense/dense.module';
import { EmptyLayoutModule } from 'app/core/layouts/empty/empty.module';
import { ModernLayoutModule } from 'app/core/layouts/modern/modern.module';
import { ThinLayoutModule } from 'app/core/layouts/thin/thin.module';
import { ThinLightLayoutModule } from 'app/core/layouts/thin-light/thin-light.module';

@NgModule({
    declarations: [
        LayoutsComponent
    ],
    imports     : [
        BasicLayoutModule,
        ClassicLayoutModule,
        ClassyLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        EmptyLayoutModule,
        ModernLayoutModule,
        ThinLayoutModule,
        ThinLightLayoutModule
    ],
    exports     : [
        BasicLayoutModule,
        ClassicLayoutModule,
        ClassyLayoutModule,
        CompactLayoutModule,
        DenseLayoutModule,
        EmptyLayoutModule,
        ModernLayoutModule,
        ThinLayoutModule,
        ThinLightLayoutModule
    ]
})
export class LayoutsModule
{
}

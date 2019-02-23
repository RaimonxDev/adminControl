import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from 'app/core/auth/auth.module';
import { LayoutsModule } from 'app/core/layouts/layouts.module';

@NgModule({
    imports: [
        AuthModule,
        LayoutsModule
    ],
    exports: [
        AuthModule,
        LayoutsModule
    ]
})
export class CoreModule
{
    /**
     * Constructor
     *
     * @param parentModule
         */
        constructor(@Optional() @SkipSelf() parentModule: CoreModule)
        {
            if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}

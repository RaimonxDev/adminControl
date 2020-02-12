import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from 'app/core/auth/auth.module';
import { ConfigModule } from 'app/core/config/config.module';
import { MainModule } from 'app/core/main/main.module';

@NgModule({
    imports: [
        AuthModule,
        ConfigModule,
        MainModule
    ],
    exports: [
        AuthModule,
        ConfigModule,
        MainModule
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

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from 'app/core/auth/auth.module';
import { MainModule } from 'app/core/main/main.module';
import { UserModule } from 'app/core/user/user.module';

@NgModule({
    imports: [
        AuthModule,
        MainModule,
        UserModule
    ],
    exports: [
        AuthModule,
        MainModule,
        UserModule
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

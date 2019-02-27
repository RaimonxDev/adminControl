import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AsmConfigModule } from '@assembly/services/config/public-api';
import { AsmMediaWatcherModule } from '@assembly/services/media-watcher/public-api';
import { AsmSplashScreenModule } from '@assembly/services/splash-screen/public-api';

@NgModule({
    imports: [
        AsmConfigModule,
        AsmMediaWatcherModule,
        AsmSplashScreenModule
    ],
    exports: [
        AsmConfigModule,
        AsmMediaWatcherModule,
        AsmSplashScreenModule
    ]
})
export class AsmCoreModule
{
    /**
     * Constructor
     *
     * @param parentModule
     */
    constructor(@Optional() @SkipSelf() parentModule: AsmCoreModule)
    {
        if ( parentModule )
        {
            throw new Error('AsmCoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}
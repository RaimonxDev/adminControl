import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { ASM_CONFIG } from '@assembly/services/config.service';

@NgModule()
export class AsmCoreModule
{
    constructor(@Optional() @SkipSelf() parentModule: AsmCoreModule)
    {
        if ( parentModule )
        {
            throw new Error('AsmCoreModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : AsmCoreModule,
            providers: [
                {
                    provide : ASM_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}

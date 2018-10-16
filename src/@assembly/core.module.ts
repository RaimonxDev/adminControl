import { NgModule, Optional, SkipSelf } from '@angular/core';

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
}

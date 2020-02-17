import { ModuleWithProviders, NgModule } from '@angular/core';
import { AsmConfigService } from '@assembly/config/config.service';
import { ASM_APP_CONFIG } from '@assembly/config/config.constants';

@NgModule()
export class AsmConfigModule
{
    /**
     * Constructor
     *
     * @param {AsmConfigService} _asmConfigService
     */
    constructor(
        private _asmConfigService: AsmConfigService
    )
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders
    {
        return {
            ngModule : AsmConfigModule,
            providers: [
                {
                    provide : ASM_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}

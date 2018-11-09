import { NgModule } from '@angular/core';

import { AsmConfigService } from '@assembly/services/config/config.service';

@NgModule({
    providers: [
        AsmConfigService
    ]
})
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
}

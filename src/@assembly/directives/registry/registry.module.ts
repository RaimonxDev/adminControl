import { NgModule } from '@angular/core';
import { AsmRegistryService } from '@assembly/directives/registry/registry.service';

@NgModule({
    providers: [
        AsmRegistryService
    ]
})
export class AsmRegistryModule
{
    /**
     * Constructor
     *
     * @param {AsmRegistryService} _asmRegistryService
     */
    constructor(
        private _asmRegistryService: AsmRegistryService
    )
    {
    }
}

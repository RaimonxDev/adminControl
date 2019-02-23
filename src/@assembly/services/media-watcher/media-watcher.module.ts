import { NgModule } from '@angular/core';
import { AsmMediaWatcherService } from '@assembly/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        AsmMediaWatcherService
    ]
})
export class AsmMediaWatcherModule
{
    /**
     * Constructor
     *
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     */
    constructor(
        private _asmMediaWatcherService: AsmMediaWatcherService
    )
    {
    }
}

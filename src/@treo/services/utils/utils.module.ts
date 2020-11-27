import { NgModule } from '@angular/core';
import { TreoUtilsService } from '@treo/services/utils/utils.service';

@NgModule({
    providers: [
        TreoUtilsService
    ]
})
export class TreoUtilsModule
{
    /**
     * Constructor
     *
     * @param {TreoUtilsService} _treoUtilsService
     */
    constructor(
        private _treoUtilsService: TreoUtilsService
    )
    {
    }
}

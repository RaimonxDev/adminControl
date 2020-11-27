import { Component } from '@angular/core';
import { TreoAlertService } from '@treo/components/alert';

@Component({
    selector   : 'alert',
    templateUrl: './alert.component.html',
    styles     : ['']
})
export class AlertComponent
{
    /**
     * Constructor
     *
     * @param {TreoAlertService} _treoAlertService
     */
    constructor(
        private _treoAlertService: TreoAlertService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss the alert via the service
     *
     * @param name
     */
    dismiss(name: string): void
    {
        // Dismiss
        this._treoAlertService.dismiss(name);
    }

    /**
     * Show the alert via the service
     *
     * @param name
     */
    show(name: string): void
    {
        // Show
        this._treoAlertService.show(name);
    }

}

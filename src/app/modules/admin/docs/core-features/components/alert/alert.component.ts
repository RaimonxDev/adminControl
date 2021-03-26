import { Component } from '@angular/core';
import { TreoAlertService } from '@treo/components/alert';

@Component({
    selector   : 'alert',
    templateUrl: './alert.component.html',
    styles     : [`
        treo-alert {
            margin: 16px 0;
        }
    `]
})
export class AlertComponent
{
    /**
     * Constructor
     */
    constructor(private _treoAlertService: TreoAlertService)
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

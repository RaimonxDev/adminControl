import { Component, ViewEncapsulation } from '@angular/core';
import { AsmMessageService } from '@assembly/components/message';

@Component({
    selector     : 'messages',
    templateUrl  : './messages.component.html',
    styleUrls    : ['./messages.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MessagesComponent
{
    /**
     * Constructor
     *
     * @param {AsmMessageService} _asmMessageService
     */
    constructor(
        private _asmMessageService: AsmMessageService
    )
    {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss a message box via the service
     *
     * @param name
     */
    dismiss(name): void
    {
        // Dismiss
        this._asmMessageService.dismiss(name);
    }

    /**
     * Show a message box via the service
     *
     * @param name
     */
    show(name): void
    {
        // Show
        this._asmMessageService.show(name);
    }

}

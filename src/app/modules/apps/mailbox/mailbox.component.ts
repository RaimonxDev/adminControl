import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MailboxService } from 'app/modules/apps/mailbox/mailbox.service';

@Component({
    selector       : 'mailbox',
    templateUrl    : './mailbox.component.html',
    styleUrls      : ['./mailbox.component.scss'],
    encapsulation  : ViewEncapsulation.None
})
export class MailboxComponent implements OnInit
{
    folders$: Observable<any>;
    filters$: Observable<any>;
    labels$: Observable<any>;

    /**
     * Constructor
     *
     * @param {MailboxService} _mailboxService
     */
    constructor(
        private _mailboxService: MailboxService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get data
        this.folders$ = this._mailboxService.folders$;
        this.filters$ = this._mailboxService.filters$;
        this.labels$ = this._mailboxService.labels$;
    }
}

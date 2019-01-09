import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MailboxService } from 'app/modules/apps/mailbox/mailbox.service';

@Component({
    selector       : 'mailbox-sidebar',
    templateUrl    : './sidebar.component.html',
    styleUrls      : ['./sidebar.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailboxSidebarComponent implements OnInit
{
    systemLabels$: Observable<any>;
    userLabels$: Observable<any>;

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
        // Get the labels
        this.userLabels$ = this._mailboxService.userLabels;
        this.systemLabels$ = this._mailboxService.systemLabels;
    }
}

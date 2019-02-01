import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MailboxService } from 'app/modules/apps/mailbox/mailbox.service';
import { ContentLayoutWithSidebarComponent } from 'app/core/layouts/content/with-sidebar/with-sidebar.component';

@Component({
    selector     : 'mailbox-list',
    templateUrl  : './list.component.html',
    styleUrls    : ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailboxListComponent implements OnInit, OnDestroy
{
    mails: any[];
    pagination: any;
    selectedMail: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ContentLayoutWithSidebarComponent} contentLayoutWithSidebar
     * @param {MailboxService} _mailboxService
     */
    constructor(
        public contentLayoutWithSidebar: ContentLayoutWithSidebarComponent,
        private _mailboxService: MailboxService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Mails
        this._mailboxService.mails$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mails) => {
                this.mails = mails;
            });

        // Pagination
        this._mailboxService.pagination$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((pagination) => {
                this.pagination = pagination;
            });

        // Selected mail
        this._mailboxService.mail$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mail) => {
                this.selectedMail = mail;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On mail selected
     *
     * @param mail
     */
    onMailSelected(mail): void
    {
        // If the mail is unread...
        if ( mail.unread )
        {
            // Update the mail object
            mail.unread = false;

            // Update the mail on the server
            this._mailboxService.updateMail(mail.id, {unread: false}).subscribe();
        }
    }
}

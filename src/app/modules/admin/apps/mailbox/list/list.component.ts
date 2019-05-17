import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';
import { MailboxComponent } from 'app/modules/admin/apps/mailbox/mailbox.component';

@Component({
    selector     : 'mailbox-list',
    templateUrl  : './list.component.html',
    styleUrls    : ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailboxListComponent implements OnInit, OnDestroy
{
    category: any;
    mails: any[];
    pagination: any;
    selectedMail: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MailboxComponent} mailboxComponent
     * @param {MailboxService} _mailboxService
     */
    constructor(
        public mailboxComponent: MailboxComponent,
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
        // Category
        this._mailboxService.category$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((category) => {
                this.category = category;
            });

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

    /**
     * Generate and return mail list group label if necessary or return false
     *
     * @param index
     */
    mailListGroupLabel(index): string | false
    {
        const previousMail = this.mails[index - 1];
        const currentMail = this.mails[index];

        // Generate and return label, if there is no previous mail
        if ( !previousMail )
        {
            return this._generateMailListGroupLabel(this.mails[index].date);
        }

        // Return false, if the two dates are equal by day
        if ( moment(previousMail.date, moment.ISO_8601).isSame(moment(currentMail.date, moment.ISO_8601), 'day') )
        {
            return false;
        }

        // Generate and return label
        return this._generateMailListGroupLabel(this.mails[index].date);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Generate a mail list group label based on the date
     *
     * @param mailDate
     * @private
     */
    private _generateMailListGroupLabel(mailDate): string
    {
        const date = moment(mailDate, moment.ISO_8601);
        const today = moment();
        const yesterday = moment().subtract(1, 'day');

        // Check if the mail date is today
        if ( date.isSame(today, 'day') )
        {
            // Return 'Today'
            return 'Today';
        }

        // Check if the mail date is yesterday
        if ( date.isSame(yesterday, 'day') )
        {
            // Return 'Yesterday'
            return 'Yesterday';
        }

        // Check if we are in the same year with the mail date...
        if ( date.isSame(today, 'year') )
        {
            // Return a date without a year
            return date.format('MMMM DD');
        }

        // Return a date
        return date.format('LL');
    }
}

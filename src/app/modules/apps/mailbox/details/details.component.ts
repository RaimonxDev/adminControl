import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailboxService } from 'app/modules/apps/mailbox/mailbox.service';
import { of, Subject } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';

@Component({
    selector     : 'mailbox-details',
    templateUrl  : './details.component.html',
    styleUrls    : ['./details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailboxDetailsComponent implements OnInit, OnDestroy
{
    mail: any;
    labels: any[];

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
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
        // Labels
        this._mailboxService.labels$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((labels) => {
                this.labels = labels;
            });

        // Mail
        this._mailboxService.mail$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mail) => {
                this.mail = mail;
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
     * Toggle label
     *
     * @param label
     */
    toggleLabel(label): void
    {
        let removed = false;

        // Update the mail object
        if ( this.mail.labels.includes(label.id) )
        {
            // Set the removed
            removed = true;

            // Remove the label
            this.mail.labels.splice(this.mail.labels.indexOf(label.id), 1);
        }
        else
        {
            // Add the label
            this.mail.labels.push(label.id);
        }

        // Update the mail on the server
        this._mailboxService.updateMail(this.mail.id, {labels: this.mail.labels}).subscribe();

        // If the label was removed...
        if ( removed )
        {
            // If the current activated route has a label parameter
            // and it equals to the one we are removing...
            if ( this._activatedRoute.snapshot.params.label && this._activatedRoute.snapshot.params.label === label.slug )
            {
                // Reload the mails
                this._mailboxService.reloadMails()
                    .pipe(
                        map(() => {

                            // Navigate to the parent
                            this._router.navigate(['./'], {relativeTo: this._activatedRoute});
                        }),
                        catchError((error) => {

                            // Navigate to last possible page if there
                            // are no more mails left in the current page
                            this._router.navigate(['./../', error.pagination.lastPage], {relativeTo: this._activatedRoute});

                            return of(error);
                        })
                    )
                    .subscribe();

                // Reset the mail
                this._mailboxService.resetMail().subscribe();
            }
        }
    }

    /**
     * Toggle important
     */
    toggleImportant(): void
    {
        // Update the mail object
        this.mail.important = !this.mail.important;

        // Update the mail on the server
        this._mailboxService.updateMail(this.mail.id, {important: this.mail.important}).subscribe();
    }

    /**
     * Toggle star
     */
    toggleStar(): void
    {
        // Update the mail object
        this.mail.starred = !this.mail.starred;

        // Update the mail on the server
        this._mailboxService.updateMail(this.mail.id, {starred: this.mail.starred}).subscribe();
    }

    /**
     * Toggle unread
     *
     * @param unread
     */
    toggleUnread(unread): void
    {
        // Update the mail object
        this.mail.unread = unread;

        // Update the mail on the server
        this._mailboxService.updateMail(this.mail.id, {unread: this.mail.unread}).subscribe();
    }
}

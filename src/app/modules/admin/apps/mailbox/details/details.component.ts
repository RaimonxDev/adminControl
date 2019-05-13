import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';

@Component({
    selector     : 'mailbox-details',
    templateUrl  : './details.component.html',
    styleUrls    : ['./details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailboxDetailsComponent implements OnInit, OnDestroy
{
    folders: any[];
    labels: any[];
    mail: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {MailboxService} _mailboxService
     * @param {Router} _router
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _mailboxService: MailboxService,
        private _router: Router
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
        // Folders
        this._mailboxService.folders$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folders) => {
                this.folders = folders;
            });

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
     * Get the current folder
     */
    getCurrentFolder(): any
    {
        return this._activatedRoute.snapshot.paramMap.get('folder');
    }

    /**
     * Move to folder
     *
     * @param folder
     */
    moveToFolder(folder): void
    {
        // Find the folder details
        folder = this.folders.find((item) => {
            return item.slug === folder;
        });

        // Return if the current folder of the mail
        // is already equals to the given folder
        if ( this.mail.folder === folder.id )
        {
            return;
        }

        // Update the mail object
        this.mail.folder = folder.id;

        // Update the mail on the server
        this._mailboxService.updateMail(this.mail.id, {folder: this.mail.folder}).subscribe();

        // Navigate to the parent
        this._router.navigate(['./'], {relativeTo: this._activatedRoute.parent});
    }

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
            // If the current activated route has a label parameter and it equals to the one we are removing...
            if ( this._activatedRoute.snapshot.paramMap.get('label') && this._activatedRoute.snapshot.paramMap.get('label') === label.slug )
            {
                // Navigate to the parent
                this._router.navigate(['./'], {relativeTo: this._activatedRoute.parent});
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

        // If the important was removed...
        if ( !this.mail.important )
        {
            // If the current activated route has a filter parameter and it equals to the 'important'...
            if ( this._activatedRoute.snapshot.paramMap.get('filter') && this._activatedRoute.snapshot.paramMap.get('filter') === 'important' )
            {
                // Navigate to the parent
                this._router.navigate(['./'], {relativeTo: this._activatedRoute.parent});
            }
        }
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

        // If the star was removed...
        if ( !this.mail.starred )
        {
            // If the current activated route has a filter parameter and it equals to the 'starred'...
            if ( this._activatedRoute.snapshot.paramMap.get('filter') && this._activatedRoute.snapshot.paramMap.get('filter') === 'starred' )
            {
                // Navigate to the parent
                this._router.navigate(['./'], {relativeTo: this._activatedRoute.parent});
            }
        }
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

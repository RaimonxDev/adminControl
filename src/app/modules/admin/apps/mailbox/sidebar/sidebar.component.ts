import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector   : 'mailbox-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls  : ['./sidebar.component.scss']
})
export class MailboxSidebarComponent implements OnInit, OnDestroy
{
    filters: any[];
    folders: any[];
    labels: any[];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MailboxService} _mailboxService
     */
    constructor(
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
        // Filters
        this._mailboxService.filters$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((filters) => {
                this.filters = filters;
            });

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
}

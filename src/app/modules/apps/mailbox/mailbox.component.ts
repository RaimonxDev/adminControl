import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MailboxService } from 'app/modules/apps/mailbox/mailbox.service';

@Component({
    selector       : 'mailbox',
    templateUrl    : './mailbox.component.html',
    styleUrls      : ['./mailbox.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailboxComponent implements OnInit
{
    folders$: Observable<any>;
    filters$: Observable<any>;
    labels$: Observable<any>;
    mails$: Observable<any>;
    mail$: Observable<any>;
    pagination$: Observable<any>;

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
        this.folders$ = this._mailboxService.folders;
        this.filters$ = this._mailboxService.filters;
        this.labels$ = this._mailboxService.labels;
        this.mails$ = this._mailboxService.mails;
        this.mail$ = this._mailboxService.mail;
        this.pagination$ = this._mailboxService.pagination;
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
        // If the mail is marked as unread...
        if ( mail.unread )
        {
            // Mark the mail as read
            mail.unread = false;

            // Update the mail
            this._mailboxService.updateMail(mail.id, {unread: false}).subscribe();
        }

        // Find the last activated route by
        // recursively looking up the firstChild
        let route: ActivatedRoute = this._activatedRoute.firstChild;

        while ( route.firstChild )
        {
            route = route.firstChild;
        }

        // If the current activated route has an id param,
        // take the route's parent as the relative, otherwise
        // take the route
        let relativeTo = route;

        if ( route.snapshot.params.id )
        {
            relativeTo = route.parent;
        }

        // Navigate to the correct path
        this._router.navigate([mail.id], {relativeTo});
    }

    /**
     * On page changed
     *
     * @param page
     */
    onPageChanged(page): void
    {
        // Find the last activated route by
        // recursively looking up the firstChild
        let route: ActivatedRoute = this._activatedRoute.firstChild;

        while ( route.firstChild )
        {
            route = route.firstChild;
        }

        // If the current activated route has an id param,
        // take the route's parent otherwise take itself
        let relativeTo = route;

        if ( route.snapshot.params.id )
        {
            relativeTo = route.parent.parent;
        }
        else if ( route.snapshot.params.page )
        {
            relativeTo = route.parent;
        }

        // Navigate to the correct path
        this._router.navigate([page], {relativeTo});
    }
}

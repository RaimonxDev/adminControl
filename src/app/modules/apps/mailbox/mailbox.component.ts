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
    mails$: Observable<any>;
    mail$: Observable<any>;

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
        // Get the mails and mail
        this.mails$ = this._mailboxService.mails;
        this.mail$ = this._mailboxService.mail;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On mail selected
     *
     * @param mailId
     */
    onMailSelected(mailId): void
    {
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
        this._router.navigate([mailId], {relativeTo});
    }
}

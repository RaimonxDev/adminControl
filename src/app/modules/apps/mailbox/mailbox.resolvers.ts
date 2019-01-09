import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { MailboxService } from 'app/modules/apps/mailbox/mailbox.service';

@Injectable({
    providedIn: 'root'
})
export class MailboxLabelsResolver implements Resolve<any>
{
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
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        // Create and build the sources array
        const sources = [];

        // Add labels
        sources.push(this._mailboxService.getSystemLabels());
        sources.push(this._mailboxService.getUserLabels());

        // Fork join all the sources
        return forkJoin(sources);
    }
}

@Injectable({
    providedIn: 'root'
})
export class MailboxMailsResolver implements Resolve<any>
{
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
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        // Create and build the sources array
        const sources = [];

        // If category is set on the parameters...
        if ( route.params.category )
        {
            // Add category mail loader
            sources.push(this._mailboxService.getMailsByCategory(route.params.category));
        }

        // If label is set on the parameters...
        if ( route.params.label )
        {
            // Add label mail loader
            sources.push(this._mailboxService.getMailsByLabel(route.params.label));
        }

        // Reset the mail every time mails list updated
        sources.push(this._mailboxService.resetMail());

        // Fork join all the sources
        return forkJoin(sources);
    }
}

@Injectable({
    providedIn: 'root'
})
export class MailboxMailResolver implements Resolve<any>
{
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
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        // Create and build the sources array
        const sources = [];

        // Add mail loader
        sources.push(this._mailboxService.getMailById(route.params.id));

        // Fork join all the sources
        return forkJoin(sources);
    }
}

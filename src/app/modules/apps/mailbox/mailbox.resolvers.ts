import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MailboxService } from 'app/modules/apps/mailbox/mailbox.service';

@Injectable({
    providedIn: 'root'
})
export class MailboxFoldersResolver implements Resolve<any>
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
        return this._mailboxService.getFolders();
    }
}

@Injectable({
    providedIn: 'root'
})
export class MailboxFiltersResolver implements Resolve<any>
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
        return this._mailboxService.getFilters();
    }
}

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
        return this._mailboxService.getLabels();
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
     * @param {Router} _router
     */
    constructor(
        private _mailboxService: MailboxService,
        private _router: Router
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
        // Don't allow page param to go below 1
        if ( route.params.page <= 0 )
        {
            // Get the parent url
            const url = state.url.split('/').slice(0, -1).join('/') + '/1';

            // Navigate to there
            this._router.navigateByUrl(url);

            // Don't allow request to go through
            return false;
        }

        // Create and build the sources array
        const sources = [];

        // If folder is set on the parameters...
        if ( route.params.folder )
        {
            sources.push(this._mailboxService.getMailsByFolder(route.params.folder, route.params.page));
        }

        // If filter is set on the parameters...
        if ( route.params.filter )
        {
            sources.push(this._mailboxService.getMailsByFilter(route.params.filter, route.params.page));
        }

        // If label is set on the parameters...
        if ( route.params.label )
        {
            sources.push(this._mailboxService.getMailsByLabel(route.params.label, route.params.page));
        }

        // Reset the mail every time mails list updated
        sources.push(this._mailboxService.resetMail());

        // Fork join all the sources
        return forkJoin(sources)
            .pipe(
                // Error here means the requested page is not available
                catchError((error) => {

                    // Log the error
                    console.error(error.message);

                    // Get the parent url and append the last possible page number to the parent url
                    const url = state.url.split('/').slice(0, -1).join('/') + '/' + error.pagination.lastPage;

                    // Navigate to there
                    this._router.navigateByUrl(url);

                    // Throw an error
                    return throwError(error);
                })
            );
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
     * @param {Router} _router
     */
    constructor(
        private _mailboxService: MailboxService,
        private _router: Router
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
        return this._mailboxService.getMailById(route.params.id)
                   .pipe(
                       // Error here means the requested mail is either
                       // not available on the requested page or not
                       // available at all
                       catchError((error) => {

                           // Log the error
                           console.error(error);

                           // Get the parent url
                           const parentUrl = state.url.split('/').slice(0, -1).join('/');

                           // Navigate to there
                           this._router.navigateByUrl(parentUrl);

                           // Throw an error
                           return throwError(error);
                       })
                   );
    }
}

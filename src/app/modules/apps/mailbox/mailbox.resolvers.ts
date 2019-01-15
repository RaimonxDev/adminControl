import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable, throwError } from 'rxjs';
import { MailboxService } from 'app/modules/apps/mailbox/mailbox.service';
import { catchError } from 'rxjs/operators';

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
                catchError((error) => {

                    // Log the error
                    console.error(error);

                    // Get the parent url
                    const parentUrl = state.url.split('/').slice(0, -1).join('/') + '/1';

                    // Navigate to there
                    this._router.navigateByUrl(parentUrl);

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

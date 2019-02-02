import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MailboxService
{
    // Observables
    private _filters: BehaviorSubject<any>;
    private _folders: BehaviorSubject<any>;
    private _labels: BehaviorSubject<any>;
    private _mails: BehaviorSubject<any>;
    private _mail: BehaviorSubject<any>;
    private _pagination: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the private defaults
        this._filters = new BehaviorSubject(null);
        this._folders = new BehaviorSubject(null);
        this._labels = new BehaviorSubject(null);
        this._mails = new BehaviorSubject(null);
        this._mail = new BehaviorSubject(null);
        this._pagination = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for filters
     */
    get filters$(): Observable<any>
    {
        return this._filters.asObservable();
    }

    /**
     * Getter for folders
     */
    get folders$(): Observable<any>
    {
        return this._folders.asObservable();
    }

    /**
     * Getter for labels
     */
    get labels$(): Observable<any>
    {
        return this._labels.asObservable();
    }

    /**
     * Getter for mails
     */
    get mails$(): Observable<any>
    {
        return this._mails.asObservable();
    }

    /**
     * Getter for mail
     */
    get mail$(): Observable<any>
    {
        return this._mail.asObservable();
    }

    /**
     * Getter for pagination
     */
    get pagination$(): Observable<any>
    {
        return this._pagination.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get filters
     */
    getFilters(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/filters')
                   .pipe(tap((response: any) => {
                       this._filters.next(response);
                   }));
    }

    /**
     * Get folders
     */
    getFolders(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/folders')
                   .pipe(tap((response: any) => {
                       this._folders.next(response);
                   }));
    }

    /**
     * Get labels
     */
    getLabels(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/labels')
                   .pipe(tap((response: any) => {
                       this._labels.next(response);
                   }));
    }

    /**
     * Get mails by filter
     */
    getMailsByFilter(filter, page = '1'): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/mails', {
                       params: {
                           filter,
                           page
                       }
                   })
                   .pipe(
                       tap((response: any) => {
                           this._mails.next(response.mails);
                           this._pagination.next(response.pagination);
                       }),
                       switchMap((response) => {

                           if ( response.mails === null )
                           {
                               return throwError({
                                   message   : 'Requested page is not available!',
                                   pagination: response.pagination
                               });
                           }

                           return of(response);
                       })
                   );
    }

    /**
     * Get mails by folder
     */
    getMailsByFolder(folder, page = '1'): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/mails', {
                       params: {
                           folder,
                           page
                       }
                   })
                   .pipe(
                       tap((response: any) => {
                           this._mails.next(response.mails);
                           this._pagination.next(response.pagination);
                       }),
                       switchMap((response) => {

                           if ( response.mails === null )
                           {
                               return throwError({
                                   message   : 'Requested page is not available!',
                                   pagination: response.pagination
                               });
                           }

                           return of(response);
                       })
                   );
    }

    /**
     * Get mails by label
     */
    getMailsByLabel(label, page = '1'): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/mails', {
                       params: {
                           label,
                           page
                       }
                   })
                   .pipe(
                       tap((response: any) => {
                           this._mails.next(response.mails);
                           this._pagination.next(response.pagination);
                       }),
                       switchMap((response) => {

                           if ( response.mails === null )
                           {

                               return throwError({
                                   message   : 'Requested page is not available!',
                                   pagination: response.pagination
                               });
                           }

                           return of(response);
                       })
                   );
    }

    /**
     * Get mail by id
     */
    getMailById(id): Observable<any>
    {
        return this._mails
                   .pipe(
                       map((mails) => {

                           // Find the mail
                           const mail = mails.find(item => item.id === id);

                           if ( mail )
                           {
                               this._mail.next(mail);
                           }
                           else
                           {
                               this._mail.next(null);
                           }

                           return mail;
                       }),
                       switchMap((mail) => {

                           if ( !mail )
                           {
                               return throwError('Could not found mail with id of ' + id + '!');
                           }

                           return of(mail);
                       }),
                       take(1)
                   );
    }

    /**
     * Update mail
     *
     * @param id
     * @param mail
     */
    updateMail(id, mail): Observable<any>
    {
        return this._httpClient
                   .patch('api/apps/mailbox/mail', {
                       id,
                       mail
                   });
    }

    /**
     * Reset the current mail
     */
    resetMail(): Observable<any>
    {
        return of(true).pipe(
            tap(() => {
                this._mail.next(null);
            }),
            take(1)
        );
    }

    /**
     * Add label
     *
     * @param label
     */
    addLabel(label): Observable<any>
    {
        return this._httpClient
                   .put('api/apps/mailbox/label', {
                       label
                   })
                   .pipe(
                       map((response) => {
                           this.getLabels().subscribe();
                           return response;
                       })
                   );
    }

    /**
     * Update label
     *
     * @param id
     * @param label
     */
    updateLabel(id, label): Observable<any>
    {
        return this._httpClient
                   .patch('api/apps/mailbox/label', {
                       id,
                       label
                   })
                   .pipe(
                       map((response) => {
                           this.getLabels().subscribe();
                           return response;
                       })
                   );
    }

    /**
     * Delete label
     *
     * @param id
     */
    deleteLabel(id): Observable<any>
    {
        return this._httpClient
                   .delete('api/apps/mailbox/label', {
                       params: {
                           id
                       }
                   })
                   .pipe(
                       map((response) => {
                           this.getLabels().subscribe();
                           return response;
                       })
                   );
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, mapTo, switchMap, switchMapTo, take, tap } from 'rxjs/operators';

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

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this._filters = new BehaviorSubject(null);
        this._folders = new BehaviorSubject(null);
        this._labels = new BehaviorSubject(null);
        this._mails = new BehaviorSubject(null);
        this._mail = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for filters
     */
    get filters(): Observable<any>
    {
        return this._filters.asObservable();
    }

    /**
     * Getter for folders
     */
    get folders(): Observable<any>
    {
        return this._folders.asObservable();
    }

    /**
     * Getter for labels
     */
    get labels(): Observable<any>
    {
        return this._labels.asObservable();
    }

    /**
     * Getter for mails
     */
    get mails(): Observable<any>
    {
        return this._mails.asObservable();
    }

    /**
     * Getter for mail
     */
    get mail(): Observable<any>
    {
        return this._mail.asObservable();
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
     * Get mails by folder
     */
    getMailsByFolder(folder): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/mails', {params: {folder}})
                   .pipe(tap((response: any) => {
                       this._mails.next(response);
                   }));
    }

    /**
     * Get mails by label
     */
    getMailsByLabel(label): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/mails', {params: {label}})
                   .pipe(tap((response: any) => {
                       this._mails.next(response);
                   }));
    }

    /**
     * Get mails by filter
     */
    getMailsByFilter(filter): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/mails', {params: {filter}})
                   .pipe(tap((response: any) => {
                       this._mails.next(response);
                   }));
    }

    /**
     * Get mail by id
     */
    getMailById(id): Observable<any>
    {
        return this._mails
                   .pipe(
                       tap((mails) => {

                           // Filter mails
                           const mail = mails.filter(item => item.id === id);

                           if ( mail )
                           {
                               this._mail.next(mail[0]);
                           }
                           else
                           {
                               this._mail.next(null);
                           }
                       }),
                       take(1)
                   );
    }

    /**
     * Reset the current mail
     */
    resetMail(): Observable<any>
    {
        return of(true).pipe(tap(() => {
            this._mail.next(null);
        }));
    }

    /**
     * Update mail
     *
     * @param mail
     */
    updateMail(mail): Observable<any>
    {
        return this._httpClient
                   .patch('api/apps/mailbox/mail', {mail});
    }
}

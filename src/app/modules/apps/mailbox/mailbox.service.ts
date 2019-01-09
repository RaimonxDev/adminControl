import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MailboxService
{
    // Observables
    private _systemLabels: BehaviorSubject<any>;
    private _userLabels: BehaviorSubject<any>;
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
        this._systemLabels = new BehaviorSubject(null);
        this._userLabels = new BehaviorSubject(null);
        this._mails = new BehaviorSubject(null);
        this._mail = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for system labels
     */
    get systemLabels(): Observable<any>
    {
        return this._systemLabels.asObservable();
    }

    /**
     * Getter for user labels
     */
    get userLabels(): Observable<any>
    {
        return this._userLabels.asObservable();
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
     * Get system labels
     */
    getSystemLabels(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/labels', {params: {type: 'system'}})
                   .pipe(
                       map((response: any) => {

                           // Pass the response to the observable
                           this._systemLabels.next(response);
                       }));
    }

    /**
     * Get user labels
     */
    getUserLabels(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/labels', {params: {type: 'user'}})
                   .pipe(
                       map((response: any) => {

                           // Pass the response to the observable
                           this._userLabels.next(response);
                       }));
    }

    /**
     * Get mails by category
     */
    getMailsByCategory(category): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/mails', {params: {category}})
                   .pipe(
                       map((response: any) => {

                           // Pass the response to the observable
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
                   .pipe(
                       map((response: any) => {

                           // Pass the response to the observable
                           this._mails.next(response);
                       }));
    }

    /**
     * Get mail by id
     */
    getMailById(id): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mailbox/mail', {params: {id}})
                   .pipe(
                       map((response: any) => {

                           // Pass the response to the observable
                           this._mail.next(response);
                       }));
    }

    /**
     * Reset the current mail
     */
    resetMail(): Observable<any>
    {
        return of(true).pipe(map(() => {

            // Pass null to the observable
            this._mail.next(null);
        }));
    }
}

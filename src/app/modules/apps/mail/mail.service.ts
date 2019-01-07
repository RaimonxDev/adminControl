import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MailService implements Resolve<any>
{
    // Observables
    private _systemLabels: BehaviorSubject<any>;
    private _userLabels: BehaviorSubject<any>;

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

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get system labels
     */
    private _getSystemLabels(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mails/labels/system')
                   .pipe(
                       take(1),
                       map((response: any) => {

                           // Pass the response to the observable
                           this._systemLabels.next(response);
                       }));
    }

    /**
     * Get user labels
     */
    private _getUserLabels(): Observable<any>
    {
        return this._httpClient
                   .get('api/apps/mails/labels/user')
                   .pipe(
                       take(1),
                       map((response: any) => {

                           // Pass the response to the observable
                           this._userLabels.next(response);
                       }));
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
        // Fork join all the initial loaders
        return forkJoin(
            // Get labels
            this._getSystemLabels(),
            this._getUserLabels()
        ).pipe(
            map((data) => {

                // console.log(data[0]);
            })
        );
    }
}

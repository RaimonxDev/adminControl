import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MailService implements Resolve<any>
{
    // Data
    systemLabels: any[];

    // Observables
    private _onSystemLabelsUpdated: BehaviorSubject<any>;

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
        this._onSystemLabelsUpdated = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for onSystemLabelsUpdated
     */
    get onSystemLabelsUpdated(): Observable<any>
    {
        return this._onSystemLabelsUpdated.asObservable();
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
                   .pipe(map((response: any) => {

                       // Execute the observable
                       this._onSystemLabelsUpdated.next(response);

                       // Store the system labels
                       this.systemLabels = response.systemLabels;

                       // Return the response
                       return response;
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
        console.log('resolve');

        // Fork join all the initial loaders
        return forkJoin(
            // Get system labels
            this._getSystemLabels()
        ).pipe(
            map((data) => {

                console.log(data[0]);
            })
        );
    }
}

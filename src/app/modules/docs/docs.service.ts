import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DocsService implements Resolve<any>
{
    // Private
    private _onDocsUpdated: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the private defaults
        this._onDocsUpdated = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for onDocsUpdated
     */
    get onDocsUpdated(): Observable<any>
    {
        return this._onDocsUpdated.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolve
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        // Build the API url
        const apiUrl = 'api' + state.url;

        // Return an observable which executes the
        // onDocsUpdated on success

        return this._httpClient.get(apiUrl)
                   .pipe(map((response) => {
                       this._onDocsUpdated.next(response);
                   }));
    }
}

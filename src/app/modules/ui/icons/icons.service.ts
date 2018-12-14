import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class IconsService implements Resolve<any>
{
    // Private
    private _onIconsUpdated: BehaviorSubject<any>;

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
        this._onIconsUpdated = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for onIconsUpdated
     */
    get onIconsUpdated(): Observable<any>
    {
        return this._onIconsUpdated.asObservable();
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
        // onIconsUpdated on success
        return this._httpClient.get(apiUrl)
                   .pipe(map((response) => {
                       this._onIconsUpdated.next(response);
                   }));
    }
}

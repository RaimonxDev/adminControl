import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import axios, { AxiosInstance } from 'axios';

@Injectable({
    providedIn: 'root'
})
export class IconsService implements Resolve<any>
{
    // Private
    private _axios: AxiosInstance;
    private _onIconsUpdated: BehaviorSubject<any>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._axios = axios;
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
        return from(this._axios.get(apiUrl))
            .pipe(map((data) => {
                this._onIconsUpdated.next(data.data);
            }));
    }
}

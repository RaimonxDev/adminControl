import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    // Observables
    private _user: BehaviorSubject<any>;

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
        this._user = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Setter and getter for user
    set user(value: any)
    {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<any>
    {
        return this._user.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the user data
     *
     * @param user
     */
    update(user: any): Observable<any>
    {
        return this._httpClient.patch('api/user', {user}).pipe(
            tap(() => {

                // Execute the observable
                this._user.next(user);
            })
        );
    }
}

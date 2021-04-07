import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../user/user.model'
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService
{

    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);
    private _endPointUpdateUser = environment.endPointUpdateUser
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: User)
    {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<User>
    {
        return this._user.asObservable()
    }

    get SellerID$(): Observable<any>{
        return this._user.asObservable().pipe(map( ({_id}) => _id))
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the user
     *
     * @param user
     */
    update(body: User, id:string): Observable<any>
    {
        return this._httpClient.put<User>(`${this._endPointUpdateUser}/${id}`, {body}).pipe(
            map((response) => {
                // Execute the observable
                this._user.next(response);
            })
        );
    }
}

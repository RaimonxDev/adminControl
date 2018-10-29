import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class AuthService
{
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    abstract get user(): any;

    abstract get onLoggedIn(): Observable<any>;

    abstract get onLoggedOut(): Observable<any>;

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    abstract login(username: string, password: string): Observable<any>;

    abstract logout(): void;

    abstract isAuthenticated(): boolean;
}

import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class AsmMockApiRequestHandler
{
    // Private
    private _delay: number;
    private _executionCount: number;
    private _executionLimit: number;
    private _interceptedRequest: HttpRequest<any>;
    private _replyFunction: any;
    private _replyWithAuth: boolean;
    private _url: string;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._executionCount = 0;
        this._executionLimit = 0;
        this._replyWithAuth = true;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter and getter for delay
     *
     * @param value
     */
    set delay(value: number)
    {
        // Return, if the value is the same
        if ( this._delay === value )
        {
            return;
        }

        // Store the delay
        this._delay = value;
    }

    get delay(): number
    {
        return this._delay;
    }

    /**
     * Setter and getter for url
     *
     * @param value
     */
    set url(value: string)
    {
        // Return, if the value is the same
        if ( this._url === value )
        {
            return;
        }

        // Store the url
        this._url = value;
    }

    get url(): string
    {
        return this._url;
    }

    /**
     * Setter and getter for intercepted request
     *
     * @param value
     */
    set interceptedRequest(value: HttpRequest<any>)
    {
        // Return, if the value is the same
        if ( this._interceptedRequest === value )
        {
            return;
        }

        // Store the intercepted request
        this._interceptedRequest = value;
    }

    get interceptedRequest(): HttpRequest<any>
    {
        return this._interceptedRequest;
    }

    /**
     * Getter for reply function
     */
    get replyFunction(): Observable<any>
    {
        // Throw an error, if the execution limit has been reached
        if ( this._executionLimit > 0 && this._executionCount === this._executionLimit )
        {
            return throwError('Execution limit reached');
        }

        // Throw an error, if the intercepted request has not been set
        if ( !this.interceptedRequest )
        {
            return throwError('Intercepted request does not exist!');
        }

        // Increase the execution count
        this._executionCount++;

        // If authentication is required for the reply, but there is no Authorization header...
        if ( this._replyWithAuth && (!this.interceptedRequest.headers.get('Authorization') || !this.interceptedRequest.headers.get('Authorization').startsWith('Bearer ')) )
        {
            // Return an observable which returns a 401 response
            return of([401, {error: 'Unauthorized'}]);
        }

        // Return an observable which executes the reply function
        return of(this._replyFunction(this.interceptedRequest))
            .pipe(
                take(1)
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reply
     *
     * @param callback
     * @param withAuth
     */
    reply(callback: (req: HttpRequest<any>) => ([number, any | string]), withAuth = true): void
    {
        // Store the reply callback
        this._replyFunction = callback;

        // Store the withAuth preference
        this._replyWithAuth = withAuth;
    }

    /**
     * Reply once
     *
     * @param callback
     */
    replyOnce(callback: (req: HttpRequest<any>) => ([number, any | string])): void
    {
        // Set the execute limit to 1
        this._executionLimit = 1;

        // Call reply as normal
        this.reply(callback);
    }
}


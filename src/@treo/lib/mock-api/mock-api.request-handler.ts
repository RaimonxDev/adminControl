import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class TreoMockApiRequestHandler
{
    interceptedRequest!: HttpRequest<any>;

    // Private
    private _executionCount = 0;
    private _executionLimit = 0;
    private _replyCallback: ((req: HttpRequest<any>) => ([number, any | string] | Observable<any>)) | undefined = undefined;

    /**
     * Constructor
     *
     * @param url
     * @param delay
     */
    constructor(
        public url: string,
        public delay: number
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for reply callback
     */
    get replyCallback(): Observable<any>
    {
        // Throw an error, if the execution limit has been reached
        if ( this._executionLimit > 0 && this._executionCount === this._executionLimit )
        {
            return throwError('Execution limit reached');
        }

        // Throw an error, if the reply callback has not been set
        if ( !this._replyCallback )
        {
            return throwError('Reply callback does not exist!');
        }

        // Throw an error, if the intercepted request has not been set
        if ( !this.interceptedRequest )
        {
            return throwError('Intercepted request does not exist!');
        }

        // Increase the execution count
        this._executionCount++;

        // Execute the reply callback
        const replyCallbackResult = this._replyCallback(this.interceptedRequest);

        // If the result of the reply function is an observable...
        if ( replyCallbackResult instanceof Observable )
        {
            // Return the result as it is
            return replyCallbackResult.pipe(take(1));
        }

        // Otherwise, return the result as an observable
        return of(replyCallbackResult).pipe(take(1));
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reply
     *
     * @param callback
     */
    reply(callback: (req: HttpRequest<any>) => ([number, any | string] | Observable<any>)): void
    {
        // Store the reply callback
        this._replyCallback = callback;
    }

    /**
     * Reply once
     *
     * @param callback
     */
    replyOnce(callback: (req: HttpRequest<any>) => ([number, any | string] | Observable<any>)): void
    {
        // Set the execute limit to 1
        this._executionLimit = 1;

        // Call reply as normal
        this.reply(callback);
    }
}


import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AsmMockApiRequestHandler
{
    // Private
    private _delay: number;
    private _executionCount: number;
    private _executionLimit: number;
    private _interceptedRequest: HttpRequest<any>;
    private _replyFunction: any;
    private _url: string;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._executionCount = 0;
        this._executionLimit = 0;
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
     * Getter for execute reply function
     */
    get replyFunction(): Observable<any>
    {
        // Execute the reply function using the stored intercepted request

        // Return an observable which executes the reply function when subscribed
        return Observable.create((observer: Observer<any>) => {

            // Throw an error, if the execution limit has been reached
            if ( this._executionLimit > 0 && this._executionCount === this._executionLimit )
            {
                observer.error('Execution limit reached!');
                observer.complete();
            }

            // Throw an error, if the intercepted request has not been set
            if ( !this.interceptedRequest )
            {
                observer.error('Intercepted request does not exist!');
                observer.complete();
            }

            // Increase the execution count
            this._executionCount++;

            // Return the result of the reply function
            observer.next(this._replyFunction(this.interceptedRequest));

            // Inform the observer that the observable completed
            observer.complete();
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reply
     *
     * @param callback
     */
    reply(callback: (req: HttpRequest<any>) => ([number, any | string])): void
    {
        // Store the reply callback
        this._replyFunction = callback;
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


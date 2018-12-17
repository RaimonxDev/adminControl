import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class AsmMockApiRequestHandler
{
    // Private
    private _executed: number;
    private _executeLimit: number;
    private _replyFunction: any;
    private _url: string;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._executed = 0;
        this._executeLimit = 0;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

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
        this._executeLimit = 1;

        // Call reply as normal
        this.reply(callback);
    }

    /**
     * Execute the reply function
     *
     * @param req
     */
    executeReply(req: HttpRequest<any>): any
    {
        // Return, if the execution limit has been reached
        if ( this._executeLimit > 0 && this._executed === this._executeLimit )
        {
            return false;
        }

        // Increase the executed
        this._executed++;

        // Execute the reply function
        return this._replyFunction(req);
    }
}


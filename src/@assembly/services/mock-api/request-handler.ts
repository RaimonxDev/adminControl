import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class AsmMockApiRequestHandler
{
    replyCallback: any;

    // Private
    private _url: string;

    /**
     * Constructor
     */
    constructor()
    {
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
        this.replyCallback = callback;
    }
}


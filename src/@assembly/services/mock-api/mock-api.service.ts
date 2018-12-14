import { Injectable } from '@angular/core';

import { AsmMockApiRequestHandler } from '@assembly/services/mock-api/request-handler';

@Injectable({
    providedIn: 'root'
})
export class AsmMockApiService
{
    requestHandlers: any;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.requestHandlers = {
            delete: new Map<string, AsmMockApiRequestHandler>(),
            get   : new Map<string, AsmMockApiRequestHandler>(),
            patch : new Map<string, AsmMockApiRequestHandler>(),
            post  : new Map<string, AsmMockApiRequestHandler>(),
            put   : new Map<string, AsmMockApiRequestHandler>()
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register 'delete' request handler
     *
     * @param url
     */
    onDelete(url: string): AsmMockApiRequestHandler
    {
        return this._registerRequestHandler('delete', url);
    }

    /**
     * Register 'get' request handler
     *
     * @param url
     */
    onGet(url: string): AsmMockApiRequestHandler
    {
        return this._registerRequestHandler('get', url);
    }

    /**
     * Register 'patch' request handler
     *
     * @param url
     */
    onPatch(url: string): AsmMockApiRequestHandler
    {
        return this._registerRequestHandler('patch', url);
    }

    /**
     * Register 'post' request handler
     *
     * @param url
     */
    onPost(url: string): AsmMockApiRequestHandler
    {
        return this._registerRequestHandler('post', url);
    }

    /**
     * Register 'put' request handler
     *
     * @param url
     */
    onPut(url: string): AsmMockApiRequestHandler
    {
        return this._registerRequestHandler('put', url);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private _registerRequestHandler(requestType, url): AsmMockApiRequestHandler
    {
        // Create a new instance of AsmMockApiRequestHandler
        const asmMockHttp = new AsmMockApiRequestHandler;

        // Store the url
        asmMockHttp.url = url;

        // Store the request mock
        this.requestHandlers[requestType].set(url, asmMockHttp);

        // Return the instance
        return asmMockHttp;
    }
}

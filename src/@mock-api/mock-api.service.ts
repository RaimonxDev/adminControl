import { Injectable } from '@angular/core';
import { AsmMockApiRequestHandler } from '@mock-api/mock-api.request-handler';

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
     * @param delay
     */
    onDelete(url: string, delay: number = 0): AsmMockApiRequestHandler
    {
        return this._registerRequestHandler('delete', url, delay);
    }

    /**
     * Register 'get' request handler
     *
     * @param url
     * @param delay
     */
    onGet(url: string, delay: number = 0): AsmMockApiRequestHandler
    {
        return this._registerRequestHandler('get', url, delay);
    }

    /**
     * Register 'patch' request handler
     *
     * @param url
     * @param delay
     */
    onPatch(url: string, delay: number = 0): AsmMockApiRequestHandler
    {
        return this._registerRequestHandler('patch', url, delay);
    }

    /**
     * Register 'post' request handler
     *
     * @param url
     * @param delay
     */
    onPost(url: string, delay: number = 0): AsmMockApiRequestHandler
    {
        return this._registerRequestHandler('post', url, delay);
    }

    /**
     * Register 'put' request handler
     *
     * @param url
     * @param delay
     */
    onPut(url: string, delay: number = 0): AsmMockApiRequestHandler
    {
        return this._registerRequestHandler('put', url, delay);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register a request handler
     *
     * @param requestType
     * @param url
     * @param delay
     * @private
     */
    private _registerRequestHandler(requestType, url, delay): AsmMockApiRequestHandler
    {
        // Create a new instance of AsmMockApiRequestHandler
        const asmMockHttp = new AsmMockApiRequestHandler();

        // Store the url
        asmMockHttp.url = url;

        // Store the delay
        asmMockHttp.delay = delay;

        // Store the request mock
        this.requestHandlers[requestType].set(url, asmMockHttp);

        // Return the instance
        return asmMockHttp;
    }
}

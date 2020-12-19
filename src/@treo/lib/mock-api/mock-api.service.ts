import { Injectable } from '@angular/core';
import { compact, fromPairs } from 'lodash-es';
import { TreoMockApiRequestHandler } from '@treo/lib/mock-api/mock-api.request-handler';

@Injectable({
    providedIn: 'root'
})
export class TreoMockApiService
{
    // Private
    private _requestHandlers: { [key: string]: Map<string, TreoMockApiRequestHandler> } = {
        delete: new Map<string, TreoMockApiRequestHandler>(),
        get   : new Map<string, TreoMockApiRequestHandler>(),
        patch : new Map<string, TreoMockApiRequestHandler>(),
        post  : new Map<string, TreoMockApiRequestHandler>(),
        put   : new Map<string, TreoMockApiRequestHandler>()
    };

    /**
     * Constructor
     */
    constructor()
    {
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
    private _registerRequestHandler(requestType: 'get' | 'post' | 'put' | 'patch' | 'delete', url: string, delay?: number): TreoMockApiRequestHandler
    {
        // Create a new instance of TreoMockApiRequestHandler
        const treoMockHttp = new TreoMockApiRequestHandler(url, delay);

        // Store the request handler to access them from the interceptor
        this._requestHandlers[requestType].set(url, treoMockHttp);

        // Return the instance
        return treoMockHttp;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register a GET request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onGet(url: string, delay?: number): TreoMockApiRequestHandler
    {
        return this._registerRequestHandler('get', url, delay);
    }

    /**
     * Register a POST request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onPost(url: string, delay?: number): TreoMockApiRequestHandler
    {
        return this._registerRequestHandler('post', url, delay);
    }

    /**
     * Register a PUT request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onPut(url: string, delay?: number): TreoMockApiRequestHandler
    {
        return this._registerRequestHandler('put', url, delay);
    }

    /**
     * Register a PATCH request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onPatch(url: string, delay?: number): TreoMockApiRequestHandler
    {
        return this._registerRequestHandler('patch', url, delay);
    }

    /**
     * Register a DELETE request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    onDelete(url: string, delay?: number): TreoMockApiRequestHandler
    {
        return this._registerRequestHandler('delete', url, delay);
    }

    /**
     * Find the matching request handler from the service
     * with the given method and url
     *
     * @param method
     * @param url
     */
    findMatchingRequestHandler(method: string, url: string): { handler: TreoMockApiRequestHandler | undefined, params: { [key: string]: string } }
    {
        // Prepare the return object
        const matchingHandler: { handler: TreoMockApiRequestHandler | undefined, params: { [key: string]: string } } = {
            handler: undefined,
            params : {}
        };

        // Split the url
        const urlParts = url.split('/');

        // Get all related request handlers
        const handlers = this._requestHandlers[method.toLowerCase()];

        // Iterate through the handlers
        handlers.forEach((handler, handlerUrl) => {

            // Skip if there is already a matching handler
            if ( matchingHandler.handler )
            {
                return;
            }

            // Split the handler url
            const handlerUrlParts = handlerUrl.split('/');

            // Skip if the lengths of the urls we are comparing are not the same
            if ( urlParts.length !== handlerUrlParts.length )
            {
                return;
            }

            // Compare
            const matches = handlerUrlParts.every((handlerUrlPart, index) => handlerUrlPart === urlParts[index] || handlerUrlPart.startsWith(':'));

            // If there is a match...
            if ( matches )
            {
                // Assign the matching handler
                matchingHandler.handler = handler;

                // Extract and assign the parameters
                matchingHandler.params = fromPairs(compact(handlerUrlParts.map((handlerUrlPart, index) =>
                    handlerUrlPart.startsWith(':') ? [handlerUrlPart.substring(1), urlParts[index]] : undefined
                )));
            }
        });

        return matchingHandler;
    }
}

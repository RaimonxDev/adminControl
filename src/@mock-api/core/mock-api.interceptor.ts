import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { AsmMockApiRequestHandler } from '@mock-api/core/mock-api.request-handler';
import { AsmMockApiService } from '@mock-api/core/mock-api.service';

@Injectable({
    providedIn: 'root'
})
export class AsmMockApiInterceptor implements HttpInterceptor
{
    /**
     * Constructor
     *
     * @param {AsmMockApiService} _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
    }

    /**
     * Intercept
     *
     * @param request
     * @param next
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // Try to get the request handler
        const requestHandler: AsmMockApiRequestHandler = this._asmMockApiService.requestHandlers[request.method.toLowerCase()].get(request.url);

        // If the request handler exists..
        if ( requestHandler )
        {
            // Set the intercepted request on the requestHandler
            requestHandler.interceptedRequest = request;

            // Subscribe to the reply function observable
            return requestHandler.replyCallback.pipe(
                delay(requestHandler.delay),
                switchMap((response) => {

                    // Throw a not found response, if there is no response data
                    if ( !response )
                    {
                        response = new HttpErrorResponse({
                            error     : 'NOT FOUND',
                            status    : 404,
                            statusText: 'NOT FOUND'
                        });

                        return throwError(response);
                    }

                    // Parse the response data
                    const data = {
                        status: response[0],
                        body  : response[1]
                    };

                    // If the status is in between 200 and 300,
                    // it's a success response
                    if ( data.status >= 200 && data.status < 300 )
                    {
                        response = new HttpResponse({
                            body      : data.body,
                            status    : data.status,
                            statusText: 'OK'
                        });

                        return of(response);
                    }

                    // Error response
                    response = new HttpErrorResponse({
                        error     : data.body.error,
                        status    : data.status,
                        statusText: 'ERROR'
                    });

                    return throwError(response);

                }));
        }

        // Pass through if the request handler does not exists
        return next.handle(request);
    }
}

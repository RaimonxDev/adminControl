import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

import { AsmMockApiRequestHandler } from '@assembly/services/mock-api/request-handler';
import { AsmMockApiService } from '@assembly/services/mock-api/mock-api.service';

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

            // Subscribe to the execute reply function observable
            return requestHandler.replyFunction.pipe(
                delay(requestHandler.delay),
                switchMap((response) => {

                    // Throw a not found response, if there is no response data
                    if ( !response )
                    {
                        response = new HttpErrorResponse({
                            status: 404,
                            error : 'NOT FOUND'
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
                            status: data.status,
                            body  : data.body
                        });

                        return of(response);
                    }

                    // Error response
                    response = new HttpErrorResponse({
                        status: data.status,
                        error : data.body.error
                    });

                    return throwError(response);

                }));
        }

        // Pass through if the request handler does not exists
        return next.handle(request);
    }
}

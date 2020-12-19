import { Inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { MOCK_API_DEFAULT_DELAY } from '@treo/lib/mock-api/mock-api.constants';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';

@Injectable({
    providedIn: 'root'
})
export class TreoMockApiInterceptor implements HttpInterceptor
{
    /**
     * Constructor
     */
    constructor(
        @Inject(MOCK_API_DEFAULT_DELAY) private _defaultDelay: number,
        private _treoMockApiService: TreoMockApiService
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
        const requestHandler = this._treoMockApiService.findMatchingRequestHandler(request.method.toLowerCase(), request.url);

        // If the request handler exists..
        if ( requestHandler.handler )
        {
            // Set the intercepted request on the handler
            requestHandler.handler.interceptedRequest = request;

            // Set the route params on the handler
            requestHandler.handler.routeParams = requestHandler.params;

            // Subscribe to the reply function observable
            return requestHandler.handler.replyCallback.pipe(
                delay(requestHandler.handler.delay ?? this._defaultDelay),
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

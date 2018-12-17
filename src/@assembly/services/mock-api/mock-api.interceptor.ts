import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

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
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // Try to get the request handler
        const requestHandler = this._asmMockApiService.requestHandlers[req.method.toLowerCase()].get(req.url);

        // If the request handler exists..
        if ( requestHandler )
        {
            // Prepare the response
            let response;

            // Run the callback function to get the response data
            const responseData = requestHandler.executeReply(req);

            // Throw a not found response, if there is no response data
            if ( !responseData )
            {
                response = new HttpErrorResponse({
                    status: 404,
                    error : 'NOT FOUND'
                });

                return throwError(response);
            }

            // Parse the response data
            const data = {
                status: responseData[0],
                body  : responseData[1]
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
        }

        // Pass through if the request handler does not exists
        return next.handle(req);
    }
}

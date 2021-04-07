import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './Loader.service';
import { finalize, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService  implements HttpInterceptor{

  constructor(private _loaderService: LoaderService) { }

  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

    this._loaderService.stateLoading(true)

    return next.handle(req).pipe(
      finalize( () => this._loaderService.stateLoading( false ))
    )

  }

}

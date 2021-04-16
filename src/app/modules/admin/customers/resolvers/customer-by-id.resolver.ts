import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { User } from 'app/core/user/user.model';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomerService } from '../services/customer.service';


@Injectable({
  providedIn: 'root'
})
export class CustomerByIdResolver implements Resolve< User | null> {

  constructor(  private _customerService: CustomerService,
                private _router: Router){}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | null > {

    if(route.paramMap.get('id') === 'create') {
      return of(null)
    }
     else return this._customerService.getUsersById(route.paramMap.get('id'))
                   .pipe(
                       // Error here means the requested contact is not available
                       catchError((error) => {

                           // Log the error
                           console.error(error);

                           // Get the parent url
                           const parentUrl = state.url.split('/').slice(0, -1).join('/');

                           // Navigate to there
                           this._router.navigateByUrl(parentUrl);

                           // Throw an error
                           return throwError(error);
                       }),

                   );
  }
}

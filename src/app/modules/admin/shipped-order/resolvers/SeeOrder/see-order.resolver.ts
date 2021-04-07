import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ShippedService } from '../../services/shipped.service';

@Injectable({
  providedIn: 'root'
})
export class SeeOrderResolver implements Resolve<boolean> {

  constructor(private _shippedServices: ShippedService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}

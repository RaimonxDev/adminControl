import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ShippedService } from '../../services/shipped.service';
import { OrderResponse } from '../../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CountOrderResolver implements Resolve<OrderResponse[]> {

  constructor (private _shippeServices: ShippedService ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OrderResponse[]> {
    return this._shippeServices.getCountAllOrder()
  }
}

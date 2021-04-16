import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ShippedService } from '../../services/shipped.service';
import { OrderResponse } from '../../models/order.model';
import { UserOrder } from '../../../../../core/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class CountOrderResolver implements Resolve<UserOrder[]> {

  constructor (private _shippeServices: ShippedService ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserOrder[]> {
    return this._shippeServices.getCountAllOrders()
  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolver implements Resolve<Customer[]> {
  constructor(private _customerServices: CustomerService){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer[]> {
    return this._customerServices.getCustomers();
  }
}

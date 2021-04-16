import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../types';
import { User } from '../../../../core/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolver implements Resolve<User[]> {
  constructor(private _customerServices: CustomerService){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this._customerServices.getUsers();
  }
}

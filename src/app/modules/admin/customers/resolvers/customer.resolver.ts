import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { User } from '../../../../core/user/user.model';



@Injectable({
  providedIn: 'root'
})
export class CustomerResolver implements Resolve<User[] | null > {
  constructor(private _customerServices: CustomerService){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this._customerServices.getUsers()
  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { Region, Regions } from '../types';

@Injectable({
  providedIn: 'root'
})
export class RegionsResolver implements Resolve<Regions[]> {

  constructor(private _customerServices: CustomerService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Regions[]> {

    if(sessionStorage.getItem('regions')){
     const regionsCache: Region[] = JSON.parse(sessionStorage.getItem('regions'))
     this._customerServices.getRegionsSessionStorage(regionsCache)
    }
    return this._customerServices.getRegions()
  }
}

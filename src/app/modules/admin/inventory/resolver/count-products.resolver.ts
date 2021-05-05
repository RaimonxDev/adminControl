import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../../../../core/services/products/products.service';

@Injectable({
  providedIn: 'root',
})
export class CountProductsResolver implements Resolve<number> {
  constructor(private _productosServices: ProductsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<number> {
    return this._productosServices.getCountProducts();
  }
}

import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Marcas } from 'app/core/products/models/marcas.model';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../../../../core/products/products.service';

@Injectable({
  providedIn: 'root',
})
export class MarcasResolver implements Resolve<Marcas[]> {
  constructor(private _productosServices: ProductsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Marcas[]> {
    return this._productosServices.getAllMarcas();
  }
}

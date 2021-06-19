import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { ProductsService } from 'app/core/products/products.service';
import { Observable, of } from 'rxjs';
import { ListadoDeProductos } from '../models/listadoProductos';

@Injectable({
  providedIn: 'root',
})
export class InitialDataProductos implements Resolve<ListadoDeProductos[]> {
  constructor(private _productos: ProductsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ListadoDeProductos[]> {
    return this._productos.getProductos();
  }
}

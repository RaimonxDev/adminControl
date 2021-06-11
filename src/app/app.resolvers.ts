import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
  Route,
} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InitialData } from 'app/app.types';
import { ProductsService } from './core/products/products.service';
import { ListadoDeProductos } from './modules/admin/pedidos/models/listadoProductos';

@Injectable({
  providedIn: 'root',
})
export class InitialDataResolver implements Resolve<any> {
  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Use this resolver to resolve initial mock-api for the application
   *
   * @param route
   * @param state
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<InitialData> {
    // Fork join multiple API endpoint calls to wait all of them to finish
    return forkJoin([
      this._httpClient.get<any>('api/common/messages'),
      this._httpClient.get<any>('api/common/navigation'),
      this._httpClient.get<any>('api/common/notifications'),
      this._httpClient.get<any>('api/common/shortcuts'),
      this._httpClient.get<any>('api/common/user'),
    ]).pipe(
      map(([messages, navigation, notifications, shortcuts, user]) => ({
        messages,
        navigation: {
          compact: navigation.compact,
          default: navigation.default,
          futuristic: navigation.futuristic,
          horizontal: navigation.horizontal,
        },
        notifications,
        shortcuts,
        user,
      }))
    );
  }
}

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

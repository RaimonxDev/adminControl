import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, retry, switchMap, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { environment } from 'environments/environment';
import { ListadoDeProductos } from 'app/modules/admin/pedidos/models/listadoProductos';
import { filter } from 'lodash-es';
import {
  ErrorResponseHttp,
  HandleHttpResponseError,
} from '../../shared/utils/class/httpErrorHandler';
import { Productos } from 'app/core/products/models/productos.model';
import { Marcas } from './models/marcas.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // environments
  urlBackend = environment.url;
  //
  private _listadoProductosOrdenados: BehaviorSubject<ListadoDeProductos[]>;

  private _PaginationProducts: BehaviorSubject<Productos[]>;
  private _allBrands: BehaviorSubject<Marcas[]>;
  private _countProducts: BehaviorSubject<number>;

  // Getters and Setters
  get ListadoProductosOrdenados$() {
    return this._listadoProductosOrdenados.asObservable();
  }
  get allProductos$() {
    return this._PaginationProducts.asObservable();
  }
  get countProducts$() {
    return this._countProducts.asObservable();
  }

  get allBrands$() {
    return this._allBrands.asObservable();
  }

  constructor(
    private _http: HttpClient,
    private handleErrorHttp: ErrorResponseHttp
  ) {
    // Set Subjects
    this._listadoProductosOrdenados = new BehaviorSubject<ListadoDeProductos[]>(
      []
    );
    this._PaginationProducts = new BehaviorSubject<Productos[]>([]);
    this._countProducts = new BehaviorSubject<number>(0);
    this._allBrands = new BehaviorSubject<Marcas[]>([]);
  }
  // Proximamente DEPCREATED
  // Extrae todas las marcas y los agrupa segund la marca y el tipo de mascota
  private getMarcas(productos: Productos[]): Observable<ListadoDeProductos[]> {
    let arr = [];
    // extrae todas las marcas existentes
    productos.forEach((element) => {
      arr.push(element.marca);
    });
    let brandWithoutDuplicate = new Set(arr);
    return this.getProductoByMarca([...brandWithoutDuplicate], productos);
  }

  // Ordena los Productos por marca
  private getProductoByMarca(
    marcas: string[],
    productos: Productos[]
  ): Observable<ListadoDeProductos[]> {
    let ordenados: ListadoDeProductos[] = [];

    marcas.forEach((marca: string) => {
      // filtramos los productos por la marca que estamos iterando
      let items = filter(productos, { marca: marca });
      // dividimos los productos segun mascotas
      let productsForCats: Productos[] = filter(items, { mascota: 'gato' }),
        productsForDogs: Productos[] = filter(items, { mascota: 'perro' });

      //  devolvemos un array con la marca y sus items
      ordenados.push({
        marca: marca,
        productos: {
          perro: productsForDogs,
          gato: productsForCats,
        },
      });
    });

    return of(ordenados);
  }

  getProductos(): Observable<ListadoDeProductos[]> {
    return this._http
      .get<Productos[]>(`${this.urlBackend}/products`, {
        params: {
          _limit: '-1',
          _sort: 'marca:ASC',
        },
      })
      .pipe(
        switchMap((data) => this.getMarcas(data)),
        tap((listado) => this._listadoProductosOrdenados.next(listado)),
        retry(3),
        catchError((error) =>
          HandleHttpResponseError(error, 'No se puedieron cargar los productos')
        )
      );
  }
  // Obtiene las marcas de la bases de datos
  getAllMarcas() {
    return this._http.get<Marcas[]>(`${this.urlBackend}/marcas`).pipe(
      tap((marcas) => this._allBrands.next(marcas)),
      catchError((error) => this.handleErrorHttp.handleError(error, null, 2500))
    );
  }
  public refreshProducts() {
    return this.getAllMarcas();
  }
  // Utils para refrescar la data de brands al momento de hacer un update
  public refreshBrands() {
    return this.getAllMarcas();
  }

  getPaginationProducts(
    // marca: string,
    sort: string,
    page: number,
    pageSize: number
  ): Observable<Productos[]> {
    return this._http
      .get<Productos[]>(`${this.urlBackend}/products`, {
        params: {
          _start: `${page * pageSize}`,
          _limit: `${pageSize}`,
          _sort: `marca:${sort}`,
        },
      })
      .pipe(
        catchError((error) =>
          this.handleErrorHttp.handleError(error, null, 2500)
        )
      );
  }

  getCountProducts(): Observable<number> {
    return this._http
      .get<number>(`${this.urlBackend}/products/count`)
      .pipe(tap((cantidad) => this._countProducts.next(cantidad)));
  }

  checkCodeExist(uniqueCode: string): Observable<Productos[]> {
    // code_ui Siempre esta en mayusculas
    return this._http
      .get<Productos[]>(`${this.urlBackend}/products`, {
        params: {
          code_uid: `${uniqueCode.toUpperCase()}`,
        },
      })
      .pipe(
        catchError((error) =>
          this.handleErrorHttp.handleError(error, null, 2500)
        )
      );
  }

  checkBrandExist(nameBrand: string) {
    return this._http.get<Marcas[]>(`${this.urlBackend}/marcas`, {
      params: {
        nombre: `${nameBrand.toLowerCase()}`,
      },
    });
  }
}

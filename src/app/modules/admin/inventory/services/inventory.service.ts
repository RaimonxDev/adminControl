import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Productos } from '../../../../core/products/models/productos.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ErrorResponseHttp } from '../../../../shared/utils/class/httpErrorHandler';
import { Observable, of } from 'rxjs';
import { Marcas } from '../../../../core/products/models/marcas.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  backendUrl = environment.url;

  constructor(
    private _http: HttpClient,
    private handleErrorHttp: ErrorResponseHttp
  ) {}

  createProduct(product: Productos) {
    return this._http
      .post(`${this.backendUrl}/products`, product)
      .pipe(
        catchError((error) =>
          this.handleErrorHttp.handleError(error, null, 2500)
        )
      );
  }

  updateProduct(idProduct: string, fields: Productos) {
    return this._http
      .put(`${this.backendUrl}/products/${idProduct}`, fields)
      .pipe(
        catchError((error) =>
          this.handleErrorHttp.handleError(error, null, 2500)
        )
      );
  }
  deleteProducto(producto: Productos): Observable<Productos> {
    return this._http
      .delete<Productos>(`${this.backendUrl}/products/${producto.id}`)
      .pipe(
        catchError((error) =>
          this.handleErrorHttp.handleError(error, null, 2500)
        )
      );
  }

  createBrand(nombre: string): Observable<Marcas[]> {
    return this._http.post<Marcas[]>(`${this.backendUrl}/marcas`, { nombre });
  }

  updateBrand(idBrand: string, body: Marcas) {
    return this._http
      .put(`${this.backendUrl}/marcas/${idBrand}`, body)
      .pipe(
        catchError((error) =>
          this.handleErrorHttp.handleError(error, null, 2500)
        )
      );
  }
  deleteBrand(producto: Marcas) {
    return this._http
      .delete(`${this.backendUrl}/marcas/${producto.id}`)
      .pipe(
        catchError((error) =>
          this.handleErrorHttp.handleError(error, null, 2500)
        )
      );
  }
}

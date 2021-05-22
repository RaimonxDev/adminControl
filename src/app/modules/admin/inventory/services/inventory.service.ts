import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Productos } from '../../../../core/models/products.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ErrorResponseHttp } from '../../../../shared/utils/Validators/httpErrorHandler';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  backendUrl = environment.url;

  constructor(
    private _http: HttpClient,
    private handleErrorHttp: ErrorResponseHttp
  ) {}

  updateProduct(idProduct: string, fields: Productos) {
    return this._http
      .put(`${this.backendUrl}/products/${idProduct}`, fields)
      .pipe(
        catchError((error) =>
          this.handleErrorHttp.handleError(error, null, 2500)
        )
      );
  }
}

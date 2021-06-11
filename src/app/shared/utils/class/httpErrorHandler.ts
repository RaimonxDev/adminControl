import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { NotifierService } from '../../services/notifier.service';

export function HandleHttpResponseError(
  error: HttpErrorResponse,
  message?: string
) {
  switch (error.status) {
    case 400:
      return throwError(`Error en el formato intente nuevamente${error}`);
    case 401:
      return throwError(
        `Usted No tiene persimos para hacer esta operacion ${error.status}`
      );
    case 403:
      return throwError(`Acceso Denegado ${error.status}`);

    case 0:
      return throwError(message);

    default:
      break;
  }
}
@Injectable({
  providedIn: 'root',
})
export class ErrorResponseHttp {
  constructor(private notify: NotifierService) {}

  handleError(error: HttpErrorResponse, message?: string, duration?: number) {
    switch (error.status) {
      case 401:
        return throwError(
          `Usted No tiene persimos para hacer esta operacion ${error.status}`
        );
      case 403:
        this.notify.showNotification(
          'Error',
          'No tiene permisos',
          'error',
          null,
          duration
        );
        return throwError(`Acceso Denegado ${error.status}`);
      case 0:
        return throwError(message);

      default:
        break;
    }
  }
}

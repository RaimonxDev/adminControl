import { HttpErrorResponse} from '@angular/common/http'

import { throwError } from 'rxjs'

export function HandleHttpResponseError(error: HttpErrorResponse, message: string) {
  switch (error.status) {

    case 401:
     return throwError(`Usted No tiene persimos para hacer esta operacion ${error.status}`)

    case 403:
      return throwError(`Acceso Denegado ${error.status}`)

    case 0:
      return throwError(message)

    default:
      break;
  }

}

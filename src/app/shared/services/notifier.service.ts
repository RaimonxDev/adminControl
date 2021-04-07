import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../alert/alert.component';
import { TreoAlertType } from '../../../@treo/components/alert/alert.types';



@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar:MatSnackBar) {

  }
  showNotification (titleMessage: string, displayMessage: string , typeAlert: TreoAlertType, buttonText: string | null, ) {

    this.snackBar.openFromComponent(AlertComponent, {
      data: {
       message: displayMessage,
       buttonText,
       typeAlert,
       titleMessage
      },
      verticalPosition:'top',
      horizontalPosition: 'center',
      duration: 1500,
      panelClass:'transparent'
    })


  }
}

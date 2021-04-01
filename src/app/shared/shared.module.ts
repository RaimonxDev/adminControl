import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TreoAlertModule } from '@treo/components/alert';
import { AlertComponent } from './alert/alert.component';


@NgModule({
    declarations:[
        AlertComponent
    ],
    imports: [
        CommonModule,
        TreoAlertModule,
        MatSnackBarModule,
        MatProgressBarModule
    ],
    exports: [
        CommonModule,
        TreoAlertModule,
        MatSnackBarModule,
        MatProgressBarModule
    ]
})
export class SharedModule
{
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TreoAlertModule } from '@treo/components/alert';
import { AlertComponent } from './alert/alert.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations:[
        AlertComponent
    ],
    imports: [
        CommonModule,
        TreoAlertModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatDialogModule,
        MatMenuModule
    ],
    exports: [
        CommonModule,
        TreoAlertModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatDialogModule,
        MatMenuModule
    ]
})
export class SharedModule
{
}

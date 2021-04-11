import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Module
import { SharedModule } from '../../../shared/shared.module';
import { EssentialFormsModule } from '../../../shared/EssentialForm.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { TreoDrawerModule } from '@treo/components/drawer';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { CustomersComponent } from './customers.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import {EnableAccountDialogComponent} from './components/enable-account-dialog/enable-account-dialog-component';




@NgModule({
  declarations: [
    ListComponent,
    CustomersComponent,
    DetailsComponent,
    EnableAccountDialogComponent
    ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    EssentialFormsModule,
    HttpClientModule,
    TreoDrawerModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class CustomersModule { }

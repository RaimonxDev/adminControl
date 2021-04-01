import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreoDrawerModule } from '@treo/components/drawer';
import { ListComponent } from './list/list.component';
import { CustomersComponent } from './customers.component';
import { DetailsComponent } from './details/details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { TreoAutogrowModule } from '@treo/directives/autogrow';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@NgModule({
  declarations: [
    ListComponent, 
    CustomersComponent, 
    DetailsComponent, 
    AddCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    TreoDrawerModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    TreoAutogrowModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class CustomersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippedOrderRoutingModule } from './shipped-order-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ShippedComponent } from './shipped.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippedListComponent } from './components/shipped-list/shipped-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewOrderComponent } from './components/view-order/view-order.component';



@NgModule({
  declarations: [ShippedComponent, ShippedListComponent, ViewOrderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    ShippedOrderRoutingModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ShippedOrderModule { }

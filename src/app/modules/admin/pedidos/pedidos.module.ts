import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../../../shared/shared.module';
import { SidebarCustomerComponent } from './sidebar-customer/sidebar-customer.component';
import { EssentialFormsModule } from '../../../shared/EssentialForm.module';
import { SendOrderComponent } from './dialog/send-order/send-order.component';

@NgModule({
  declarations: [PedidosComponent, SidebarCustomerComponent, SendOrderComponent],
  imports: [
    CommonModule,
    EssentialFormsModule,
    SharedModule,
    PedidosRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatProgressBarModule,
  ]
})
export class PedidosModule { }

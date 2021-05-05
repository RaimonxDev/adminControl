import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../../../shared/shared.module';
import { SidebarCustomerComponent } from './sidebar-customer/sidebar-customer.component';
import { EssentialFormsModule } from '../../../shared/EssentialForm.module';
import { SendOrderComponent } from './dialog/send-order/send-order.component';
import { ListadoProductosModule } from '../../../shared/modules/listado-productos/listado-productos.module';

@NgModule({
  declarations: [PedidosComponent, SidebarCustomerComponent, SendOrderComponent],
  imports: [
    EssentialFormsModule,
    SharedModule,
    PedidosRoutingModule,
    MatExpansionModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatProgressBarModule,
    ListadoProductosModule
  ]
})
export class PedidosModule { }

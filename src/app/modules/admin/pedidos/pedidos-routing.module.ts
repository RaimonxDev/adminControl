import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos.component';
import { CustomerResolver } from '../customers/resolvers/customer.resolver';
import { InitialDataProductos } from './resolvers/products.resolver';

const routes: Routes = [
  {
    path: '',
    component: PedidosComponent,
    resolve: {
      customer: CustomerResolver,
      products: InitialDataProductos,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRoutingModule {}

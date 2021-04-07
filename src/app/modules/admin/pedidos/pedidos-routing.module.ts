import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos.component';
import { CustomerResolver } from '../customers/resolvers/customer.resolver';

const routes: Routes = [
  { path:'', component: PedidosComponent,
    resolve:{
      customer: CustomerResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }

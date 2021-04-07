import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippedListComponent } from './components/shipped-list/shipped-list.component';
import { CountOrderResolver } from './resolvers/count/count-order.resolver';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { SeeOrderResolver } from './resolvers/SeeOrder/see-order.resolver';


const routes: Routes = [
  { path: '', component: ShippedListComponent, resolve:{
    countOrder: CountOrderResolver
  },
  children:[
    { path: ':id', component: ViewOrderComponent, resolve: {
      see: SeeOrderResolver
    } }
  ]

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippedOrderRoutingModule { }

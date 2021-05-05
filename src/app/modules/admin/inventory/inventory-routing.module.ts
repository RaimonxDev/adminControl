import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { InventoryComponent } from './inventory.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CountProductsResolver } from './resolver/count-products.resolver';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    resolve: {
      countProducts: CountProductsResolver,
    },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'products' },
      { path: 'products', component: ProductsComponent },
      { path: 'create', component: CreateProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}

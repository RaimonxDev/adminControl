import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { InventoryComponent } from './inventory.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CountProductsResolver } from './resolver/count-products.resolver';
import { MarcasResolver } from './resolver/marcas.resolver';
import { CreateBrandComponent } from './components/create-brand/create-brand.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    resolve: {
      brandProducts: MarcasResolver,
    },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'products' },
      {
        path: 'products',
        component: ProductsComponent,
        resolve: {
          countProducts: CountProductsResolver,
        },
      },
      {
        path: 'new-product',
        component: CreateProductComponent,
        resolve: {
          brandProducts: MarcasResolver,
        },
      },
      {
        path: 'new-brand',
        component: CreateBrandComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}

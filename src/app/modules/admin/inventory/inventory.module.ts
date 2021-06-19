import { NgModule } from '@angular/core';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { InventoryComponent } from './inventory.component';
import { SharedModule } from '../../../shared/shared.module';
import { TreoCardModule } from '../../../../@treo/components/card/card.module';
import { EssentialFormsModule } from '../../../shared/EssentialForm.module';
import { SidebarInventoryComponent } from './components/sidebar-inventory/sidebar-inventory.component';
import { TreoNavigationModule } from '../../../../@treo/components/navigation/navigation.module';
import { ListadoProductosModule } from '../../../shared/modules/listado-productos/listado-productos.module';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { DetailsProductsComponent } from './components/details-products/details-products.component';
import { DialogComponentModule } from '../../../shared/modules/dialog/dialog.module';
import { CreateBrandComponent } from './components/create-brand/create-brand.component';
import { ListBrandsComponent } from './components/list-brands/list-brands.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    InventoryComponent,
    SidebarInventoryComponent,
    DetailsProductsComponent,
    CreateBrandComponent,
    ListBrandsComponent,
  ],
  imports: [
    InventoryRoutingModule,
    SharedModule,
    TreoCardModule,
    EssentialFormsModule,
    TreoNavigationModule,
    ListadoProductosModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatSortModule,
    DialogComponentModule,
    MatCheckboxModule,
    DialogComponentModule,
  ],
})
export class InventoryModule {}

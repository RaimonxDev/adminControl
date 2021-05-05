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



@NgModule({
  declarations: [ProductsComponent, CreateProductComponent, InventoryComponent, SidebarInventoryComponent],
  imports: [
    InventoryRoutingModule,
    SharedModule,
    TreoCardModule,
    EssentialFormsModule,
    TreoNavigationModule,
    ListadoProductosModule
  ]
})
export class InventoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { InventoryComponent } from './inventory.component';
import { SharedModule } from '../../../shared/shared.module';
import { TreoCardModule } from '../../../../@treo/components/card/card.module';
import { EssentialFormsModule } from '../../../shared/EssentialForm.module';
import { SidebarInventoryComponent } from './components/sidebar-inventory/sidebar-inventory.component';
import { TreoNavigationModule } from '../../../../@treo/components/navigation/navigation.module';



@NgModule({
  declarations: [ProductsComponent, CreateProductComponent, InventoryComponent, SidebarInventoryComponent],
  imports: [
    InventoryRoutingModule,
    SharedModule,
    TreoCardModule,
    EssentialFormsModule,
    TreoNavigationModule
  ]
})
export class InventoryModule { }

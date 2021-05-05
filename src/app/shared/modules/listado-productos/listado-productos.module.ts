import { NgModule } from '@angular/core';
import { ListadoProductosComponent } from './listado-productos.component';
import { EssentialFormsModule } from '../../EssentialForm.module';
import { SharedModule } from '../../shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    ListadoProductosComponent,
  ],
  imports: [
    EssentialFormsModule,
    SharedModule,
    MatExpansionModule,
    MatTabsModule,
  ],
  exports:[
    ListadoProductosComponent
  ]
})
export class ListadoProductosModule { }

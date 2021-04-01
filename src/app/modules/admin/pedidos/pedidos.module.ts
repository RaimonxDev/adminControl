import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

// Layout
import { EmptyLayoutModule } from 'app/layout/layouts/empty/empty.module';


import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ListPetsComponent } from './list-pets/list-pets.component';

@NgModule({
  declarations: [PedidosComponent, ListPetsComponent],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatProgressBarModule,
    EmptyLayoutModule
  ],
  providers:[
  
  ]
})
export class PedidosModule { }

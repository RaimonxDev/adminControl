import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from 'app/core/services/products/products.service';
import { ProductsAdded } from 'app/modules/admin/pedidos/models/addedProducts';
import { Observable } from 'rxjs';
import { ListadoDeProductos } from '../../../pedidos/models/listadoProductos';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productos$: Observable<ListadoDeProductos[]>
  displayedColumns = ['cantidad', 'producto', '_'];
  currentOrder = new MatTableDataSource<ProductsAdded>();
  constructor(private _productosServices: ProductsService) { }

  ngOnInit(): void {
    this.productos$ = this._productosServices.ListadoProductos$
  }

}

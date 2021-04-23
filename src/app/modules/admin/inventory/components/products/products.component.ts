import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private _productos: ProductsService) { }

  ngOnInit(): void {
    this._productos.ListadoProductos$.subscribe(console.log)
  }

}

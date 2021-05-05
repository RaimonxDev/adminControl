import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoDeProductos } from 'app/modules/admin/pedidos/models/listadoProductos';
import { Productos } from 'app/modules/admin/pedidos/models/productoResponse';
import { ProductsAdded } from 'app/modules/admin/pedidos/models/addedProducts';
import { NotifierService } from '../../services/notifier.service';
import { PedidoService } from 'app/modules/admin/pedidos/services/pedido.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss'],
})
export class ListadoProductosComponent implements OnInit {
  @Input() listaDeproductos: Observable<ListadoDeProductos[]>;
  @Input() editListado: boolean;
  @Output() saveItem = new EventEmitter<ProductsAdded>();

  constructor(
    private _notify: NotifierService // private _pedidoServices: PedidoService
  ) {}

  ngOnInit(): void {}
  saveProduct(cantidad: number | string, producto: Productos) {
    let addProducto: ProductsAdded = {
      code: producto.code,
      id: producto.id,
      cantidad: cantidad,
      producto: producto.producto,
      valorNeto: producto.valorNeto,
    };

    if (Number(cantidad) === 0 || cantidad === '') {
      this._notify.showNotification(
        'Campo Vacio',
        'Por favor añadir una cantidad',
        'warning',
        null
      );
      return;
    }
    this.saveItem.emit(addProducto);
    // this._pedidoServices.addProductToCurrentOrder(addProducto)
  }
}

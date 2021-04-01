import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { PedidoService } from './services/pedido.service';

// Inteface 
import { ListadoDeProductos } from './models/listadoProductos';
import { Productos } from './models/productoResponse';
import { alertMessages } from './models/alertMessage';
import { ProductsAdded } from './models/addedProducts';

import { MatTableDataSource } from '@angular/material/table';

import { NotifierService } from '../../../shared/services/notifier.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
  // animations: TreoAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PedidosComponent implements OnInit {

  private _unsubscribeAll: Subject<any>;
  productos$:Observable<ListadoDeProductos[]>
  pedidoActual$: ProductsAdded[]
  // pedidoActual$: Observable<ProductsAdded[]>
  openAlert = false
  displayedColumns = ['cantidad', 'producto', '_'];
  dataSource = new MatTableDataSource<ProductsAdded>();

  alertMessages:alertMessages = {
    showAlert: false,
    typeMessage: null
  }
  constructor(private _pedidoServices: PedidoService,  
              private alert : NotifierService
            ) { }

  ngOnInit(): void {
    this.productos$ = this._pedidoServices.getListadoDeProductos()
    
    this._pedidoServices.pedidoActual$.subscribe( pedido => {
      this.dataSource.data = pedido })
  }
  saveProduct (cantidad: number | string ,producto : Productos){
   
    let addProducto: ProductsAdded = {
       'code': producto.code,
       'id':producto.id ,
       'cantidad':cantidad,
       'producto': producto.producto,
       'valorNeto': producto.valorNeto,
    }

    if(Number(cantidad) ===  0 || cantidad === ''){
      this.alert.showNotification('Campo Vacio', 'Por favor añadir una cantidad','warning', null)
      return
    }

    this._pedidoServices.addProductToCurrentOrder(addProducto)



  } 
  
  eliminarProducto(prod: Productos){
   this._pedidoServices.eliminarProducto(prod)
  }

}

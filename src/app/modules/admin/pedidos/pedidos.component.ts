import { Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import { Observable, Subject } from 'rxjs';


// Services
import { PedidoService } from './services/pedido.service';

// Inteface
import { ListadoDeProductos } from './models/listadoProductos';
import { Productos } from './models/productoResponse';
import { ProductsAdded } from './models/addedProducts';
import { Customer, CustomersOrder } from '../customers/types';

import { MatTableDataSource } from '@angular/material/table';

// UI
import { NotifierService } from '../../../shared/services/notifier.service';
import { CreateOrder } from './models/POST_order.model';
import { MatDrawer } from '@angular/material/sidenav';
import { SendOrderComponent } from './dialog/send-order/send-order.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
  // animations: TreoAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PedidosComponent implements OnInit {

  private _unsubscribeAll: Subject<any>;

  // Data
  pedidoActual$: ProductsAdded[]

  // Observables
  productos$:Observable<ListadoDeProductos[]>
  currentOrder = new MatTableDataSource<ProductsAdded>();
  customerOrder : CustomersOrder

  // UTILS
  drawerMode: 'over' | 'side' = 'side';
  selectedCustomer: CreateOrder;
  // Helper para usar con i18nPlural
  hasSelectedCustomer:string = ''
  drawerOpened: boolean = false;
  openAlert = false
  displayedColumns = ['cantidad', 'producto', '_'];

  @ViewChild('matDrawer', { static: true })
  matDrawer: MatDrawer;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;


  constructor(
    private _pedidoServices: PedidoService,
    private alert : NotifierService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productos$ = this._pedidoServices.getListadoDeProductos()

    this._pedidoServices.pedidoActual$
    .subscribe( pedido => {
      this.currentOrder.data = pedido })
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
  selectCustomer( customer: CreateOrder ) {
    this.matDrawer.toggle()
    this.selectedCustomer = customer
    this.hasSelectedCustomer = customer.customer.nombre_comercial
  }
  eliminarProducto(prod: Productos){
   this._pedidoServices.eliminarProducto(prod)
  }

  openDialog(){
     const dialogRef = this.dialog.open(SendOrderComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe((result) => {
      if(result === false || undefined){
        this.menuTrigger.focus()
      }
      if( result ) {
        this.postPedido()
      }
    });

  }
  postPedido() {

    if(this.selectedCustomer === undefined){
      this.alert.showNotification('Sin cliente','Seleccion un cliente','warning',null)
      return
    }
    if(this.currentOrder.data.length === 0) {
      return this.alert.showNotification('Pedido Vacio','No ha agregado nada','warning',null)
    }

    if( this.selectedCustomer ) {
      // console.log(this.selectedCustomer);
      this._pedidoServices.createOrder(
        this.selectedCustomer.customer._id ,
        this.selectedCustomer.mensaje_adicional,
        this.selectedCustomer.transporte
      )
      .subscribe()
    }

  }

  // pipes i18nPlural

  customerMaps = {
    '=0': 'Seleccione un Cliente',
    'other': 'Cambiar Cliente',
  }


}

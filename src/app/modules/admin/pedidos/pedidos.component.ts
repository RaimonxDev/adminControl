import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// Services
import { PedidoService } from './services/pedido.service';

// Inteface
import { ListadoDeProductos } from './models/listadoProductos';
import { Productos } from './models/productoResponse';
import { ProductsAdded } from './models/addedProducts';

import { MatTableDataSource } from '@angular/material/table';

// UI
import { NotifierService } from '../../../shared/services/notifier.service';
import { CreateOrder } from './models/POST_order.model';
import { MatDrawer } from '@angular/material/sidenav';
import { SendOrderComponent } from './dialog/send-order/send-order.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { UserOrder } from 'app/core/user/user.model';
import { TreoMediaWatcherService } from '@treo/services/media-watcher';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
  // animations: TreoAnimations,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PedidosComponent implements OnInit, OnDestroy {

   private _unsubscribeAll: Subject<any> = new Subject<any>();

  // Data
  pedidoActual$: ProductsAdded[]

  // Observables
  productos$:Observable<ListadoDeProductos[]>
  currentOrder = new MatTableDataSource<ProductsAdded>();
  customerOrder : UserOrder

  // UTILS
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  selectedCustomer: CreateOrder;
  // Helper para usar con i18nPlural
  hasSelectedCustomer:string = ''
  displayedColumns = ['cantidad', 'producto', '_'];

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;


  constructor(
    private _pedidoServices: PedidoService,
    private alert : NotifierService,
    public dialog: MatDialog,
    private _treoMediaWatcherService: TreoMediaWatcherService) { }

  ngOnInit(): void {
    this.productos$ = this._pedidoServices.getListadoDeProductos()

    this.SideNavResponsive()

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

  eliminarProducto(prod: Productos){
   this._pedidoServices.eliminarProducto(prod)
  }

  selectCustomer( user: CreateOrder ) {
    this.drawerOpened = false;
    this.selectedCustomer = user
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
        this.sendNewOrder()
      }
    });

  }

  sendNewOrder() {
    if(this.selectedCustomer === undefined){
      this.alert.showNotification('Sin cliente','Seleccion un cliente','warning',null)
      return
    }
    if(this.currentOrder.data.length === 0) {
      return this.alert.showNotification('Pedido Vacio','No ha agregado nada','warning',null)
    }

    if( this.selectedCustomer ) {
      this._pedidoServices.createOrder(
        this.selectedCustomer.user._id ,
        this.selectedCustomer.mensaje_adicional,
        this.selectedCustomer.transporte
      )
      .subscribe()
    }

  }

  SideNavResponsive():void  {
    this._treoMediaWatcherService.onMediaChange$
        .pipe(
          takeUntil(this._unsubscribeAll))
        .subscribe(({matchingAliases}) => {

            // Set the drawerMode and drawerOpened
            if ( matchingAliases.includes('lg') )
            {
                this.drawerMode = 'side';
                this.drawerOpened = true;
            }
            else
            {
                this.drawerMode = 'over';
                this.drawerOpened = false;
            }
        });

  }

  // pipes i18nPlural

  customerMaps = {
    '=0': 'Seleccione un Cliente',
    'other': 'Cambiar Cliente',
  }

      /**
     * On destroy
     */
  ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


}

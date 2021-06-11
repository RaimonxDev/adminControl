import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Services
import { PedidoService } from './services/pedido.service';
import { ProductsService } from '../../../core/products/products.service';

// Inteface
import { ListadoDeProductos } from './models/listadoProductos';
// import { Productos } from './models/productoResponse';
import { ProductsAdded } from './models/addedProducts';

import { MatTableDataSource } from '@angular/material/table';

// UI
import { NotifierService } from '../../../shared/services/notifier.service';
import { CreateOrder } from './models/POST_order.model';
import { SendOrderComponent } from './dialog/send-order/send-order.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { UserOrder } from 'app/core/user/user.model';
import { TreoMediaWatcherService } from '@treo/services/media-watcher';
import { TreoAnimations } from '@treo/animations';
import { MatDrawer } from '@angular/material/sidenav';
import { Productos } from 'app/core/products/models/productos.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
  animations: TreoAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PedidosComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  // Data
  pedidoActual$: ProductsAdded[];

  // Observables
  productos$: Observable<ListadoDeProductos[]>;
  currentOrder = new MatTableDataSource<ProductsAdded>();
  customerOrder: UserOrder;

  // UTILS
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = false;
  selectedCustomer: CreateOrder;
  // Helper para usar con i18nPlural
  hasSelectedCustomer: string = '';
  displayedColumns = ['cantidad', 'producto', '_'];

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  @ViewChild('matDrawer') matDrawer: MatDrawer;

  constructor(
    private _pedidoServices: PedidoService,
    private _productosServices: ProductsService,
    private alert: NotifierService,
    public dialog: MatDialog,
    private _treoMediaWatcherService: TreoMediaWatcherService
  ) {}

  ngOnInit(): void {
    this.productos$ = this._productosServices.ListadoProductosOrdenados$;

    this._pedidoServices.pedidoActual$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((pedido) => {
        this.currentOrder.data = pedido;
      });

    this.SideNavResponsive();
  }

  saveProduct(item: ProductsAdded) {
    this._pedidoServices.addProductToCurrentOrder(item);
  }
  eliminarProducto(prod: Productos) {
    this._pedidoServices.eliminarProducto(prod);
  }

  selectCustomer(user: CreateOrder) {
    this.selectedCustomer = user;
    this.matDrawer.close();
    this.hasSelectedCustomer = user.user.username;
  }

  openDialog() {
    const dialogRef = this.dialog.open(SendOrderComponent, {
      restoreFocus: true,
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe((result) => {
      if (result === false || undefined) {
        this.menuTrigger.focus();
      }
      if (result) {
        this.sendNewOrder();
      }
    });
  }

  sendNewOrder() {
    if (this.selectedCustomer === undefined) {
      this.alert.showNotification(
        'Sin cliente',
        'Seleccion un cliente',
        'warning',
        null
      );
      return;
    }
    if (this.currentOrder.data.length === 0) {
      return this.alert.showNotification(
        'Pedido Vacio',
        'No ha agregado nada',
        'warning',
        null
      );
    }

    if (this.selectedCustomer) {
      this._pedidoServices
        .createOrder(
          this.selectedCustomer.user._id,
          this.selectedCustomer.mensaje_adicional,
          this.selectedCustomer.transporte
        )
        .subscribe();
    }
  }

  SideNavResponsive(): void {
    this._treoMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {
        // Set the drawerMode and drawerOpened
        if (matchingAliases.includes('lg')) {
          this.drawerMode = 'side';
          this.drawerOpened = false;
        } else {
          this.drawerMode = 'over';
          this.drawerOpened = false;
        }
      });
  }

  // pipes i18nPlural

  customerMaps = {
    '=0': 'Seleccione un Cliente',
    other: 'Cambiar Cliente',
  };

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}

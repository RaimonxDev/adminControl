import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject, Observable, merge, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { ShippedService } from '../../services/shipped.service';
import { startWith, switchMap, catchError, tap} from 'rxjs/operators';
import { Order, OrderResponse } from '../../models/order.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shipped-list',
  templateUrl: './shipped-list.component.html',
  styleUrls: ['./shipped-list.component.scss']
})
export class ShippedListComponent implements OnInit, AfterViewInit {
  ordersTableColumns: string[] = ['fecha', 'cliente', 'rut', 'monto','factura','pedido'];

  shippedDataBase: MatTableDataSource<OrderResponse> | null;

  drawerMode: 'side' | 'over';
  isRateLimitReached;
  filteredOrders: Observable<any>;
  resultsCount: number

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild( MatSort ) sort: MatSort;
  @ViewChild('matDrawer', { static: true })
  matDrawer: MatDrawer;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _router : Router,
    private _activatedRoute: ActivatedRoute,
    private _shippedServices: ShippedService,

  ) { }

  ngOnInit(): void {
    this._shippedServices.countOrder$.subscribe(count => this.resultsCount = count)
  }

  ngAfterViewInit(): void {
    // Paginacion http
    this.shippedDataBase = new MatTableDataSource<OrderResponse>();

    this.filteredOrders = merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap( () => {
          return this._shippedServices.getOrders(
            this.sort.active, this.paginator.pageIndex, this.sort.direction
            )
          }),
          catchError(()=> {
            console.log('error');
            return of([])
          })

          )

  }

  resetPaging(){
    this.paginator.pageIndex = 0;
  }

  onBackdropClicked(): void

  {
        // Get the current activated route
        let route = this._activatedRoute;
        while ( route.firstChild )
        {
            route = route.firstChild;
        }

        // Go to the parent route
        this._router.navigate(['../'], {relativeTo: route});
        this.matDrawer.toggle();
        // Mark for check
    }

  seeOrder(value:OrderResponse){
    console.log(value)
    this._shippedServices.viewOrderSelected( value.order )
    this._router.navigate(['./', value.id ],{ relativeTo: this._activatedRoute})


  }
}

import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject, Observable, merge, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { ShippedService } from '../../services/shipped.service';
import {
  startWith,
  switchMap,
  catchError,
  tap,
  takeUntil,
} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { UserOrder } from '../../../../../core/user/user.model';

@Component({
  selector: 'app-shipped-list',
  templateUrl: './shipped-list.component.html',
  styleUrls: ['./shipped-list.component.scss'],
})
export class ShippedListComponent implements OnInit, AfterViewInit, OnDestroy {
  ordersTableColumns: string[] = [
    'fecha',
    'cliente',
    'rut',
    'monto',
    'factura',
    'pedido',
  ];

  drawerMode: 'side' | 'over';
  // isRateLimitReached;
  filteredOrders: Observable<any>;
  resultsCount: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('matDrawer', { static: true })
  matDrawer: MatDrawer;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _shippedServices: ShippedService
  ) {}

  ngOnInit(): void {
    this._shippedServices.countOrder$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((count) => (this.resultsCount = count));
  }

  ngAfterViewInit(): void {
    // Paginacion http
    this.filteredOrders = merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return this._shippedServices.getOrders(
          this.sort.active,
          this.paginator.pageIndex,
          this.sort.direction
        );
      }),
      catchError(() => {
        console.log('error');
        return of([]);
      })
    );
  }

  resetPaging() {
    this.paginator.pageIndex = 0;
  }

  onBackdropClicked(): void {
    // Get the current activated route
    let route = this._activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    // Go to the parent route
    this._router.navigate(['../'], { relativeTo: route });
    this.matDrawer.toggle();
    // Mark for check
  }

  viewOrder(value: UserOrder) {
    this._shippedServices.viewOrderSelected(value);
    this._router.navigate(['./', value['id']], {
      relativeTo: this._activatedRoute,
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}

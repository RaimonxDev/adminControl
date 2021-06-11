import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Productos } from 'app/core/products/models/productos.model';
import { ProductsService } from 'app/core/products/products.service';
import { ProductsAdded } from 'app/modules/admin/pedidos/models/addedProducts';
import { merge, Observable, of, Subject } from 'rxjs';
import { catchError, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { updateMatriz } from '../../../../../shared/utils/functions/updateObjInArray';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  productos$: Productos[];
  displayedColumns = ['cantidad', 'producto', '_'];
  currentOrder = new MatTableDataSource<ProductsAdded>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  sourceProducts: MatTableDataSource<Productos> | Productos[] | null;
  filteredProductos: Observable<any[]>;

  productsCount: number = 0;

  productsTableColumns: string[] = [
    'marca',
    'producto',
    'price',
    'stock',
    'active',
    'details',
  ];
  searchInputControl: FormControl = new FormControl();
  selectedProduct: Productos | null = null;
  detailOpenState = false;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _productosServices: ProductsService) {}

  ngOnInit(): void {
    this._productosServices.countProducts$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => (this.productsCount = value));
  }

  ngAfterViewInit(): void {
    this.sourceProducts = new MatTableDataSource<Productos>();
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this._productosServices.getPaginationProducts(
            // this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize
          );
        }),
        catchError(() => {
          console.log('error');
          return of([]);
        })
      )
      .subscribe((data) => {
        console.log('data', data);
        this.sourceProducts = data as Productos[];
      });
  }

  detailsProduct(product: Productos) {
    // If the product is already selected...

    if (this.selectedProduct && this.selectedProduct.id === product.id) {
      // Close the details
      this.closeDetails();
      return;
    }
    this.selectedProduct = product;
  }

  updatedProduct(updatedProduct: Productos) {
    const updateList = updateMatriz(
      this.sourceProducts as Productos[],
      updatedProduct
    );

    this.sourceProducts = updateList;
  }

  closeDetails(): void {
    this.selectedProduct = null;
  }
  resetPaging() {
    this.paginator.pageIndex = 0;
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}

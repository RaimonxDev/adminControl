import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Productos } from 'app/core/models/products.model';
import { ProductsService } from 'app/core/services/products/products.service';
import { ProductsAdded } from 'app/modules/admin/pedidos/models/addedProducts';
import { merge, Observable, of, Subject } from 'rxjs';
import { catchError, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { InventoryService } from '../../services/inventory.service';

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

  products: MatTableDataSource<Productos> | null;
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

  constructor(
    private _productosServices: ProductsService,
    private _InventoryServices: InventoryService
  ) {}

  ngOnInit(): void {
    this._productosServices.countProducts$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => (this.productsCount = value));
  }

  ngAfterViewInit(): void {
    this.products = new MatTableDataSource<Productos>();

    this.filteredProductos = merge(
      this.sort.sortChange,
      this.paginator.page
    ).pipe(
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
    );
  }

  detailsProduct(product: Productos) {
    // If the product is already selected...
    if (this.selectedProduct && this.selectedProduct.id === product.id) {
      // Close the details
      this.closeDetails();
      return;
    }
    console.log('producto', product);
    // this._InventoryServices.selectProduct(product);
    this.selectedProduct = product;
    this._InventoryServices.selectProduct(this.selectedProduct);
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

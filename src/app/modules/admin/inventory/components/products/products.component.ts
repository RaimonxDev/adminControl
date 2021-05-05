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
import { catchError, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  productos$: Productos[];
  displayedColumns = ['cantidad', 'producto', '_'];
  currentOrder = new MatTableDataSource<ProductsAdded>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // products$: Productos[];
  products: MatTableDataSource<Productos> | null;
  filteredProductos: Observable<any[]>;
  resultsCount: number;

  flashMessage: 'success' | 'error' | null = null;

  productsCount: number = 0;

  productsTableColumns: string[] = [
    'marca',
    'nombre',
    'price',
    'stock',
    'active',
    'details',
  ];
  searchInputControl: FormControl = new FormControl();
  selectedProduct: Productos | null = null;
  selectedProductForm: FormGroup;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _productosServices: ProductsService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // init Formulario
    this.initForm();
    this._productosServices.countProducts$.subscribe((value) => {
      (this.resultsCount = value), console.log(value);
    });
    this._productosServices
      .getPaginationProducts('DIAMOND', 'ASC', 0, 2)
      .subscribe((productos) => {
        this.productos$ = productos;
      });
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
          this.sort.active,
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

  initForm() {
    this.selectedProductForm = this._formBuilder.group({
      _id: ['', [Validators.required]],
      published_at: ['', [Validators.required]],
      isNewProduct: ['', [Validators.required]],
      disponible: ['', [Validators.required]],
      precioSugerido: ['', [Validators.required]],
      valorNeto: ['', [Validators.required]],
      mascota: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      producto: ['', [Validators.required]],
      code_uid: ['', [Validators.required]],
      code: ['', [Validators.required]],
      createdAt: ['', [Validators.required]],
      updatedAt: ['', [Validators.required]],
    });
  }

  resetPaging() {
    this.paginator.pageIndex = 0;
  }

  deleteSelectedProduct() {
    return false;
  }
  updateSelectedProduct() {
    return false;
  }
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}

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
  FormBuilder,
  FormGroup,
  ValidatorFn,
  FormArray,
} from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Productos } from 'app/core/products/models/productos.model';
import { ProductsService } from 'app/core/products/products.service';
import { merge, of, Subject, BehaviorSubject } from 'rxjs';
import {
  catchError,
  startWith,
  switchMap,
  takeUntil,
  delay,
  map,
} from 'rxjs/operators';
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  _hasFilter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _filterByTheseBrands: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);

  productos$: Productos[];

  formFilterBrands: FormGroup;
  brandsFilter: string[] = [];

  sourceProducts: Productos[] | null;
  productsTableColumns: string[] = [
    'marca',
    'producto',
    'price',
    'stock',
    'active',
    'details',
  ];
  // Paginacion manual cuando se realiza un filtro
  productsCount: number = 0;

  searchInputControl: FormControl = new FormControl();
  selectedProduct: Productos | null = null;
  detailOpenState = false;

  // getters and setters
  get hasFilter() {
    return this._hasFilter.getValue();
  }
  get filterByTheseBrands() {
    return this._filterByTheseBrands.getValue();
  }

  get marcasControl() {
    return this.formFilterBrands.controls.marcas as FormArray;
  }

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _productosServices: ProductsService,
    private _fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this._productosServices.countProducts$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => (this.productsCount = value));

    // obtiene las marcas
    this._productosServices.allBrands$
      .pipe(
        map((marcas) => {
          return marcas.map((value) => value.nombre);
        })
      )
      .subscribe((brand) => {
        this.brandsFilter = brand;
        this.buildArrayBrands(brand);
      });
  }

  ngAfterViewInit() {
    // this.sourceProducts = new MatTableDataSource<Productos>();
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page, this._hasFilter)
      .pipe(
        startWith([]),
        switchMap(() => {
          if (this.hasFilter) {
            return this._productosServices.filterByBrandWithPagination(
              this.filterByTheseBrands,
              this.sort.direction,
              this.paginator.pageIndex,
              this.paginator.pageSize
            );
          }
          if (!this.hasFilter) {
            return this._productosServices.getPaginationProducts(
              this.sort.direction,
              this.paginator.pageIndex,
              this.paginator.pageSize
            );
          }
        }),
        takeUntil(this._unsubscribeAll),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe((data) => {
        this.sourceProducts = data as Productos[];
      });
  }

  initForm() {
    this.formFilterBrands = this._fb.group({
      marcas: new FormArray([], this.minSelectedCheckboxes(1)),
    });
  }

  buildArrayBrands(marcas: string[]) {
    marcas.forEach(() => this.marcasControl.push(new FormControl(false)));
  }

  filteringData() {
    let valuesSubmit = Object.assign({}, this.formFilterBrands.value);
    valuesSubmit = Object.assign(
      {},
      {
        brands: valuesSubmit.marcas
          .map((v: boolean, i: number) => (v ? this.brandsFilter[i] : null))
          .filter((value: boolean) => value !== null),
      }
    );
    this._filterByTheseBrands.next(valuesSubmit.brands as string[]);
    this._hasFilter.next(true);
  }

  // utils  funcion para solicitar un minimo de checbox
  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map((control) => control.value)
        .reduce((prev, next) => (next ? prev + next : prev), 0);

      return totalSelected >= min ? null : { required: true };
    };

    return validator;
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
    // actualizar lista cuando se crea un nuevo producto
    const updateList = updateMatriz(
      this.sourceProducts as Productos[],
      updatedProduct
    );

    this.sourceProducts = updateList;
  }

  deletedProduct(producto: Productos) {
    const listProductos = this.sourceProducts as Productos[];
    this.sourceProducts = listProductos.filter(
      (product) => product.id !== producto.id
    );
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
  // handlePaginator(event: PageEvent) {
  //   this.pageSize = event.pageSize;
  //   this.pageNumber = event.pageIndex + 1;
  // }
}

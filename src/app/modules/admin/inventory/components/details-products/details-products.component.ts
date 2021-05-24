import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinct, startWith, take } from 'rxjs/operators';
import { InventoryService } from '../../services/inventory.service';
import { Productos } from '../../../../../core/models/products.model';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss'],
})
export class DetailsProductsComponent implements OnInit {
  @Input() producto: Productos;
  @Output() updatedProduct: EventEmitter<boolean> = new EventEmitter<boolean>();

  selectedProductForm: FormGroup;
  mascotas: string[] = ['perro', 'gato'];
  marcas: string[] = ['bravo', 'diamond'];
  constructor(
    private _formBuilder: FormBuilder,
    private inventoryServices: InventoryService
  ) {}

  ngOnInit(): void {
    this.initForm();
    console.log('input producto:', this.producto);

    this.selectedProductForm.patchValue(this.producto);

    // this.inventoryServices.selectedProduct$
    //   .pipe(distinct())
    //   .subscribe((value) => console.log('details', value));
  }

  initForm(): void {
    this.selectedProductForm = this._formBuilder.group({
      id: ['', [Validators.required]],
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
      stock: ['', [Validators.required]],
      barcode: [''],
      IVA: ['', [Validators.required]],
    });
  }
  deleteSelectedProduct() {
    console.log('delete');
  }

  updateSelectedProduct() {
    const currentProduct: Productos = this.selectedProductForm.getRawValue();

    this.inventoryServices
      .updateProduct(currentProduct.id, currentProduct)
      .subscribe((resp) => {
        this.selectedProductForm.patchValue(resp);
        this.updatedProduct.emit(true);
      });
  }
}

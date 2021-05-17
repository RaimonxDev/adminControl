import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinct, startWith, take } from 'rxjs/operators';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss'],
})
export class DetailsProductsComponent implements OnInit {
  selectedProductForm: FormGroup;
  mascotas: string[] = ['perro', 'gato'];
  marcas: string[] = ['bravo', 'diamond'];
  constructor(
    private _formBuilder: FormBuilder,
    private inventoryServices: InventoryService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.inventoryServices.selectedProduct$
      .pipe(distinct())
      .subscribe((value) => console.log('details', value));
  }

  initForm(): void {
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
      stock: ['', [Validators.required]],
      codigoBarra: [''],
      IVA: ['', [Validators.required]],
    });
  }
  deleteSelectedProduct() {
    console.log('delete');
  }
  updateSelectedProduct() {
    console.log('update');
  }
}

import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { Productos } from '../../../../../core/products/models/productos.model';
import { MatDialog } from '@angular/material/dialog';
import { NotifierService } from '../../../../../shared/services/notifier.service';
import { CustomValidatorReactiveForm } from '../../../../../shared/utils/Validators/customValidatorReactiveForm';
import { ProductsService } from '../../../../../core/products/products.service';
import { Marcas } from '../../../../../core/products/models/marcas.model';
import { take } from 'rxjs/operators';
import {
  DialogComponent,
  DialogData,
} from '../../../../../shared/modules/dialog/components/dialog/dialog.component';

export type modeFormDetailsProducts = 'create' | 'edit';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss'],
})
export class DetailsProductsComponent implements OnInit {
  @Input() producto: Productos;
  @Input() modeForm: modeFormDetailsProducts;
  @Output() updatedProduct: EventEmitter<Productos> =
    new EventEmitter<Productos>();
  @ViewChild('fieldCode') fieldCode;

  get codeUidField() {
    return this.selectedProductForm.controls['code_uid'].value;
  }

  selectedProductForm: FormGroup;
  mascotas: string[] = ['perro', 'gato'];
  marcas: Marcas[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _inventoryServices: InventoryService,
    private _productServices: ProductsService,
    private _notify: NotifierService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
    this._productServices.allBrands$.pipe(take(1)).subscribe((marcas) => {
      this.marcas = marcas;
    });

    // Rellenar formulario con la data del producto seleccionado

    if (this.modeForm === 'edit') {
      this.selectedProductForm.patchValue(this.producto);
    }
    if (this.modeForm === 'create') {
      this.selectedProductForm.patchValue({});
    }

    // cambiar a upperCase el campo de code_uid
    this.selectedProductForm
      .get('code_uid')
      .valueChanges.subscribe((value: string) => {
        if (value === '' || value === null) {
          return;
        }
        const field = this.fieldCode.nativeElement;
        const orVal = field.getAttribute('data-model-value') || '';
        // modify new value to be equal to the original input (including last change)
        value = value.replace(orVal.toUpperCase(), orVal);
        // store original unmodified value (including last change)
        field.setAttribute('data-model-value', value);
        // set view value using DOM value property
        field.value = value.toUpperCase();
        // update module without emitting event and without changing view model
        this.selectedProductForm.get('code_uid').setValue(field.value, {
          emitEvent: false,
          emitModelToViewChange: false,
        });
      });
  }

  initForm(): void {
    this.selectedProductForm = this._formBuilder.group({
      id: [''],
      published_at: [''],
      isNewProduct: [false],
      disponible: [false],
      precioSugerido: ['', [Validators.required]],
      valorNeto: ['', [Validators.required]],
      mascota: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      producto: ['', [Validators.required]],
      code_uid: [
        '',
        [Validators.required],
        CustomValidatorReactiveForm.checkUniqueCode(this._productServices),
      ],
      createdAt: [''],
      updatedAt: [''],
      stock: ['', [Validators.required]],
      barcode: [''],
      IVA: [19, [Validators.required]],
    });
  }

  deleteSelectedProduct(idProduct: Productos) {
    this._inventoryServices.deleteProducto(idProduct).subscribe((resp) => {
      this._notify.showNotification(
        'Borrando con exito',
        `${resp.producto}`,
        'primary',
        null,
        3000
      );
      this._productServices.refreshProducts().subscribe();
    });
  }

  opendDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: '¿Seguro que desea eliminar este producto?',
        message: 'Esta accion no se puede revertir',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === false || undefined) {
        return;
      }
      if (result) {
        this.deleteSelectedProduct(this.producto);
      }
    });
  }

  createProduct() {
    this.selectedProductForm.disable();
    // console.log(this.selectedProductForm.getRawValue());
    // return;
    this._inventoryServices
      .createProduct(this.selectedProductForm.getRawValue())
      .subscribe((resp) => {
        this._notify.showNotification(
          'Creado',
          'Correctamente',
          'success',
          null,
          2500
        );
        console.log(resp);
        this.selectedProductForm.reset();
        this.selectedProductForm.clearValidators();
        this.selectedProductForm.enable();
      });
  }

  updateSelectedProduct() {
    const currentProduct: Productos = this.selectedProductForm.value;

    this._inventoryServices
      .updateProduct(currentProduct.id, currentProduct)
      .subscribe((resp: Productos) => {
        this.selectedProductForm.patchValue(resp);
        this.updatedProduct.emit(resp);
      });
  }
}

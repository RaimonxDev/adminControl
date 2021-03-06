import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { NotifierService } from '../../../../../shared/services/notifier.service';
import { CustomValidatorReactiveForm } from '../../../../../shared/utils/Validators/customValidatorReactiveForm';
import { ProductsService } from '../../../../../core/products/products.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Marcas } from 'app/core/products/models/marcas.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../shared/modules/dialog/components/dialog/dialog.component';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss'],
})
export class CreateBrandComponent implements OnInit {
  createNewProductForm: FormGroup;
  marcas$: Observable<Marcas[]>;
  _selectedMarca: BehaviorSubject<Marcas> = new BehaviorSubject(null);

  editBrand = false;

  get currentSelectedBrand() {
    return this._selectedMarca.getValue();
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _inventoryServices: InventoryService,
    private _notify: NotifierService,
    private _productServices: ProductsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createNewProductForm = this._formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
          asyncValidators: [
            CustomValidatorReactiveForm.checkBrandExist(this._productServices),
          ],
          updateOn: 'blur',
        },
      ],
    });

    this.marcas$ = this._productServices.allBrands$;

    this.createNewProductForm.controls['nombre'].valueChanges.subscribe(
      (value) => {
        // Si el usuario esta editando y borra todo el campo desactivamos el modo edit
        if (value === '' && this.editBrand) {
          // actualizamos el valor del Subject
          this._selectedMarca.next(null);
          this.editBrand = false;
          this.createNewProductForm.reset();
        }
      }
    );
  }

  createBrand() {
    const brand: string = this.createNewProductForm.controls['nombre'].value;
    this.createNewProductForm.disable();

    if (brand === '' || undefined) {
      this.createNewProductForm.invalid;
      return;
    }

    return this._inventoryServices
      .createBrand(brand.toLowerCase().trim())
      .subscribe(
        () => {
          this._notify.showNotification(
            'Se creo correctamente',
            '',
            'success',
            null,
            2500
          );
          this.createNewProductForm.enable();
          this.createNewProductForm.reset();
          this.marcas$ = this._productServices.refreshBrands();
        },
        (error) => {
          this.createNewProductForm.enable();
          this._notify.showNotification(
            'Hubo un error',
            'No se creo correctamente',
            'error',
            null
          );
        }
      );
  }

  editarMarca(marca: Marcas) {
    this.editBrand = true;
    if (this.editBrand) {
      // almacenamos el id que estamos editando
      this._selectedMarca.next(marca);
      this.createNewProductForm.reset();
      this.createNewProductForm.patchValue(marca);
    }
  }

  cancelEdition() {
    this.editBrand = false;
    this.createNewProductForm.clearValidators();
    this.createNewProductForm.reset();
  }

  updateBrand() {
    const newValue: Marcas = this.createNewProductForm.value;
    const currentMarca: Marcas = this._selectedMarca.getValue();
    this.createNewProductForm.disable();

    return this._inventoryServices
      .updateBrand(currentMarca.id, newValue)
      .subscribe((resp) => {
        this._notify.showNotification(
          'Actualizado con exito',
          `${currentMarca.nombre}`,
          'success',
          null,
          3000
        );
        this.createNewProductForm.reset();
        this.createNewProductForm.clearValidators();
        this.editBrand = false;
        this.createNewProductForm.enable();
        this.marcas$ = this._productServices.refreshBrands();
      });
  }

  deleteBrand(brand: Marcas) {
    this._inventoryServices.deleteBrand(brand).subscribe(() => {
      this._notify.showNotification('Eliminado', '', 'info', null, 3000);
      this.editBrand = false;
      this.createNewProductForm.reset();
      this.marcas$ = this._productServices.refreshBrands();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Seguro que desea eliminar esta marca',
        message: 'Tenga en cuenta que esta accion es irreversible',
        buttonAccept: 'Eliminar Marca',
        buttonDecline: 'Cancelar operacion',
      },
      restoreFocus: true,
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe((result) => {
      if (result === false || undefined) {
        return;
      }
      if (result) {
        this.deleteBrand(this.currentSelectedBrand);
      }
    });
  }
}

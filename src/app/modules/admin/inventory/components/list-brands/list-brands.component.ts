import { Component, OnInit } from '@angular/core';
import { Marcas } from 'app/core/products/models/marcas.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-brands',
  templateUrl: './list-brands.component.html',
  styleUrls: ['./list-brands.component.scss'],
})
export class ListBrandsComponent implements OnInit {
  editBrand = false;
  marcas$: Observable<Marcas[]>;
  constructor() {}

  ngOnInit(): void {}
  editarMarca(marca: Marcas) {
    this.editBrand = true;
    // this.createNewProductForm.clearValidators();
    // this.createNewProductForm.patchValue(marca);
  }

  cancelEdition() {
    console.log('cancel');
    // this.editBrand = false;
    // this.createNewProductForm.clearValidators();
    // this.createNewProductForm.patchValue({});
  }
}

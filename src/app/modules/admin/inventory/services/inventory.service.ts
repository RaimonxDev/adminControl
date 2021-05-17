import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { distinct } from 'rxjs/operators';
import { Productos } from '../../../../core/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private _selectedProducts: BehaviorSubject<Productos> =
    new BehaviorSubject<Productos>(null);

  private set selectProduct$(producto: Productos) {
    this._selectedProducts.next(producto);
  }

  get selectedProduct$(): Observable<Productos> {
    return this._selectedProducts.asObservable();
  }

  constructor() {}

  selectProduct(producto: Productos) {
    this.selectProduct$ = producto;
  }
}

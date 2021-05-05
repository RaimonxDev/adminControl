import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import {  Observable, BehaviorSubject, throwError } from 'rxjs';
import { findIndex, remove } from 'lodash-es';
import { Productos } from '../models/productoResponse';

import { ProductsAdded } from '../models/addedProducts';
import { NotifierService } from 'app/shared/services/notifier.service';
import { CreateOrder } from '../models/POST_order.model';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private _pedidoActual: BehaviorSubject<ProductsAdded[]> = new BehaviorSubject<ProductsAdded[]>(null)

  // environment
  endPointCreateOrder: string = environment.endPointCreateOrder
  urlBackend = environment.url

  // Getter and Setter
  get pedidoActual$ (){
   return  this._pedidoActual.asObservable();
  }

  private get currentOrderValue () {
    return this._pedidoActual.getValue()
  }

  private set updatePedido(producto: ProductsAdded[]){
    this._pedidoActual.next(producto)
  }

  // constructor
  constructor(
    private _http : HttpClient,
    private _notify : NotifierService ) {
    // Verifica si hay algo en el local storage para actualizar
    this.getLocalOrder();
   }

  // Methods Private
  private getLocalOrder() {

    if(localStorage.getItem('order')){
      let pedido: ProductsAdded [] = JSON.parse(localStorage.getItem('order'))
      this.updatePedido = pedido
    } else this.updatePedido = []
  }

  private saveLocalStorage ( orderList: ProductsAdded[] ) {
    localStorage.setItem('order', JSON.stringify(orderList));
  }

  isEmpty( pedido: ProductsAdded[] ): Promise<boolean> {
    return new Promise ((resolve, reject) => {
      if(pedido.length === 0) {
        resolve(true)
      }
      return reject(false)
    })

  }
  // Methods Public

  // Peticiones HTTP
  createOrder(_idUser: string, mensajeAdicional: string, transporte:string): Observable<CreateOrder> {

    const body = {
      'order': this._pedidoActual.getValue(),
      'user': {
        '_id': _idUser
      },
      'mensaje_adicional': mensajeAdicional,
      'transporte': transporte
    }
    return this._http.post<CreateOrder>(`${this.endPointCreateOrder}`,body )
    .pipe(
      tap( _ => {
        this._pedidoActual.next([])
        localStorage.removeItem('order')
        this._notify.showNotification('Enviado', 'Se envio correctamente','success', null)
      }),
      catchError( _ => throwError(this._notify.showNotification('Error','No se pudo enviar el pedido','error', null)))
    )
  }

  // funcions Internal
  public async addProductToCurrentOrder ( currentProducto: ProductsAdded ) {

    let currentOrder: ProductsAdded[] = this.currentOrderValue

    try {
      await this.isEmpty(this.currentOrderValue)
      currentOrder.push(currentProducto)

      this.updatePedido = currentOrder
      this.saveLocalStorage(currentOrder)
      this._notify.showNotification('Añadido', '','success', null)

    } catch (error) {
      let buscarProductoById = findIndex(currentOrder, {'code': currentProducto.code})

      if( buscarProductoById === -1 ){
        // Obtenemos el valor del observable, para añadir y no sobrescribir el array
        currentOrder.push(currentProducto)
        this.updatePedido = currentOrder
        this.saveLocalStorage(currentOrder)
            this._notify.showNotification('Añadido', '','success', null)
       }
         // si ya se encuentra emitimos una alerta
        else this._notify.showNotification('Este producto esta agregado', 'Elimenelo para volver agregar', 'warning', null)
    }
  }

  public eliminarProducto(item: Productos){
    let arr = this._pedidoActual.getValue()
    remove(arr, ['id',item.id])
    this.updatePedido = arr
    this.saveLocalStorage(arr)
       this._notify.showNotification('Se ha eliminado', '','error', null)

  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap, tap} from 'rxjs/operators';
import { of, Observable, BehaviorSubject, throwError } from 'rxjs';
import { filter, findIndex, remove } from 'lodash-es';
import { Productos } from '../models/productoResponse';
import { ListadoDeProductos } from '../models/listadoProductos';
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
    private alert : NotifierService ) {
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

  private getMarcas( productos:Productos[] ): Observable<ListadoDeProductos[]> {
    let arr = [];
      // recorrer todo el array y extraer todas las marcas existentes
      productos.forEach(element => {
        arr.push(element.marca)
      });
    let withoutDuplicate = new Set(arr)
    return this.getProductoByMarcaRxjs([...withoutDuplicate]  ,productos)
  }


  private getProductoByMarcaRxjs (marcas:string[], productos: Productos[] ): Observable<ListadoDeProductos[]> {

    let ordenados: ListadoDeProductos[] = []

    marcas.forEach((marca: string ) => {
    // filtramos los productos por la marca que estamos iterando
      let items = filter( productos,{'marca': marca})
    // dividimos los productos segun mascotas
      let productsForCats: Productos[] = filter(items,{'mascota':'gato'}),
          productsForDogs: Productos[] = filter(items,{'mascota':'perro'})

      //  devolvemos un array con la marca y sus items
       ordenados.push( {
        "marca": marca,
        "productos": {
          'perro': productsForDogs,
          'gato': productsForCats}
        })
      })

      return of(ordenados)
  }

  private getProductos() {
    return this._http.get<Productos[]>('http://localhost:1337/products',
    {
      params:{
        '_limit':'-1'
      }
    }).pipe(
      catchError(error => of('No se pudo obtener los productos ', error)),
    )
  }
  public getListadoDeProductos () {
    return this.getProductos().pipe(
      switchMap(data => this.getMarcas(data)),
    )
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
  createOrder(_idCustomer: string, mensajeAdicional: string, transporte:string): Observable<CreateOrder> {

    const body = {
      'order': this._pedidoActual.getValue(),
      'customer': {
        '_id': _idCustomer
      },
      'mensaje_adicional': mensajeAdicional,
      'transporte': transporte
    }
    return this._http.post<CreateOrder>(`${this.endPointCreateOrder}`,body )
    .pipe(
      tap( _ => {
        this._pedidoActual.next([])
        localStorage.removeItem('order')
        this.alert.showNotification('Enviado', 'Se envio correctamente','success', null)
      }),
      catchError( error => throwError(this.alert.showNotification('Error','No se pudo enviar el pedido','error', null)))
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

    } catch (error) {
      let buscarProductoById = findIndex(currentOrder, {'code': currentProducto.code})

      if( buscarProductoById === -1 ){
        // Obtenemos el valor del observable, para añadir y no sobrescribir el array
        currentOrder.push(currentProducto)
        this.updatePedido = currentOrder
        this.saveLocalStorage(currentOrder)
            this.alert.showNotification('Añadido', '','success', null)
       }
         // si ya se encuentra emitimos una alerta
        else this.alert.showNotification('Este producto esta agregado', 'Elimenelo para volver agregar', 'warning', null)
    }
  }

  public eliminarProducto(item: Productos){
    let arr = this._pedidoActual.getValue()
    remove(arr, ['id',item.id])
    this.updatePedido = arr
    this.saveLocalStorage(arr)
       this.alert.showNotification('Se ha eliminado', '','error', null)

  }


}

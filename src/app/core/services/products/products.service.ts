import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from 'app/modules/admin/pedidos/models/productoResponse';
import { catchError, retry, switchMap, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { environment } from 'environments/environment';
import { ListadoDeProductos } from 'app/modules/admin/pedidos/models/listadoProductos';
import { filter } from 'lodash-es';
import { HandleHttpResponseError } from '../../../shared/utils/Validators/httpErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // environments
  urlBackend = environment.url
  //
  private _listadoProductos: BehaviorSubject<ListadoDeProductos[]>

  // Getters and Setters
  get ListadoProductos$ (){
    return this._listadoProductos.asObservable()
  }

  constructor(
    private _http: HttpClient )
  {
    // Set Subjects
    this._listadoProductos = new BehaviorSubject<ListadoDeProductos[]>([])
  }


  // Extrae todas las marcas y los agrupa segund la marca y el tipo de mascota
  private getMarcas( productos:Productos[] ): Observable<ListadoDeProductos[]> {
    let arr = [];
      // extrae todas las marcas existentes
      productos.forEach(element => {
        arr.push(element.marca)
      });
    let withoutDuplicate = new Set(arr)
    return this.getProductoByMarca([...withoutDuplicate]  ,productos)
  }

  // Ordena los Productos por marca
  private getProductoByMarca (marcas:string[], productos: Productos[] ): Observable<ListadoDeProductos[]> {

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

  getProductos(): Observable<ListadoDeProductos[]> {
    return this._http.get<Productos[]>(`${this.urlBackend}/products`,
    {
      params:{
        '_limit':'-1'
      }
    }).pipe(
      switchMap(data => this.getMarcas(data)),
      tap( listado => this._listadoProductos.next(listado)),
      retry(3),
      catchError(error => HandleHttpResponseError(error,'No se puedieron cargar los productos')),
    )
  }

}

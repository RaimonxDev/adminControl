import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order, OrderResponse } from '../models/order.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from 'app/core/user/user.service';


@Injectable({
  providedIn: 'root'
})
export class ShippedService {

  protected _currentSellerId : string

  private _countOrder : BehaviorSubject<number>
  private _orders : BehaviorSubject<OrderResponse[]>
  private _orderSelected: BehaviorSubject<Order[]>
  get countOrder$ () {
    return this._countOrder.asObservable()
  }
  get Orders$ () {
    return this._orders.asObservable()
  }
  get selectedOrder$ () {
    return this._orderSelected.asObservable()
  }


  constructor(
    private _http: HttpClient,
    private _user: UserService) {

      this._countOrder = new BehaviorSubject<number>(0)
    this._orders = new BehaviorSubject<OrderResponse[]>(null)
    this._orderSelected = new BehaviorSubject<Order[]>([])

    this._user.SellerID$.subscribe(user => this._currentSellerId = user)
  }

  // Parametros por default 'createAt, page 0, order 'desc'
  getOrders(createdAt: string = 'createAt', page: number = 0, order: string = 'desc', pageSize:number = 4 ): Observable<OrderResponse[]> {
    // example strapi
    // http://localhost:1337/orders?_start=0&_limit=2&_sort=createdAt:DESC
    return this._http.get<OrderResponse[]>(`http://localhost:1337/orders`,{
      params :{
        'customer.seller': `${this._currentSellerId}`,
        '_start': `${(page * pageSize)}`,
        '_limit': `${pageSize}`,
        '_sort' : `${createdAt}:${order}`
      }
    } )
      .pipe(tap( orders => this._orders.next(orders)))
  }

  getCountAllOrder(): Observable<OrderResponse[]> {
    return this._http.get<OrderResponse[]>(`http://localhost:1337/orders`,{
      params:{
        'customer.seller': `${this._currentSellerId}`
      }
    }).pipe(
      tap( count => this._countOrder.next(count.length))
    )
  }

  viewOrderSelected(data : Order[]): void {
    this._orderSelected.next(data)
  }

}

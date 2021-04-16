import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from 'app/core/user/user.service';
import { environment } from '../../../../../environments/environment';
import { UserOrder, OrderList } from '../../../../core/user/user.model';



@Injectable({
  providedIn: 'root'
})
export class ShippedService {

  protected _currentSellerId : string

  private _countOrder : BehaviorSubject<number>
  private _orders : BehaviorSubject<UserOrder[]>
  private _orderSelected: BehaviorSubject<UserOrder[]>
  private urlBackend = environment.url

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
    this._orders = new BehaviorSubject<UserOrder[]>(null)
    this._orderSelected = new BehaviorSubject<UserOrder[]>([])

    this._user.SellerID$.subscribe(user => this._currentSellerId = user)
  }

  // Parametros por default 'createAt, page 0, order 'desc'
  getOrders(createdAt: string = 'createAt', page: number = 0, order: string = 'desc', pageSize:number = 4 ): Observable<UserOrder[]> {
    // example endpoint
    // http://localhost:1337/orders?_start=0&_limit=6&_sort=createdAt:desc&user.seller=607343f3dd0a0b21c49500d9
    return this._http.get<UserOrder[]>(`${this.urlBackend}/orders`,{
      params :{
        'user.seller': `${this._currentSellerId}`,
        '_start': `${(page * pageSize)}`,
        '_limit': `${pageSize}`,
        '_sort' : `${createdAt}:${order}`
      }
    } )
      .pipe(tap( orders => this._orders.next(orders)))
  }
  //count all orders
  getCountAllOrders(): Observable<UserOrder[]> {
    return this._http.get<UserOrder[]>(`${this.urlBackend}/orders`,{
      params:{
        'user.seller': `${this._currentSellerId}`
      }
    }).pipe(
      tap( count => this._countOrder.next(count.length))
    )
  }

  viewOrderSelected(data : UserOrder[]): void {
    this._orderSelected.next(data)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Customer, Regions, Region } from '../types';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { UserService } from '../../../../core/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // Variables
  endPointCustomers = environment.endPointCustomers;
  endPointRegions = environment.endPointRegions;

  // Source

  protected _currentSellerId : string
  private _customers: BehaviorSubject<Customer[]>
  private _customer : BehaviorSubject<Customer | null >
  private _region   : BehaviorSubject<Region[]>
  // Indicador si el usuario ha sido creado
  public _wasCustomerCreated: BehaviorSubject<boolean>

  constructor(
    private _http: HttpClient,
    private _user: UserService
    ) {
  // set Behavior
    this._customers = new BehaviorSubject([])
    this._customer = new BehaviorSubject(null)
    this._region =  new BehaviorSubject(null)
    this._wasCustomerCreated = new BehaviorSubject(false);

    this._user.SellerID$.subscribe(user => this._currentSellerId = user)
  }


  // Getter and Setter
  get customers$(): Observable<Customer[]>{
    return this._customers.asObservable()
  }

  get customer$(): Observable<Customer>{
    return this._customer.asObservable()
  }

  get regions$(): Observable<Region[]> {
    return this._region.asObservable()
  }

  get wasCustomerCreated$ () {
    return this._wasCustomerCreated.asObservable()
  }

  // Public Methods
// 'http://localhost:1337/customers?seller._id=604387701df6a20ef4a53bda
  // PETICIONES GET
  getCustomers(): Observable<Customer[]>{
    return this._http.get<Customer[]>(this.endPointCustomers,{
      params:{
        'seller._id':`${this._currentSellerId}`
      }
    })
    .pipe(
      tap((customers: Customer[]) => this._customers.next(customers))
      )
  }

  getCustomerById(id: string): Observable<Customer>{
    return this._customers.pipe(
      take(1),
      map((customers: Customer[])=> {
        const customer = customers.find(item => item.id === id || null )
        this._customer.next(customer)
        return customer
      }),
      switchMap((customer)=> {
        if(!customer){
          return throwError('No se pudo encontrar el id' + id)
        }
        return of(customer)
      })
    )

  }
  // UPDATE AND CREATE CUSTOMER (POST AND PUT)
  updateData(body: Region, id:string){
    return this._http.put(`http://localhost:1337/customers/${id}`, body)
    .pipe(
      tap((customerUpdate: Customer) => this._customer.next( customerUpdate )),
      switchMap( _ => {
        return this.getCustomers()
      }))
  }
  createCustomer( newCustomer: Customer ) {
    return this._http.post(`http://localhost:1337/customers`, newCustomer)
    .pipe(
      switchMap( _ => {
        return this.getCustomers()
      })
    )
  }
  //----------------------- UTILS----------------------------------------------
  getRegions (){
    return this._http.get<Regions[]>(this.endPointRegions)
      .pipe(
        tap(regions => {
          sessionStorage.setItem('regions', JSON.stringify(regions))
          this._region.next(regions['data'].regions)})
      )
  }
  getRegionsSessionStorage (regions: Region[]): void{
    this._region.next(regions)
  }

  getComunes(region: string) {
    const regiones = this._region.getValue();
    return regiones.filter(regions => region === regions.name)
  }










}

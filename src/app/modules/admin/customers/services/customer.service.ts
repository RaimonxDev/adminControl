import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject, Observable, of, throwError, concat } from 'rxjs';
import { Customer, Regions, Region, RegisterCustomer, UpdateAccountCustomer } from '../types';
import { map, switchMap, take, tap, catchError } from 'rxjs/operators';
import { UserService } from '../../../../core/user/user.service';
import { UserSingIn } from '../../../../core/user/user.model';

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
    return this._http.post<Customer>(`http://localhost:1337/customers`, newCustomer)
    .pipe(
      tap( _ => {
        return this.getCustomers()
      })
    )
  }

  private joinCustomerAndAccount ( idCustomer: string, idNewAccountCustomer: string){
    const body =
    {
      "customer":{
      "_id":`${idNewAccountCustomer}`
      }
    }
    return this._http.put<UpdateAccountCustomer>(`http://localhost:1337/customers/${idCustomer}`,body).pipe(take(1))
  }

  public registerNewCustomer(email: string, username:string, password:string, currentIdCustomer:string): Observable<any> {

    const body: RegisterCustomer = {
      email,
      username,
      password
    }

    return this._http.post<UserSingIn>(`http://localhost:1337/auth/local/register`, body  )
    .pipe(
      switchMap( ({user}) => {
        return this.joinCustomerAndAccount( currentIdCustomer , user._id)
      }),
      catchError(error => of ('')))
  }

  // params: ID del cliente que vamos a unir la cuenta creada anteriormente , 2 params: ID de la cuenta creada



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

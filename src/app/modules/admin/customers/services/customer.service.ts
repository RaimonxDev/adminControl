import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Regions, Region, } from '../types';
import { map, switchMap, take, tap, catchError, exhaustMap } from 'rxjs/operators';
import { UserService } from '../../../../core/user/user.service';
import { RegisterNewUser, User } from '../../../../core/user/user.model';
import { UserSignIn } from 'app/core/user/user.model';
import { HandleHttpResponseError } from '../../../../shared/utils/Validators/httpErrorHandler';
import { NotifierService } from 'app/shared/services/notifier.service';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // Variables
  endPointCustomers = environment.endPointCustomers;
  endPointRegions = environment.endPointRegions;
  urlBackend = environment.url;

  // Source

  protected _currentSellerId : string
  private _users: BehaviorSubject<User[]>
  private _user : BehaviorSubject<User | null >
  private _region   : BehaviorSubject<Region[]>
  // Indicador si el usuario ha sido creado
  public _wasCustomerCreated: BehaviorSubject<boolean>

  constructor(
    private _http: HttpClient,
    private _userServices: UserService,
    private _notifier: NotifierService
    )
  {
  // set Behavior
    this._users = new BehaviorSubject([])
    this._user = new BehaviorSubject(null)
    this._region =  new BehaviorSubject(null)
    this._wasCustomerCreated = new BehaviorSubject(false);
    this._userServices.SellerID$.subscribe(user => this._currentSellerId = user)
  }


  // Getter and Setter
  get customers$(): Observable<User[]>{
    return this._users.asObservable()
  }

  get customer$(): Observable<User>{
    return this._user.asObservable()
  }

  get regions$(): Observable<Region[]> {
    return this._region.asObservable()
  }

  get wasCustomerCreated$ () {
    return this._wasCustomerCreated.asObservable()
  }

  // Public Methods
  // PETICIONES GET
  // Authenticated
  getUsers(): Observable<User[]>{
    return this._http.get< User[]>(`${this.urlBackend}/users`,{
      params:{
        'role.type':`authenticated`
      }
    })
    .pipe(
      tap((customers: User[]) => this._users.next(customers)),
      catchError( error => {
        this._notifier.showNotification('Sin Conexcion', 'Error', 'warning',null)
        return HandleHttpResponseError(error,'Sin Conexcion a la base de datos')
      })
      )
  }

  getUsersById(id: string): Observable<User>{
    return this._users.pipe(
      take(1),
      map((users: User[])=> {
        const user = users.find(item => item.id === id || null )
        this._user.next(user)
        return user
      }),
      switchMap((user)=> {
        if(!user){
          return throwError('No se pudo encontrar el id' + id)
        }
        return of(user)
      })
    )

  }
  // UPDATE AND CREATE CUSTOMER (POST AND PUT)

  private UpdataDataOfNewUser ( idNewAccount: string, data: User){

    const body =
    {
    'username': data.username,
    "email": data.email,
    "comuna": data.comuna,
    "direccion": data.direccion,
    "nombre_representante": data.nombre_representante,
    "region": data.region,
    "rut_empresa": data.rut_empresa,
    "telefono": data.telefono,
    "confirmed": false,
    "blocked": false,
    "statusOnline": "online",
    "seller": this._currentSellerId

    }
    return this._http.put<User>(`${this.urlBackend}/users/${idNewAccount}`,body).pipe(
      tap( _ => this._notifier.showNotification('Actualizando Base de Datos','Espere','info',null))
    )
  }

  public registerNewCustomerAccount(data: User): Observable<any> {

    const body: RegisterNewUser = {
      'email': data.email,
      'username': data.username,
      'password': data.rut_empresa
    }

    return this._http.post<UserSignIn>(`${this.urlBackend}/auth/local/register`, body  )
    .pipe(
      tap( _ => this._notifier.showNotification('Espere Por Favor','Creando Cliente','warning',null)),
      exhaustMap( ({user}) => {
        return this.UpdataDataOfNewUser( user._id, data )
      }),
      tap( (customerUpdate: User) => this._user.next( customerUpdate )),
      switchMap( _ => {
        return this.getUsers()
      }),
      catchError( err => HandleHttpResponseError( err ,err.error.message[0].messages[0].message)  )
    )

  }

  public updateData(body: User, id:string){
    return this._http.put(`${this.urlBackend}/users/${id}`, body)
    .pipe(
      tap((customerUpdate: User) => this._user.next( customerUpdate )),
      switchMap( _ => {
        return this.getUsers()
      }),
      catchError( err => HandleHttpResponseError( err ,'Error al actulizar data') ))
  }

  public enableOrDisableCustomer(value: boolean , id: string){
    const body = {
      'confirmed': value
    }
    return this._http.put(`${this.urlBackend}/users/${id}`, body)
    .pipe(
      tap((customerUpdate: User) => this._user.next( customerUpdate )),
      switchMap( _ => {
        return this.getUsers()
      }),
      catchError( err => HandleHttpResponseError( err ,'Error al actulizar data') ))
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

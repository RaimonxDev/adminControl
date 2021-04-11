
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { concat, Subject, Subscription, BehaviorSubject, Observable } from 'rxjs';
import { ListComponent } from '../list/list.component';
import { CustomerService } from '../services/customer.service';
import { Customer, Region, Commune} from '../types';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'app/core/user/user.service';
import { User } from '../../../../core/user/user.model';
import { NotifierService } from '../../../../shared/services/notifier.service';
import { EnableAccountDialogComponent } from '../components/enable-account-dialog/enable-account-dialog-component';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { CustomValidatorReactiveForm } from 'app/shared/utils/Validators/customValidatorReactiveForm';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit, OnDestroy {

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  editMode: boolean;
  customer: Customer;
  customerForm: FormGroup;
  regions: Region[];
  comunes: Commune[];
  currentUser: User;
  isNewCustomer: string;
  patternRut: string = '/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/'
  sellerID : string ;

  editMap: any = {true: 'Cancelar', false: 'Editar'};

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _authServices: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef,
    private _ListComponent: ListComponent,
    private _customersService: CustomerService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userService: UserService,
    private _notifier: NotifierService,
    public dialog: MatDialog) {

    this._unsubscribeAll = new Subject()
    this._activatedRoute.paramMap.subscribe(params => this.isNewCustomer = params.get('id'))
    this.getCurrentSellerID()
  }

  ngOnInit(): void {

    this.customerForm = this._formBuilder.group({
      nombre_comercial : [null,[Validators.required]],
      email            : [null, [Validators.required, Validators.email],
                          CustomValidatorReactiveForm.checkFieldEmailExist(this._authServices)],
      telefono         : [null,[Validators.required]],
      rut_empresa      : [null,[Validators.required],
                          CustomValidatorReactiveForm.checkFieldRutExist(this._authServices)],
      Direccion        : [null,[Validators.required ]],
      Comuna           : [null,[Validators.required]],
      Region           : [null,[Validators.required]],
      nombre_representante: [null],
      seller: this._formBuilder.group({
        _id: [this.sellerID]
      })
    });
    // Mantienen en sidenav abierto
    this._ListComponent.matDrawer.open();


    if( this.isNewCustomer === 'create' ){
      this.editMode = true
    }
    else {
      this._customersService.customer$.pipe(
        takeUntil(this._unsubscribeAll)
      ).subscribe((customer: Customer) => {
        // Open the drawer in case it is closed
        // Get the contact
        this.customer = customer;
        this.customerForm.patchValue(customer)
      })
    }

    this._customersService.regions$.pipe(takeUntil(this._unsubscribeAll))
        .subscribe(regions => {
          this.regions = regions
          const selectedRegion = this.customerForm.get('Region').value
          this.comunes =  this._customersService.getComunes(selectedRegion)[0]?.communes
        })

    this.customerForm.get('Region')?.valueChanges.subscribe(selectRegion => {
        // cada vez que cambia la region hacemos el reset de Comuna para mantener la validacion
        if(selectRegion !== this.customer.Region){
          this.customerForm.controls['Comuna'].reset()
        }
        let comunes = this._customersService.getComunes(selectRegion)
        this.comunes = comunes[0]?.communes
      } )
  }


  closeDrawer(): Promise<MatDrawerToggleResult> {
    this._changeDetectorRef.markForCheck();
    return this._ListComponent.matDrawer.close();
  }

  toggleEditMode(value:boolean): void {
    if(value) {
      this.editMode= true
    }
    if(!value){
      this.editMode = false
      this.customerForm.patchValue(this.customer)
    }
  }

  processData(){
    if(this.isNewCustomer === 'create'){
      this.createNewCustomer()
    }
    else this.updateCustomer();
  }

  createNewCustomer(): Subscription {
    return this._customersService.createCustomer(this.customerForm.value)
    .pipe(takeUntil(this._unsubscribeAll))
      .subscribe( _ => {
        this._notifier.showNotification('Nuevo Cliente','Creado','success',null)
        this.customerForm.reset()
        this._router.navigate(['../'], {relativeTo: this._activatedRoute} )
        this.closeDrawer()
      }
      )
  }

  updateCustomer () {
     return this._customersService.updateData(this.customerForm.value, this.customer.id)
     .subscribe( _ => {
       this.editMode = false
       this._router.navigate(['../'], {relativeTo: this._activatedRoute} )
       this.closeDrawer()
        this._notifier.showNotification('Actualizada','Informacion de Cliente','success',null)
      })
  }

  getCurrentSellerID (){
    this._userService.SellerID$.subscribe(sellerID => this.sellerID = sellerID)
  }

  fieldValidator(input: string){
    return this.customerForm.controls[input].errors?.required
    &&
    this.customerForm.controls[input].touched
  }

  openDialogEnableAccount(){
    const dialogRef = this.dialog.open( EnableAccountDialogComponent, {restoreFocus: false});
    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe((result) => {
      if(result === false || undefined){
        this.menuTrigger.focus()
      }
      if( result ) {
        console.log(this.customer);
        // this._customersService.registerNewCustomer()

        // concat()
      }
    });
  }

  ngOnDestroy() : void {
    this._unsubscribeAll.next()
    this._unsubscribeAll.complete()
  }


}

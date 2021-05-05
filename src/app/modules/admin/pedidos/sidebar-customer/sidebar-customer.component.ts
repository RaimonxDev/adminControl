import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CustomerService } from '../../customers/services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../customers/types';

import { User } from '../../../../core/user/user.model';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CreateOrder } from '../models/POST_order.model';


@Component({
  selector: 'sidebar-customer',
  templateUrl: './sidebar-customer.component.html',
  styleUrls: ['./sidebar-customer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarCustomerComponent implements OnInit {
  // Inputs Outputs

  @Output() sendCustomerSelected = new EventEmitter<CreateOrder>();

  // data
  customers$: User[];
  customerSelected : User
  customer: User[]

  customerForm: FormGroup

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private _customerServices : CustomerService,
    private _formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this._customerServices.customers$.pipe(takeUntil(this._unsubscribeAll)).subscribe(data => {
      this.customers$ = data
    })


    this.initForm()
    this.customerForm.get('user').valueChanges.subscribe((customer: User) => {
      this.customerSelected = customer
    })
  }

  initForm (){
    this.customerForm = this._formBuilder.group({
      user : ['', [Validators.required]],
      transporte: ['', [Validators.required]],
      mensaje_adicional: ['']
    })
  }
  selectedCustomer() {

    if(this.customerForm.invalid){
      return
    }
    if(this.customerForm.valid){
      this.sendCustomerSelected.emit(this.customerForm.value)
    }


  }



}

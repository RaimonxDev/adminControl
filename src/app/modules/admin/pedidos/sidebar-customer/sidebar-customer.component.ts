import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CustomerService } from '../../customers/services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../customers/types';
import { UserSignIn} from 'app/core/user/user.model';
import { User } from '../../../../core/user/user.model';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'sidebar-customer',
  templateUrl: './sidebar-customer.component.html',
  styleUrls: ['./sidebar-customer.component.scss']
})
export class SidebarCustomerComponent implements OnInit {
  // Inputs Outputs
  private _unsubscribeAll: Subject<any>;
  @Output() sendCustomerSelected = new EventEmitter<Customer>();
  // data
  customers$: User[];
  customerSelected : User
  customer: User[]

  customerForm: FormGroup
  constructor(
    private _customerServices : CustomerService,
    private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    // this.customers$ = this._customerServices.customers$

    this._customerServices.customers$.pipe(take(1)).subscribe(data => {
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

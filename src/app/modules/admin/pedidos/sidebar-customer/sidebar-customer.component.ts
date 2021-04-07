import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CustomerService } from '../../customers/services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../customers/types';

@Component({
  selector: 'sidebar-customer',
  templateUrl: './sidebar-customer.component.html',
  styleUrls: ['./sidebar-customer.component.scss']
})
export class SidebarCustomerComponent implements OnInit {
  // Inputs Outputs
  @Output() sendCustomerSelected = new EventEmitter<Customer>();

  // data
  customers$ :Customer[];
  customerSelected : Customer
  customer: Customer[]

  customerForm: FormGroup
  constructor(
    private _customerServices : CustomerService,
    private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    // this.customers$ = this._customerServices.customers$

    this._customerServices.customers$.subscribe(data => {
      this.customers$ = data
    })


    this.initForm()
    this.customerForm.get('customer').valueChanges.subscribe((customer:Customer) => {
      this.customerSelected = customer
    })
  }
  initForm (){
    this.customerForm = this._formBuilder.group({
      customer : ['', [Validators.required]],
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

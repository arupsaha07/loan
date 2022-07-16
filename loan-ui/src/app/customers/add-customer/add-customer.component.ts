import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../services/customer.service'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  dob: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  addCustomer(formValue: NgForm) {
    const postBody = {
      firstName: formValue.value.firstname,
      lastName: formValue.value.lastname,
      email: formValue.value.email,
      phone: formValue.value.phone,
      dob: formValue.value.dob
    }
    // console.log(formValue.value)
    this.customerService.addCustomer(postBody).subscribe(data=>{
      // console.log(data)
    })
  }
}

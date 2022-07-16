import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
  
  customerId: any = '';
  customerDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.customerId = data['id'];
    });

    
    this.customerService.viewCustomer(this.customerId).subscribe((data:any) => {
      this.customerDetails = data['results'];

      // console.log(this.customerDetails);
    })
  }

}



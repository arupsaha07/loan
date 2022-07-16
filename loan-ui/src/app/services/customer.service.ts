import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {}


    getCustomers(){
      let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMERS;
      return this.httpClient.get(url);
    }

    viewCustomer(id: any){

      let userParams = new HttpParams().set('customerId', id)

      let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_CUSTOMER;
      return this.httpClient.get(url, {params:userParams});
    }

    addCustomer(body: any){

      let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.POST_CUSTOMER;
      return this.httpClient.post(url, body)
    }

    // editCustomer(id, customerObj){

    // }




  




}

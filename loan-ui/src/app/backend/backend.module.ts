import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendRoutingModule } from './backend-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersModule } from '../customers/customers.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BackendRoutingModule,
    CustomersModule
  ]
})
export class BackendModule { }

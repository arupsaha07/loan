import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndRoutingModule } from './frontend-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule
  ]
})
export class FrontEndModule { }

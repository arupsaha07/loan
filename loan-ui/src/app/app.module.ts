import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { CustomerService } from './services/customer.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { SharedModule } from './shared/shared.module';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatListModule } from '@angular/material/list';
// import { MatButtonModule } from '@angular/material/button';
// import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BackendLayoutComponent,
    FrontendLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
    // MatToolbarModule,
    // MatIconModule,
    // MatSidenavModule,
    // MatListModule,
    // MatButtonModule,
    // MatTableModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

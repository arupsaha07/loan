import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FrontEndHeaderComponent } from './frontend-header/front-end-header.component';
import { FrontEndFooterComponent } from './frontend-footer/front-end-footer.component';
import { BackEndFooterComponent } from './backend-footer/back-end-footer.component';
import { BackEndHeaderComponent } from './backend-header/back-end-header.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    FrontEndHeaderComponent,
    FrontEndFooterComponent,
    BackEndFooterComponent,
    BackEndHeaderComponent,
    SideNavComponent
  ],
  exports:[
    FrontEndHeaderComponent,
    FrontEndFooterComponent,
    BackEndFooterComponent,
    BackEndHeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }

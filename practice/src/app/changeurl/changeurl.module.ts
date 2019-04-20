import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeurlRoutingModule } from './changeurl-routing.module';
import { ChangeurlComponent } from './changeurl/changeurl.component';

@NgModule({
  declarations: [ChangeurlComponent],
  imports: [
    CommonModule,
    ChangeurlRoutingModule
  ]
})
export class ChangeurlModule { }


// click on link change the url
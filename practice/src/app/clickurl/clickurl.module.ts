import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickurlRoutingModule } from './clickurl-routing.module';
import { ClickurlComponent } from './clickurl/clickurl.component';

@NgModule({
  declarations: [ClickurlComponent],
  imports: [
    CommonModule,
    ClickurlRoutingModule
  ]
})
export class ClickurlModule { }



// click on buttons display the pages and ngclass
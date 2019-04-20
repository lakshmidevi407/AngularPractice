import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessvalueRoutingModule } from './lessvalue-routing.module';
import { LessvalueComponent } from './lessvalue/lessvalue.component';
import { FormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';
@NgModule({
  declarations: [LessvalueComponent],
  imports: [
    CommonModule,
    LessvalueRoutingModule,
    FormsModule,
    MultiselectDropdownModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      closeButton: true
    }),
  ]
})
export class LessvalueModule { }


// toaster not displaying alert please check

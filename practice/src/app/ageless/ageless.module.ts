import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgelessRoutingModule } from './ageless-routing.module';
import { AgelessComponent } from './ageless/ageless.component';
import { FormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';
@NgModule({
  declarations: [AgelessComponent],
  imports: [
    CommonModule,
    AgelessRoutingModule,
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
export class AgelessModule { }


// ageless alert check once
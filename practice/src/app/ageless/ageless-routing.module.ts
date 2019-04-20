import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgelessComponent } from './ageless/ageless.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: AgelessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgelessRoutingModule { }

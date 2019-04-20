import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessvalueComponent } from './lessvalue/lessvalue.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: LessvalueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessvalueRoutingModule { }

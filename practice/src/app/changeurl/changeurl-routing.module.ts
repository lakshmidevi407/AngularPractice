import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeurlComponent } from './changeurl/changeurl.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: ChangeurlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeurlRoutingModule { }

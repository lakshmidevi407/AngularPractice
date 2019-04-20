import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickurlComponent } from './clickurl/clickurl.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: ClickurlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickurlRoutingModule { }

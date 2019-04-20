import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'changeurl',
    loadChildren: './changeurl/changeurl.module#ChangeurlModule'
  },
  {
    path: 'changeurl/:id',
    loadChildren: './changeurl/changeurl.module#ChangeurlModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

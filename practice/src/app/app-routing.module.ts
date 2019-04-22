import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'lessvalue',
    loadChildren: './lessvalue/lessvalue.module#LessvalueModule'
  },
  {
    path: 'ageless',
    loadChildren: './ageless/ageless.module#AgelessModule'
  },
  {
    path: 'clickurl',
    loadChildren: './clickurl/clickurl.module#ClickurlModule'
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

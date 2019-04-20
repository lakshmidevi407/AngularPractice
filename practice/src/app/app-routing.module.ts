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

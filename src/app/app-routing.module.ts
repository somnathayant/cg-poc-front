import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckComponent} from './check/check.component';

const routes: Routes = [
  { path: 'emp', loadChildren: () => import('./emp/emp.module').then(e =>e.EmpModule) },
   { path: 'chk', component:CheckComponent }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

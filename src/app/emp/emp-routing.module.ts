import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListEmpComponent} from './list-emp/list-emp.component';
import {SaveEmpComponent} from './save-emp/save-emp.component';
const routes: Routes = [
  { path: 'list', component:ListEmpComponent},
  { path: 'save', component: SaveEmpComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }

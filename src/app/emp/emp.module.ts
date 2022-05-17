import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpRoutingModule } from './emp-routing.module';
import { SaveEmpComponent } from './save-emp/save-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [SaveEmpComponent, ListEmpComponent],
  imports: [
    CommonModule,
    EmpRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        HttpClientModule
  ]
})
export class EmpModule { }

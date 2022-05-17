import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';



@NgModule({
  declarations: [DashboardComponent, SaveEmployeeComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }

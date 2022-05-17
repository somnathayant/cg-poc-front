import { Component, OnInit } from '@angular/core';
import {EmployeeDto} from '../../dto/EmployeeDto.model';
import {EmpService} from '../../service/employeeService.component';
@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  emps: EmployeeDto[] = [];

  constructor(private empService:EmpService) { }

  ngOnInit(): void {

    this.empService.emps().subscribe((data) => {
      this.emps = data;
     
    },
      err => {
        alert("Employee not found !");
      },
      () => { console.log('Method Executed') }
    );
  }
  }



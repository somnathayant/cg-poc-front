import { Component, OnInit,OnDestroy,AfterViewInit } from '@angular/core';
import {EmployeeDto} from '../../dto/EmployeeDto.model';
import {EmpService} from '../../service/employeeService.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit,OnDestroy {

    emps: EmployeeDto[] = [];
    dtOptions: DataTables.Settings = {}; 
    dtTrigger: Subject<any> = new Subject<any>();
  constructor(private empService:EmpService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      deferLoading:10,
      processing: true
    };
    this.empService.emps().subscribe((data) => {
      this.dtTrigger.next();
      this.emps = data;
      //this.dtTrigger.next();
    },
      err => {
        alert("Employee not found !");
      },
      () => { console.log('Method Executed') }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  }



import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {EmployeeDto} from '../../dto/EmployeeDto.model';
import { EmpService } from 'src/app/service/employeeService.component';
@Component({
  selector: 'app-save-emp',
  templateUrl: './save-emp.component.html',
  styleUrls: ['./save-emp.component.css']
})
export class SaveEmpComponent implements OnInit {

  empForm:FormGroup;
  empDtoObj: EmployeeDto;
  constructor(private fb: FormBuilder,private empService:EmpService) { }

  ngOnInit(): void {

    this.empForm
     = this.fb.group({
      'name': new FormControl(''),
      'salary': new FormControl(''),
      'city': new FormControl(''),
      'state':new FormControl('')
      
    });
  }
  saveEmp(emp:EmployeeDto) {//same identical property for the formcontrolname
    alert(emp.name);  
    this.empService.saveEmp(emp).subscribe((data) => {
        
        alert("Employee saved !");

    },
      err => {
        alert("Employee not saved !");
      },
      () => { console.log('Method Executed') }
    );
  }
}

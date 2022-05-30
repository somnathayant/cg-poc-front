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
  submitted = false;
  constructor(private fb: FormBuilder,private empService:EmpService) { }

  ngOnInit(): void {
this.submitted=false;
    this.empForm
     = this.fb.group({
      'name': ['',Validators.required],
      'salary': ['',Validators.required],
      'city': ['',Validators.required],
      'state':['',Validators.required]
      
    });
  }
  get f() { return this.empForm.controls; }
  saveEmp(emp:EmployeeDto) {//same identical property for the formcontrolname
    this.submitted=true;
    alert(emp.name);  
    if(this.empForm.invalid){
      return ;
    }
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

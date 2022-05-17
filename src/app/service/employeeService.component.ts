import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import {EmployeeDto} from '../dto/EmployeeDto.model';

@Injectable()
export class EmpService {
  url: string;
  emp:EmployeeDto;
  empArray:EmployeeDto[];
  constructor(private nativeHttp: HttpClient) {

  }
  saveEmp(emp: EmployeeDto): Observable<EmployeeDto> {
  
    this.url="http://localhost:8082/saveEmployee";
     //return this.nativeHttp.post(this.url,emp).map(res => res.json());
     return this.nativeHttp.post<EmployeeDto>(this.url,emp);
  }

  
  emps():Observable<EmployeeDto[]> {
    this.url="http://localhost:8082/employees";
     //return this.nativeHttp.get(this.url).map(res => res.json());
     return this.nativeHttp.get<EmployeeDto[]>(this.url);
  }

  /* getValues():Observable<number> {
    
     //return this.nativeHttp.get(this.url).map(res => res.json());
   return of(1, 2, 3, 4, 5, 6, 7);
  }
     */
  getFromPromise(){
    this.url="http://localhost:8080/empMgMt/emps";
    //return this.nativeHttp.get(this.url).map(res => res.json());
    return this.nativeHttp.get(this.url).toPromise();
  }

}
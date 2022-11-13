import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {EmpService} from '../app/service/employeeService.component';
import { DataTablesModule } from 'angular-datatables';
import { Br1Component } from './br1/br1.component';
import { Br3Component } from './br3/br3.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    Br1Component,
    Br3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  dtOptions: DataTables.Settings = {}; //for DataTables configuration
  //Student list can be huge.
  // for this, we use trigger to make sure the data is pulled before rendering.
    dtTrigger: Subject<any> = new Subject(); 
  constructor() { }

  ngOnInit(): void {
  }

}

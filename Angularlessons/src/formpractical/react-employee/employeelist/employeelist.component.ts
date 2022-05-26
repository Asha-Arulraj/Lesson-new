import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';



@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  empl: any;

  constructor(private emp: EmpService) {

  }

  ngOnInit(): void {

    this.empl = this.emp.get();
  }

}

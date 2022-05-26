import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  empl: any;


  constructor(private test: EmpserviceService) { }

  ngOnInit(): void {
    this.empl = this.test.getempl();
  }

}

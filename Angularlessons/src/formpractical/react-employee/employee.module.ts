import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';



@NgModule({
  declarations: [
    AddemployeeComponent,
    EmployeelistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }

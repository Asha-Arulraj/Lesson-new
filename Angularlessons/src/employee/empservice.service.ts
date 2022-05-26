import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor() { }
getempl()
{
  const employee=[
    {employeeId:100, empname: 'Joel'},
    {employeeId:102, empname: 'vimal'}
  ];
  return employee;
}

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }
  get()
  {
   const employee=[
     {empName: 'john', empEmail: 'john@Rencata.com', empphn: '9999955555'},
     {empName: 'Uma', empEmail: 'uma@Rencata.com', empphn: '9656555555'},
     {empName: 'shana', empEmail: 'shana@Rencata.com', empphn: '9999959595'},
     {empName: 'Arul', empEmail: 'arul@Rencata.com', empphn: '9898955555'},

   ];
    return employee;
  }
}

import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Employee } from '../models/Emp';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent  {

  min:number  =0;
  max:number  = 0;


  filterMin:number  =0;
  filterMax:number  =0;


   empObj:Employee[] = [
     {eid : 1, ename : "SCOTT",  grade:1, job:"Clerk", dept:10,  salary:10000} ,
     {eid : 2, ename : "ARBON",  grade:2, job:"SalesMan", dept:20,salary:15000 } ,
     {eid : 3, ename : "SMITH",  grade:3, job:"Clerk", dept:10 ,salary:8000} ,
     {eid : 4, ename : "JAMES",  grade:4, job:"Manager", dept:10 ,salary:20000} ,
     {eid : 5, ename : "ADOM",  grade:1, job:"SalesMan", dept:20, salary:12000} ,
     {eid : 6, ename : "SATHYA",  grade:3, job:"Manager", dept:30, salary:25000} ,
     {eid : 7, ename : "MANEESH",  grade:4, job:"Manager", dept:30, salary:22000} ,
     {eid : 8, ename : "NARESH",  grade:2, job:"Clerk", dept:10, salary:10000} 
   ];


   filterData_click()
    {
      this.min = this.filterMin;
      this.max = this.filterMax;
    }
 }



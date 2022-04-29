import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Employee } from '../models/Emp';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent  {


   empObj:Employee[] = [
     {eid : 1, ename : "SCOTT",  grade:1} ,
     {eid : 2, ename : "ARBON",  grade:2} ,
     {eid : 3, ename : "SMITH",  grade:3} ,
     {eid : 4, ename : "JAMES",  grade:4} ,
     {eid : 5, ename : "ADOM",  grade:1} ,
     {eid : 6, ename : "SATHYA",  grade:3} ,
     {eid : 7, ename : "MANEESH",  grade:4} ,
     {eid : 8, ename : "NARESH",  grade:2} 
   ];


  
 }



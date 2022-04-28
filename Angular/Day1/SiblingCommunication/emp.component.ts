import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Employee } from '../models/Emp';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnChanges  {

  @Input() colname:string  = "";

  SortedArray:Employee[]=[];

   empObj:Employee[] = [
     {eid : 6589, ename : "Sriram",  job :  "Manager", salary:50000, dept:10} ,
     {eid : 6767, ename : "Kiran",  job :  "Tester", salary:45000, dept:20} ,
     {eid : 6547, ename : "James",  job :  "Developer", salary:50000, dept:20} ,
     {eid : 6098, ename : "Smith",  job :  "Analyst", salary:4000, dept:10} ,
     {eid : 7045, ename : "John",  job :  "CEO", salary:100000, dept:30} ,
     {eid : 7567, ename : "Venu",  job :  "Manager", salary:55000, dept:10} ,
     
   ];


   ngOnChanges(): void {
    // alert(this.colname);
    
    let sortCol = Object.keys(this.empObj[0]).find(e=>e == this.colname);
  
   this.empObj.sort((a:any,b:any)=>a[this.colname] < b[this.colname] ? -1 : 1);
      
   }
 }


